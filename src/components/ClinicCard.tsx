import Image from "next/image"
import { ClinicCard } from "@/lib/types";

const ClinicCard = ({image,name,specialisation}:ClinicCard) => {
  return (<div className="bg-white pb-3 rounded-md overflow-hidden drop-shadow-xl">
    <Image
      className=' object-cover mb-3 h-48'
      src={image}
      alt="clinic-img"
      width={300}
      height={200}/>
      <div className="text-container  px-3">
        <h4 className='text-navy-blue text-xl font-bold mb-1'>{name}</h4>
        <p className=' text-slate-500 text-base font-normal'>{specialisation}</p>
      </div>
  </div>
  )
}

export default ClinicCard