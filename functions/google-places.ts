export const onRequest = async ({ request, env }) => {
  console.log('Cloudflare Function Triggered!');

  const url = new URL(request.url);
  const query = url.searchParams.get('query');
  const lang = url.searchParams.get('language');
  console.log(' Received query:', query);

  if (!query) {
    console.log('Missing query parameter');
    return new Response(JSON.stringify({ error: 'Missing query parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const googleApiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&key=${env.GOOGLE_MAPS_API_KEY}&language=${lang}`;
  console.log('🌍 Requesting Google API:', googleApiUrl);

  try {
    const response = await fetch(googleApiUrl);
    console.log('Google API Response Status:', response.status);

    const data = await response.json() as any;
    console.log('📜 Google API Response Data:', JSON.stringify(data, null, 2));

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Error in Cloudflare Function:', error.message);
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
