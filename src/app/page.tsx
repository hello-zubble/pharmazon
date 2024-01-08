import Image from "next/image";
import { specialties, doctors, nearByClinics } from "@/lib/data/index";
import DoctorProfile from "@/components/DoctorProfile";

export default function Home() {
  return (
    <>
      <section className=" bg-[#F2F9FF] py-10">
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-5 ">
            <div className="flex gap-3">

            {doctors.map((doctor) => {
              return <DoctorProfile key={doctor.doctorName} {...doctor} />;
            })}
            </div>

            <div className="text-container ">
              <h2 className="text-4xl font-bold mb-3">
                
                Book Your Next Medical <br /> Visit Online Today!
              </h2>

              <p className=" text-navy-blue mb-3">
                Explore their expertise, credentials, and specialties to <br /> find
                the right doctor for your healthcare needs.
              </p>

              <button className="px-4 py-2 border text-navy-blue border-navy-blue rounded-md hover:bg-navy-blue hover:text-white duration-200">See more prescribers</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
