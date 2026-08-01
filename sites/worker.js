const upstreamOrigin = 'https://610lulu.github.io'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname.startsWith('/Photography-Portfolio-2/')) {
      const upstreamUrl = new URL(url.pathname + url.search, upstreamOrigin)
      return fetch(new Request(upstreamUrl, request))
    }

    const assetResponse = await env.ASSETS.fetch(request)
    const isDocument = url.pathname === '/' || url.pathname === '/index.html'
    if (isDocument && assetResponse.ok) {
      const headers = new Headers(assetResponse.headers)
      headers.set('cache-control', 'no-cache, no-store, must-revalidate')
      return new Response(assetResponse.body, {
        status: assetResponse.status,
        statusText: assetResponse.statusText,
        headers,
      })
    }

    if (assetResponse.status !== 404 || request.method !== 'GET') {
      return assetResponse
    }

    const acceptsHtml = (request.headers.get('accept') || '').includes('text/html')
    if (!acceptsHtml && url.pathname.includes('.')) {
      return assetResponse
    }

    return env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request))
  },
}
