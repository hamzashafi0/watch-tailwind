import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-purple-500'>
      <section className="text-black body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Welcome To Watch Shop
        </h1>
      <p className="mb-8 leading-relaxed">
        Your one-stop shop for the best watches
      </p>
      <div className="flex justify-center">
      <Link href={"#project"}>
        <button className="inline-flex text-white bg-blue-700 hover:bg-blue-800 border-0 py-2 px-6 focus:outline-none rounded text-lg">
          Shop Now
        </button>
        </Link>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        width={350}
        height={350}
        src={'/pic/hero1.png'}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
