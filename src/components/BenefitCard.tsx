import React from 'react'
import Image from 'next/image'

export default function BenefitCard({benefit}) {
  return (
    <div className=' py-6 px-8 bg-white  drop-shadow-xl rounded-md'>
          <Image
            src="/icons/tick.svg"
            alt="tick"
            height={48}
            width={48}/>
            <h5 className="text-slate-800 text-xl font-bold mt-6 mb-3">{benefit.name}</h5>
            <p className='text-slate-800 text-base font-normal leading-[2rem]'>{benefit.desc}</p>
        </div>
  )
}
