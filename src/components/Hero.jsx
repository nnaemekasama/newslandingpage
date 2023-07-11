import React from "react"
import webMobile from "../assets/images/image-web-3-mobile.jpg"
import webDesktop from "../assets/images/image-web-3-desktop.jpg"
import pc from "../assets/images/image-retro-pcs.jpg"
import laptops from "../assets/images/image-top-laptops.jpg"
import game from "../assets/images/image-gaming-growth.jpg"

const Hero = () => {
  const data = [
    {
      id: "01",
      header: "Reviving Retro PCs",
      text: " What happens when old PCs are given modern upgrades?",
      image: pc,
    },
    {
      id: "02",
      header: "Top 10 Laptops of 2022",
      text: " Our best picks for various needs and budgets.",
      image: laptops,
    },
    {
      id: "03",
      header: "The Growth of Gaming How",
      text: " the pandemic has sparked fresh opportunities.",
      image: game,
    },
  ]
  return (
    <div className="w-full min-h-screen px-4 flex flex-col py-4 md:grid md:grid-cols-3 gap-8">
      <div className="col-span-2">
        <img src={webMobile} className="md:hidden   " alt="web image" />
        <img src={webDesktop} className="hidden md:flex " alt="web image" />
        <div className="md:flex gap-4 py-4">
          <p className="text-6xl font-bold   ">The Bright Future of Web 3.0?</p>
          <div className="md:flex flex-col justify-between">
            <p className="py-2 md:text-xl">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button
              style={{ backgroundColor: "hsl(5, 85%, 63%)" }}
              className="text-white border-2 px-6 py-3 my-2 w-[60%]  tracking-widest "
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div
        className=" px-4 col-span-1  flex flex-col justify-evenly  text-white"
        style={{ backgroundColor: "hsl(240, 100%, 5%)" }}
      >
        <p className="text-3xl pt-2" style={{ color: "hsl(35, 77%, 62%)" }}>
          NEW
        </p>
        <p className="border-b border-gray-400 py-6 md:text-xl">
          Hydrogen VS Electric Cars Will hydrogen-fueled cars ever catch up to
          EVs?
        </p>
        <p className="border-b border-gray-400 py-6 md:text-xl">
          The Downsides of AI Artistry What are the possible adverse effects of
          on-demand AI image generation?
        </p>
        <p className="py-6 md:text-xl">
          Is VC Funding Drying Up? Private funding by VC firms is down 50% YOY.
          We take a look at what that means.
        </p>
      </div>

      {data.map((p) => (
        <div className="flex gap-4 py-2  flex-shrink">
          <img src={p.image} style={{ width: "75px", height: "100px" }} />
          <div>
            <p className="text-2xl text-pink-500">{p.id}</p>
            <p className="font-bold">{p.header}</p>
            <p>{p.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Hero
