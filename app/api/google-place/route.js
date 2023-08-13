import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category");
  const radius = searchParams.get("radius");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const res = await fetch(
    BASE_URL +
      "/textsearch/json?query=" +
      category +
      "&location=" +
      lat +
      "," +
      lng +
      "&radius=" +
      radius +
      "&key=" +
      GOOGLE_API_KEY,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const product = await res.json();

  return NextResponse.json({ product });
}

// https://maps.googleapis.com/maps/api/place/textsearch/json?query=indian&location=13.3318,74.7454&radius=1000&key=AIzaSyAXKzc6lKtOEpZgYsYFrT-lYSCrHrKoYik

// http://localhost:3000/api/google-place?category=indian&radius=1000&lat=13.3318,lng=74.7454
