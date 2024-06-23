import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const dailyUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const dailyRes = await fetch(dailyUrl, {
      next: { revalidate: 3600 },
    });
    const dailyData = await dailyRes.json();
    return NextResponse.json(dailyData);
  } catch (error) {
    console.error('Error in route.ts: ', error);
    return new Response('Error fetching data', { status: 500 });
  }
}
