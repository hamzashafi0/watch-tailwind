"use client"

import Image from 'next/image'
import React from 'react'



const Project = () => {
  return (
    <div id='project' className='bg-purple-500'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {/* watch 01 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-[70%] md:h-36 w-full object-cover object-center"
            src={'/pic/watch 1.jpg'}
            alt="blog"
            width={300}
            height={300}
          />
          <div className="p-6 ">
           <h1 className="title-font text-lg ml-5 font-bold text-blue-900 mb-3">
              $5000
            </h1> 
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-5 rounded-lg  ">
              Add To Cart
            </button>
           </div>


        </div>
        

      </div>
{/* watch 02 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-[70%] md:h-36 w-full object-cover object-center"
            src={'/pic/watch 2.jpg'}
            alt="blog"
            width={300}
            height={300}
          />
          <div className="p-6 ">
           <h1 className="title-font text-lg ml-5 font-bold text-blue-900 mb-3">
              $6000
            </h1> 
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-5 rounded-lg  ">
              Add To Cart
            </button>
           </div>


        </div>
        

      </div>
{/* watch 03 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-[70%] md:h-36 w-full object-cover object-center"
            src={'/pic/watch 3.jpg'}
            alt="blog"
            width={300}
            height={300}
          />
          <div className="p-6 ">
           <h1 className="title-font text-lg ml-5 font-bold text-blue-900 mb-3">
              $7000
            </h1> 
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-5 rounded-lg  ">
              Add To Cart
            </button>
           </div>


        </div>
        

      </div>
{/* watch 04 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-[70%] md:h-36 w-full object-cover object-center"
            src={'/pic/watch 4.jpg'}
            alt="blog"
            width={300}
            height={300}
          />
          <div className="p-6 ">
           <h1 className="title-font text-lg ml-5 font-bold text-blue-900 mb-3">
              $5000
            </h1> 
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-5 rounded-lg  ">
              Add To Cart
            </button>
           </div>


        </div>
        

      </div>
{/* watch 05 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-[70%] md:h-36 w-full object-cover object-center"
            src={'/pic/watch 5.jpg'}
            alt="blog"
            width={300}
            height={300}
          />
          <div className="p-6 ">
           <h1 className="title-font text-lg ml-5 font-bold text-blue-900 mb-3">
              $6000
            </h1> 
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-5 rounded-lg  ">
              Add To Cart
            </button>
           </div>


        </div>
        

      </div>
{/* watch 06 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-[70%] md:h-36 w-full object-cover object-center"
            src={'/pic/watch 6.jpg'}
            alt="blog"
            width={300}
            height={300}
          />
          <div className="p-6 ">
           <h1 className="title-font text-lg ml-5 font-bold text-blue-900 mb-3">
              $7000
            </h1> 
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-5 rounded-lg  ">
              Add To Cart
            </button>
           </div>


        </div>
        

      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
