export async function useServerApi({
  endpoint,
  mode = "SSG",
  revalidate = 3600,
}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://dashboard.medlockrealty.com";
  const url = `${baseUrl}/api${endpoint}`;

  const fetchOptions =
    mode === "SSR"
      ? { cache: "no-store" }
      : mode === "ISR"
        ? { cache: "force-cache", next: { revalidate } }
        : { cache: "force-cache" };

  try {
    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
      console.error(
        `[useServerApi] Error: ${res.status} ${res.statusText} at ${url}`
      );
      return null;
    }

    return res.json();
  } catch (err) {
    console.error(`[useServerApi] Network Error: ${err.message} at ${url}`);
    return null;
  }
}
