import { onRequestPost, type Env } from "./functions/api/submit-form"

export interface WorkerEnv extends Env {
  ASSETS: { fetch(request: Request): Promise<Response> }
}

export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const url = new URL(request.url)
    if (url.pathname === "/api/submit-form" || url.pathname === "/api/submit-form/") {
      if (request.method === "POST") {
        return onRequestPost({ request, env })
      }
      return new Response(JSON.stringify({ status: "error", message: "Method Not Allowed" }), {
        status: 405,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Allow: "POST",
        },
      })
    }
    return env.ASSETS.fetch(request)
  },
}
