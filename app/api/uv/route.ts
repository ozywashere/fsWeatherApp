import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    const uvUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;

    const uvResponse = await fetch(uvUrl, {
      next: { revalidate: 900 },
    });
    const uvData = await uvResponse.json();
    return NextResponse.json(uvData);
  } catch (error) {
    console.error('Error Getting Uv Data', error);
    return new Response('Error fetching uv data', { status: 500 });
  }
}
