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
    if(id==="next/link")return {default:()=>null};
    return require(id);
  }
  new Function("require","module","exports","fetch",code)(fakeRequire,output,output.exports,async(url,options)=>{requests.push({url,options});return fetchImplementation(url,options);});
  const tree=output.exports.default();
  const submit=(values={})=>tree.props.onSubmit({preventDefault(){},currentTarget:{values:{name:"Test Dealer",dealership:"Example Garage",email:"test@example.invalid",...values}}});
  return {submit,requests,errors,routes};
}
(async()=>{
 global.FormData=TestFormData;
 try {
  const ok=render(async()=>({ok:true,status:200}));await ok.submit({message:"  Stock enquiry  ",unexpected:"must not be sent",_gotcha:""});
  assert.deepEqual(ok.routes,["/thank-you"]);assert.equal(ok.requests[0].options.body.get("unexpected"),null);assert.equal(ok.requests[0].options.body.get("message"),"Stock enquiry");assert.equal(ok.requests[0].options.body.get("_subject"),"New AutoSalesAI Demo Request");assert.equal(ok.requests[0].options.body.get("_gotcha"),"");assert.ok(ok.requests[0].options.signal);
  const large=render(async()=>{throw Error("should not fetch");});await large.submit({message:"x".repeat(3001)});assert.equal(large.requests.length,0);assert.ok(large.errors.some(e=>e.includes("shorten")));
  const limited=render(async()=>({ok:false,status:429}));await limited.submit();assert.equal(limited.routes.length,0);assert.ok(limited.errors.some(e=>e.includes("Too many requests")));await limited.submit();assert.equal(limited.requests.length,2);
  const failed=render(async()=>{throw new DOMException("Timed out","TimeoutError");});await failed.submit();assert.equal(failed.routes.length,0);assert.ok(failed.errors.some(e=>e.includes("Please try again")));
  let release;const pending=render(()=>new Promise(resolve=>{release=resolve;}));const first=pending.submit();await pending.submit();assert.equal(pending.requests.length,1);release({ok:true,status:200});await first;
  console.log("PASS: form field allowlist, limits, honeypot payload, duplicate blocking, successful handover, timeout recovery and rate-limit handling (mocked; no enquiry sent).");
 } finally {global.FormData=RealFormData;}
})().catch(error=>{console.error(error);process.exitCode=1;});
