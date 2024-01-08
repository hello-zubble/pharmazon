import React from 'react'
import { specialties, doctors, nearByClinics } from "@/lib/data/index";
import DoctorProfile from "@/components/etc/DoctorProfile";
import Image from "next/image";


export default function BookVisit() {
  return (
    <section className=" bg-[#F2F9FF] py-14">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center gap-x-5 ">
          <div className="flex gap-3">

            {doctors.map((doctor) => {
              return <DoctorProfile key={doctor.doctorName} {...doctor} />;
            })}
          </div>

          <div className="text-container flex-1 pl-7 pt-8">
            <h2 className="text-5xl text-ui-primary font-bold my-5">
              Book Your Next Medical <br /> Visit Online Today!
            </h2>
            <p className=" text-navy-blue mb-8 text-lg">
              Explore their expertise, credentials, and specialties to <br /> find
              the right doctor for your healthcare needs.
            </p>
            <button className="px-4 py-3 text-bolder border text-navy-blue border-navy-blue rounded-md hover:bg-navy-blue hover:text-white duration-200">See more prescribers</button>
          </div>
        </div>
      </div>
    </section>
  )
}
