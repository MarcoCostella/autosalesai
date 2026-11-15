"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type CaptchaApi={ready:(callback:()=>void)=>void;render:(container:HTMLElement,options:{sitekey:string;theme:string;size:string;callback:(token:string)=>void;"expired-callback":()=>void;"error-callback":()=>void})=>number;reset:(id:number)=>void};
declare global {interface Window {grecaptcha?:CaptchaApi;}}
export default function CaptchaChallenge({siteKey,onToken,resetCount}:{siteKey:string;onToken:(token:string)=>void;resetCount:number}) {
 const [started,setStarted]=useState(false);
 const [loaded,setLoaded]=useState(false);
 const [message,setMessage]=useState("");
 const element=useRef<HTMLDivElement>(null);
 const widget=useRef<number|null>(null);
 const callback=useRef(onToken);
 useEffect(()=>{callback.current=onToken;},[onToken]);
 useEffect(()=>{
  if(!loaded||!element.current||!window.grecaptcha)return;
  let active=true;
  window.grecaptcha.ready(()=>{
   if(!active||!element.current||!window.grecaptcha||widget.current!==null)return;
   try {widget.current=window.grecaptcha.render(element.current,{sitekey:siteKey,theme:"dark",size:"compact",callback:token=>{if(active){callback.current(token);setMessage("Security check complete.");}},"expired-callback":()=>{if(active){callback.current("");setMessage("Security check expired. Please complete it again.");}},"error-callback":()=>{if(active){callback.current("");setMessage("The security check could not connect. Please refresh this page or contact us by email.");}}});}
   catch {setMessage("The security check could not load. Please refresh this page or contact us by email.");}
  });
  return ()=>{active=false;if(widget.current!==null&&window.grecaptcha){window.grecaptcha.reset(widget.current);widget.current=null;}callback.current("");};
 },[loaded,siteKey]);
 useEffect(()=>{if(resetCount>0&&widget.current!==null&&window.grecaptcha){window.grecaptcha.reset(widget.current);callback.current("");setMessage("Please complete the security check again before retrying.");}},[resetCount]);
 return <div className="mt-5 rounded-xl border border-white/15 bg-black/20 p-4"><p className="text-sm font-semibold text-white">A quick security check</p><p className="mt-2 text-xs leading-6 text-white/60">To help prevent spam, load Google reCAPTCHA and complete the check before sending your enquiry. It uses a security cookie and processes browser/device information. You can also email <a href="mailto:contact@autosalesai.co.uk" className="text-[#49d7ff] underline">contact@autosalesai.co.uk</a>.</p>{!started?<button type="button" onClick={()=>setStarted(true)} className="mt-3 inline-flex min-h-11 items-center rounded-lg border border-[#49d7ff]/50 px-4 text-sm font-semibold text-[#49d7ff]">Load security check</button>:<><Script id="autosalesai-recaptcha" src="https://www.recaptcha.net/recaptcha/api.js?render=explicit" strategy="afterInteractive" onReady={()=>setLoaded(true)} onError={()=>setMessage("The security check could not load. Please refresh this page or contact us by email.")}/>{!loaded&&!message&&<p role="status" className="mt-3 text-xs text-white/60">Loading security check…</p>}<div ref={element} className="mt-3 min-h-0"/></>}<p role="status" aria-live="polite" className="mt-2 text-xs leading-6 text-white/65">{message}</p><p className="mt-2 text-[11px] leading-5 text-white/45">Google’s <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="underline">Terms of Service</a> apply to reCAPTCHA.</p></div>;
}
