import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="lg:px-20 lg:py-20 ">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
