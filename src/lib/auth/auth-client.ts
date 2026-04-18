import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000"
})

//the lines above are as per docs and below we define and import the  type of auth and session and cache we want by going through different set of instruction o better-auth https://better-auth.com/docs/installation