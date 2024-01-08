import React from 'react'
import Link from 'next/link'

import {nearByClinics} from "@/lib/data/index";
import ClinicCard from '../etc/ClinicCard';

export default function ExploreClinics() {
  return (
    <section className='bg-white'>
        <div className='container max-w-7xl mx-auto py-12 '>
        <div className='flex justify-between items-center mb-7 '>
          <div>
          <h3 className='text-navy-blue  text-3xl font-bold mb-2'>Explore Nearby Clinics</h3>
          <p className='text-slate-500 text-lg font-normal'>Your Gateway to Comprehensive Online Consultations</p>
          </div>
          <Link href="clinics">
          <button className='rounded-md border border-navy-blue hover:bg-navy-blue hover:text-white transition-colors duration-300 w-36 h-9'>See All Clinics</button>
          </Link>
        </div>
        <div className='flex gap-5 justify-between'>
          {nearByClinics.map((clinic)=>{
            return (
              <ClinicCard
                key={clinic.name}
                {...clinic}/>
            )
          })}
        </div>
        </div>
      </section>
  )
}
