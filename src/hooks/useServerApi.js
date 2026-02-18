export async function useServerApi({
  endpoint,
  mode = "SSG",
  revalidate = 3600,
}) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api${endpoint}`;

  const fetchOptions =
    mode === "SSR"
      ? { cache: "no-store" }
      : mode === "ISR"
        ? { cache: "force-cache", next: { revalidate } }
        : { cache: "force-cache" };

  const res = await fetch(url, fetchOptions);

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);

  return res.json();
}
