import React from 'react'
import BenefitCard from '../etc/BenefitCard'
import {specialties,doctors,nearByClinics, benefits} from "@/lib/data/index";


export default function Benefits() {
   
  return (
    <>
    <section className='py-20 container mx-auto max-w-7xl'>
        <h3 className='text-center text-4xl font-bold text-navy-blue'>Benefits of Online Consultation</h3>
        <div className="mt-10 grid grid-cols-3 gap-6 ">

        {benefits.map((benefit, index) => {
            return(
                <BenefitCard key={index} benefit={benefit} />)
                
            })}
            </div>
            </section>
    </>
  )
}
