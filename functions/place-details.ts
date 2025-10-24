export const onRequest = async ({ request, env }) => {
  const url = new URL(request.url);
  const placeId = url.searchParams.get('place_id');
  const lang = url.searchParams.get('language');

  if (!placeId) {
    return new Response(
      JSON.stringify({ error: 'Missing place_id parameter' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=${env.GOOGLE_MAPS_API_KEY}&language=${lang}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch place details from Google Places API');
    }

    const data = await response.json() as any;

    if (!data.result || !data.result.geometry) {
      return new Response(
        JSON.stringify({ error: 'Invalid response from Google Places API' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        lat: data.result.geometry.location.lat,
        lng: data.result.geometry.location.lng,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        details: (error as Error).message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
