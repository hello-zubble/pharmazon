import React from 'react'
import  Image from 'next/image'
import Link from 'next/link'

export default function JoinWith() {
  return (
    <section className=' container max-w-7xl mx-auto mt-12 flex justify-between items-center mb-4'>
        <div>
          <p className='text-ph-yellow text-sm font-bold mb-3'>JOIN WITH OUR COMMUNITY</p>
          <h4 className='text-navy-blue text-5xl font-bold font mb-3'>Hassle-Free Booking <br /> at Your Fingertips</h4>
          <p className='max-w-lg mt-3 text-navy-blue text-lg font-normal mb-3'>Explore our extensive network of skilled and accredited doctors from various hospitals. Find the perfect healthcare provider who matches your specific needs and preferences.</p>
          <Link href="#">
            <button className='bg-ph-yellow opacity-90 hover:opacity-100 transition-opacity duration-300 text-white rounded-[10px] h-12 w-80'>Book an Appointment </button>
          </Link>
        </div>
        <Image
          src="/images/ending.svg"
          alt='ending'
          width={600}
          height={400}/>
      </section>
  )
}
