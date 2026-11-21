export default {
  async fetch(request, env) {
    if (["GET", "HEAD"].includes(request.method)) {
      const requestUrl = new URL(request.url);
      const isProductionHost = ["kasikpayi.com", "www.kasikpayi.com"].includes(requestUrl.hostname);
      const routeAliases = {
        "/index.html": "/",
        "/taksim-beyoglu-catering": "/taksim-beyoglu-catering/",
        "/taksim-beyoglu-catering/index.html": "/taksim-beyoglu-catering/",
        "/ofis-yemegi": "/ofis-yemegi/",
        "/ofis-yemegi/index.html": "/ofis-yemegi/",
        "/etkinlik-catering": "/etkinlik-catering/",
        "/etkinlik-catering/index.html": "/etkinlik-catering/",
      };
      const canonicalPath = routeAliases[requestUrl.pathname];

      if (isProductionHost && (canonicalPath || requestUrl.host !== "kasikpayi.com" || requestUrl.protocol !== "https:")) {
        const destination = new URL(requestUrl);
        destination.protocol = "https:";
        destination.host = "kasikpayi.com";
        if (canonicalPath) destination.pathname = canonicalPath;
        return Response.redirect(destination, 301);
      }

      if (isProductionHost) return env.ASSETS.fetch(request);
    }

    // Retain the app-shell fallback for preview hosts used by the Sites prototype.
    // The production domain serves known pages as static HTML and must return real 404s.
    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get("accept")?.includes("text/html");

    if (response.status !== 404 || !acceptsHtml || !["GET", "HEAD"].includes(request.method)) {
      return response;
    }

    const indexUrl = new URL(request.url);
    indexUrl.pathname = "/index.html";
    indexUrl.search = "";
    return env.ASSETS.fetch(new Request(indexUrl, request));
  },
};
