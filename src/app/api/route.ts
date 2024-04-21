export async function GET(request: Request) {
  const data = {
    pong: 'pong',
    auth: request.headers.get('x-Authorization') ?? null,
  }

  return Response.json(data, {
    status: 200,
    headers: {
      'x-Custom-Header': 'fuga',
      'Content-Type': 'application/json',
    }
  })
}
