import React from 'react'
import Image from 'next/image'

export default function BenefitCard({benefit}: {benefit: {name: string, desc: string}}) {
  return (
    <div className=' py-6 px-8 bg-white  drop-shadow-[0_15px_15px_rgba(0,0,250,0.05)] rounded-md'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-navy-blue text-xl font-bold mt-6 mb-3">{benefit.name}</h5>
            <p className='text-navy-blue text-base font-normal leading-[2rem]'>{benefit.desc}</p>
        </div>
  )
}
