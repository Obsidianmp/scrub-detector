export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await request.json();

    // Use different endpoints based on whether grouping is requested
    const hasGrouping = (body.columns && body.columns.length > 0) || (body.groups && body.groups.length > 0);
    const endpoint = hasGrouping
      ? 'https://api.eflow.team/v1/networks/reporting/entity-stats'
      : 'https://api.eflow.team/v1/networks/reporting/entity/summary';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Eflow-API-Key': env.EVERFLOW_API_KEY,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    // Log the request and response for debugging
    console.log('Everflow API request:', { endpoint, body });
    console.log('Everflow API response:', data);

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
