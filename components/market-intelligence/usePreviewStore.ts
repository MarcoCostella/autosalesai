"use client";
import { useEffect, useState } from "react";
export function usePreviewStore<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    try { const raw = localStorage.getItem(key); if (raw) setValue(JSON.parse(raw)); } catch { setError("Saved preferences could not be read. This preview will work for this visit."); }
    setReady(true);
  }, [key]);
  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { setError("Browser storage is unavailable. Changes will last for this visit only."); }
  }, [key, value, ready]);
  return {value, setValue, ready, error};
}
export const watchlistKey = "autosalesai-preview-watchlist-v1";