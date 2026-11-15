const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
const code = ts.transpileModule(fs.readFileSync("components/forms/DemoForm.tsx", "utf8"), {compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022}}).outputText;
const RealFormData = global.FormData;
class TestFormData {
  constructor(form) { this.values=new Map(Object.entries(form?.values||{})); }
  get(key) { return this.values.get(key)??null; }
  set(key,value) { this.values.set(key,value); }
  append(key,value) { this.set(key,value); }
}
function render(fetchImplementation) {
  const errors=[],routes=[],requests=[];
  const output={exports:{}};
  function fakeRequire(id) {
    if(id==="react")return {useRef:value=>({current:value}),useState:initial=>[initial,value=>{if(typeof value==="string")errors.push(value);} ]};
    if(id==="next/navigation")return {useRouter:()=>({push:path=>routes.push(path)})};
    if(id==="./CaptchaChallenge")return {__esModule:true,default:"captcha-test"};
    if(id==="next/link")return {default:()=>null};
    return require(id);
  }
  new Function("require","module","exports","fetch",code)(fakeRequire,output,output.exports,async(url,options)=>{requests.push({url,options});return fetchImplementation(url,options);});
  const tree=output.exports.default();
  function findCaptcha(node) {if(!node||typeof node!=="object")return null;if(node.type==="captcha-test")return node;for(const child of [node.props?.children].flat(Infinity)){const found=findCaptcha(child);if(found)return found;}return null;}
  const captcha=findCaptcha(tree);
  const verify=token=>captcha.props.onToken(token);
  const submit=(values={})=>tree.props.onSubmit({preventDefault(){},currentTarget:{values:{name:"Test Dealer",dealership:"Example Garage",email:"test@example.invalid",...values}}});
  return {submit,requests,errors,routes,verify};
}
(async()=>{
 global.FormData=TestFormData;
 try {
  const ok=render(async()=>({ok:true,status:200}));ok.verify("valid-test-token");await ok.submit({message:"  Stock enquiry  ",unexpected:"must not be sent",_gotcha:""});
  assert.deepEqual(ok.routes,["/thank-you"]);assert.equal(ok.requests[0].options.body.get("unexpected"),null);assert.equal(ok.requests[0].options.body.get("message"),"Stock enquiry");assert.equal(ok.requests[0].options.body.get("_subject"),"New AutoSalesAI Demo Request");assert.equal(ok.requests[0].options.body.get("_gotcha"),"");assert.ok(ok.requests[0].options.signal);
  assert.equal(ok.requests[0].options.body.get("g-recaptcha-response"),"valid-test-token");
  const blocked=render(async()=>{throw Error("must not send without token");});await blocked.submit();assert.equal(blocked.requests.length,0);assert.ok(blocked.errors.some(e=>e.includes("security check")));
  ok.routes.length=0;await ok.submit();assert.equal(ok.requests.length,1);
  const large=render(async()=>{throw Error("should not fetch");});await large.submit({message:"x".repeat(3001)});assert.equal(large.requests.length,0);assert.ok(large.errors.some(e=>e.includes("shorten")));
  const limited=render(async()=>({ok:false,status:429}));limited.verify("valid-test-token");await limited.submit();assert.equal(limited.routes.length,0);assert.ok(limited.errors.some(e=>e.includes("Too many requests")));limited.verify("valid-test-token");await limited.submit();assert.equal(limited.requests.length,2);
  const failed=render(async()=>{throw new DOMException("Timed out","TimeoutError");});failed.verify("valid-test-token");await failed.submit();assert.equal(failed.routes.length,0);assert.ok(failed.errors.some(e=>e.includes("Please try again")));
  let release;const pending=render(()=>new Promise(resolve=>{release=resolve;}));pending.verify("valid-test-token");const first=pending.submit();await pending.submit();assert.equal(pending.requests.length,1);release({ok:true,status:200});await first;
  console.log("PASS: form field allowlist, limits, honeypot payload, duplicate blocking, successful handover, timeout recovery and rate-limit handling (mocked; no enquiry sent).");
 } finally {global.FormData=RealFormData;}
})().catch(error=>{console.error(error);process.exitCode=1;});

