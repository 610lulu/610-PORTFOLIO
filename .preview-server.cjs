const http = require("http")
const https = require("https")
const fs = require("fs")
const path = require("path")

const root = __dirname
const mime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
}

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname)
  if (pathname.startsWith("/Photography-Portfolio-2/")) {
    const remote = `https://610lulu.github.io${pathname}`
    https.get(remote, (upstream) => {
      response.writeHead(upstream.statusCode || 502, upstream.headers)
      upstream.pipe(response)
    }).on("error", () => response.writeHead(502).end("Photography asset unavailable"))
    return
  }
  const requested = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "")
  const file = path.resolve(root, requested)

  if (!file.startsWith(root + path.sep)) {
    response.writeHead(403).end("Forbidden")
    return
  }

  fs.stat(file, (error, stats) => {
    const target = !error && stats.isDirectory() ? path.join(file, "index.html") : file
    fs.readFile(target, (readError, data) => {
      if (readError) {
        response.writeHead(404).end("Not found")
        return
      }
      response.writeHead(200, { "Content-Type": mime[path.extname(target).toLowerCase()] || "application/octet-stream" })
      response.end(data)
    })
  })
}).listen(8000, "127.0.0.1")
