import { NextResponse } from "next/server";

export async function GET() {
  console.log("API Route /api/location was hit!");

  try {
    // We use a 5-second timeout to prevent the page from hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch("https://ipapi.co/json/", {
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    clearTimeout(timeoutId);
    const data = await response.json();

    return NextResponse.json({
      city: data.city || "Toronto",
    });
  } catch (error) {
    console.error("Fetch error in API route:", error.message);
    // Always return a valid JSON even on failure to avoid frontend crashes
    return NextResponse.json({ city: "Toronto" });
  }
}
