import React from 'react'

function Gallery() {
  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="/assests/images/g3 (1).jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="/assests/images/g1.jpg" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="/assests/images/g2.jpg" />
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="/assests/images/DSC_7800.JPG" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="/assests/images/g8.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="/assests/images/g9.jpeg" />
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Gallery