import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='bg-purple-400'>
      <section className="text-black body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
        About Us
      </h1>
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded mt-5"
      alt="hero"
      width={200}
      height={200}
      src={'/pic/ab.webp'}
    />
    <div className="text-center lg:w-2/3 w-full">
    
      <p className="mb-8 leading-relaxed text-xl font-mono">
       Welcome to my whatch shop. Where we beleve a watch is more than just an accessory it is a statement of style precision and craftsmanship. 
       Our mission is to bring you a diverse selectionof premium timepieces from around the globe. WE are here to help you find the perfect 
       to complement yporpersontily your look.
      </p>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default About
