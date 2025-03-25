"use client"

import dynamic from "next/dynamic"

// Use dynamic import with SSR disabled to make the app fully client-side
const App = dynamic(() => import("../app"), { ssr: false })

export default function Home() {
  return <App />
}

