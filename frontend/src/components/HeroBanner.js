import React,{useState} from 'react';
import Modal from './Modal';

const HeroBanner = () => {
    
    const [open, setOpen] = useState(false);
    const handleShow = () => {
      setOpen(true);
    };

    const handleDownloadClick = () => {
        window.location.href = 'https://drive.google.com/file/d/1XXPz1qvmUgZguHP7A5UqwAMquIjQm59j/view?usp=sharing';
      };
    
    return (
        <div className='mt-5'>
            <div
                id="hero"
                className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent"
            >
                <div
                    id="hero-container"
                    className="max-w-4xl mx-auto px-6 pt-6 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl"
                >
                    <div
                        id="version-text"
                        className="flex items-center my-6 gap-2 border border-yellow-300 
            bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group"
                    >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600" />
                        <p className="font-display font-medium text-yellow-600">
                            v0.21.1: <span className="text-yellow-800">Find-in-page bug fixes</span>
                        </p>
                        <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300" />
                    </div>
                    <div id="hero-features" className="hidden sm:flex gap-8 my-6">
                        <div className="flex justify-center gap-2 items-center text-gray-500">
                            <i className="fa-regular fa-file-code text-sm" />
                            <p>Bookmark Management</p>
                        </div>
                        <div className="flex justify-center gap-2 items-center text-gray-500">
                            <i className="fa-solid fa-hand-back-fist" />
                            <p>No Drag &amp; Drop Required</p>
                        </div>
                        <div className="flex justify-center gap-2 items-center text-gray-500">
                            <i className="fa-solid fa-laptop" />
                            <p>Accessible on Any Device</p>
                        </div>
                    </div>
                    <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">
                        Simplify Bookmark Management
                    </h1>
                    <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">
                        Organize your bookmarks effortlessly and access them from anywhere. Our intuitive bookmark manager streamlines your online experience.
                    </p>
                    <div
                        id="buttons-container"
                        className="mt-10 flex gap-4 flex-col sm:flex-row"
                    >
                        <button onClick={handleDownloadClick} className="px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90">
                            Download Extension
                        </button>
                        <button   onClick={() => handleShow()} className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">
                            Test now
                        </button>
                    </div>
                </div>
                <div id="companies-container" className="flex flex-col gap-10">
                    <div id="companies-title" className="flex justify-center gap-2">
                        <img className="translate-y-2" src="../assets/asset 2.svg" alt="" />
                        <span className="font-semibold">EXTENSION POWERED BY BOOKMARKIFY</span>
                        <img
                            className="-scale-x-100 translate-y-2"
                            src="../assets/asset 2.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <Modal open={open} setOpen={setOpen}/>
        </div>
    );
};

export default HeroBanner;
