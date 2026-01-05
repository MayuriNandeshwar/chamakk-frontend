import { HeroMedia } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

export async function fetchHeroMedia(): Promise<HeroMedia[]> {
  const res = await fetch(
    `${API_BASE}/api/public/website-media?pageSection=HOME_HERO`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Hero media fetch failed: ${res.status}`);
  }

  return res.json();
}
