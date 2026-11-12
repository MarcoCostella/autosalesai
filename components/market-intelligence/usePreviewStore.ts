"use client";
import { useEffect, useState } from "react";
export function usePreviewStore<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    function read() { try { const raw=localStorage.getItem(key); if(raw) setValue(current=>JSON.stringify(current)===raw?current:JSON.parse(raw)); } catch { setError("Saved preferences could not be read. This preview will work for this visit."); } }
    read(); setReady(true);
    const sync=(event:Event)=>{if(event instanceof StorageEvent && event.key!==key)return;if(event instanceof CustomEvent && event.detail!==key)return;read()};
    window.addEventListener("storage",sync);window.addEventListener("autosalesai-preview-change",sync);
    return ()=>{window.removeEventListener("storage",sync);window.removeEventListener("autosalesai-preview-change",sync)};
  }, [key]);
  useEffect(() => {
    if (!ready) return;
    try { const raw=JSON.stringify(value);if(localStorage.getItem(key)!==raw){localStorage.setItem(key,raw);window.dispatchEvent(new CustomEvent("autosalesai-preview-change",{detail:key}));} } catch { setError("Browser storage is unavailable. Changes will last for this visit only."); }
  }, [key, value, ready]);
  return {value, setValue, ready, error};
}
export const watchlistKey = "autosalesai-preview-watchlist-v1";