import React from 'react'
import download from '../assets/download.png'
import extract from '../assets/extract.png'
import select from '../assets/select.png'

const Steps = () => {
  return (
    <div>
    <div id="steps" className="flex flex-col gap-6 container mt-20">
      <h2 className="text-5xl sm:font-semibold mb-14">How to Download and Use the Extension</h2>
      <div id="step1" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between ">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 1</span>
          <h3 className="text-4xl">Click on the "Download Extension" Button</h3>
          <p className="text-lg font-light">
            Click on the "Download Extension" button to initiate the download process.
          </p>
        </div>
        <div className="pt-12">
          <img src={download} alt="" style={{ width: "580px", height: "320px", borderRadius:'20px', marginTop:'-40px' }}/>
        </div>
      </div>
      <div id="step2" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 2</span>
          <h3 className="text-4xl">Download and Extract the Extension</h3>
          <p className="text-lg font-light">
            After downloading, extract the extension from the ZIP archive to a desired location on your computer.
          </p>
        </div>
        <div className="pt-12">
          <img src={extract} alt="" style={{ width: "580px", height: "320px", borderRadius:'20px', marginTop:'-40px' }}/>
        </div>
      </div>
      <div id="step3" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 3</span>
          <h3 className="text-4xl">Add the Extension to Chrome</h3>
          <p className="text-lg font-light">
            Click on the three dots menu at the top right corner of Chrome, then select "Extensions". Enable "Developer mode" and click on "Load unpacked". Select the extracted extension folder to add it to Chrome.
          </p>
        </div>
        <div className="pt-12">
          <img src={select} alt="" style={{ width: "580px", height: "320px", borderRadius:'20px', marginTop:'-40px' }}/>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Steps