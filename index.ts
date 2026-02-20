Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response("Hello via Bun!"),
    "/health": () => new Response("OK"),
  },
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});

console.log("Server running at http://localhost:3000");