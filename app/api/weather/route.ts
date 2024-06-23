import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const weatherResponse = await axios.get(weatherUrl);
    return NextResponse.json(weatherResponse.data);
  } catch (e) {
    console.error('Error in route.ts: ', e);
    return new Response('Error fetching data', { status: 500 });
  }
}
