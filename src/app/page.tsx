import Image from 'next/image'
import { specialties, doctors, nearByClinics } from "@/lib/data/index";
import DoctorProfile from '@/components/DoctorProfile';
import Hero from '@/components/Hero';

export default function Home() {
  return (<>
    <Hero />
    <section className=" bg-blue-100 py-10">
      <div className='container mx-auto'>

        <div className="flex items-center justify-center gap-1">





          {doctors.map((doctor) => {
            return (
              <DoctorProfile
                key={doctor.doctorName}
                {...doctor} />
            )
          })}

          <div className="text-container">

            <h2 className='text-3xl font-bold'> Book Your Next Medical
              Visit Online Today!</h2>

            <p>Explore their expertise, credentials, and specialties to find the right doctor for your healthcare needs.</p>
          </div>



        </div>
      </div>
    </section>
  </>)
}
