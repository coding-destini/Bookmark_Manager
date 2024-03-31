import React from 'react'
import logo from '../assets/asset 0.png'


const Footer = () => {
  return (
    <div>
        <footer className="container">
  <div className="rounded-lg border lg:border-none lg:bg-gray-50 bg-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
    <a href="#" className="font-light font-display">
      Documentation
    </a>
    <div className="flex gap-8 text-lg">
      <a href="https://www.linkedin.com/in/akash-shah-17053522a/" className="text-gray-600 hover:text-gray-900">
      <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/coding-destini" className="text-gray-600 hover:text-gray-900">
        <i className="fa-brands fa-github" />
      </a>
    </div>
    <a href="#" id="brand" className="flex gap-2 items-center flex-1">
      <img
        className="object-cover max-w-12 max-h-12"
        src={logo}
        alt="Logo"
      />
      <span className="text-lg font-medium font-display">Bookmarkify</span>
    </a>
  </div>
  <div
    id="sub-footer"
    className="flex flex-col gap-6 items-center justify-center my-12"
  >
    <div className="flex gap-2 items-center ">
      <p className="text-sm text-gray-600">A Bookmarkify company.</p>
    </div>
    <p className="text-sm text-gray-400">
      © 2024 ToDesktop, Inc. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  )
}

export default Footer