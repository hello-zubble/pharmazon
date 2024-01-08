import React from 'react'
import Image from 'next/image'
import { specialties } from "@/lib/data/index";

export default function Specialties() {
  return (
    <section className='container py-20 max-w-7xl mx-auto '>
      <h3 className='w-full text-center text-navy-blue text-4xl font-bold mb-12 relative z-20'>Specialties</h3>
      <div className='flex items-center justify-between'>
        {
          specialties.map((specialty) => {
            return (
              <div className='px-10 rounded-md bg-[#F8FCFF] w-48 py-5' key={specialty.name}>
                <Image
                  className='pb-4'
                  src={specialty.src}
                  alt={specialty.name}
                  height={118}
                  width={118} />
                <p className='w-full text-center text-navy-blue text-lg font-normal'>{specialty.name}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
