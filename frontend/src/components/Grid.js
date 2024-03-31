import React from 'react'
import grid1 from '../assets/asset 37.png'
import grid2 from '../assets/asset 38.png'
import grid3 from '../assets/asset 39.png'
import grid4 from '../assets/asset 40.png'

const Grid = () => {
  return (
    <div id="bento-grid " className="container">
      <h2 className="text-5xl sm:font-semibold mb-14 max-w-2xl leading-normal">
        Efficiently Manage Your Bookmarks
      </h2>
      <div
        id="grid-container"
        className="flex flex-col gap-6 lg:grid lg:grid-cols-3"
        style={{ gridAutoRows: 96 }}
      >
        <div className="row-start-1 row-end-3 group rounded-2xl gradient-hover-outer">
          <div className="gradient-hover-inner rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center ">
            <h3 className="text-2xl">Bookmark Manager</h3>
            <p className="text-lg text-center font-light">
             Access them anytime, anywhere.
            </p>
            <img src={grid1} alt="" />
          </div>
        </div>
        <div className="row-start-1 row-end-4 group rounded-2xl gradient-hover-outer">
          <div className="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
            <h3 className="text-2xl">Smart Bookmarks</h3>
            <p className="text-lg text-center font-light">
              Our intelligent bookmarking system categorizes your bookmarks for easy retrieval and organization.
            </p>
            <img src={grid2} alt="" />
          </div>
        </div>
        <div className="row-start-1 row-end-3 group rounded-2xl gradient-hover-outer">
          <div className="gradient-hover-inner rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
            <h3 className="text-2xl">Seamless Integration</h3>
            <p className="text-lg text-center font-light">
               Sync bookmarks effortlessly.
            </p>
            <img src={grid3} alt="" />
          </div>
        </div>
        <div className="row-start-3 row-end-6 group rounded-2xl gradient-hover-outer">
          <div className="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
            <h3 className="text-2xl">Sync Across Devices</h3>
            <p className="text-lg text-center font-light">
              Access your bookmarks from any device, ensuring you never miss important links when you need them.
            </p>
            <img src={grid4} alt="" />
          </div>
        </div>
        <div className="row-start-4 row-end-6 group rounded-2xl gradient-hover-outer">
          <div className="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
            <h3 className="text-2xl">Customizable Experience</h3>
            <p className="text-lg text-center font-light">
            Effortlessly organize your favorite websites and articles.
            </p>
            <img src={grid1} alt="" />
          </div>
        </div>
        <div className="row-start-3 row-end-6 group rounded-2xl gradient-hover-outer">
          <div className="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
            <h3 className="text-2xl">Effortless Installation</h3>
            <p className="text-lg text-center font-light">
              Get started in minutes with our easy-to-install Chrome extension and web application setup process.
            </p>
            <img src={grid2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid