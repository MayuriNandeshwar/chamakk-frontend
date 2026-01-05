"use client";

import { useEffect, useState } from "react";
import { HeroMedia } from "@/lib/api/home/hero/types";
import { fetchHeroMedia } from "@/lib/api/home/hero/fetchHeroMedia";

export function useHeroMedia() {
  const [media, setMedia] = useState<HeroMedia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const data = await fetchHeroMedia();
        if (mounted) setMedia(data);
      } catch {
        if (mounted) setMedia([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return { media, loading };
}
