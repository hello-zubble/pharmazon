import { Specialty,Doctor, ClinicCard, Benefit } from "../types"

export const benefits:Benefit[] = [
    {
        name: "Accessibility",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."
    },
    {
        name: "Convenience & Time Savings",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."
    },
    {
        name: "Increased Availability",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."
    },
    {
        name: "Cost-Effectiveness",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."
    },
    {
        name: "Continuity of Care",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."
    },
    {
        name: "Enhanced Privacy",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non."
    },
    
];

export const specialties:Specialty[]=[
    {
        name:"Primary Care",
        src:"/images/primary-care.svg"
    },
    {
        name:"Dermatologiest",
        src:"/images/Dermatologist.svg"
    },
    {
        name:"Dentist",
        src:"/images/Dentist.svg"
    },
    {
        name:"Psychiatrist",
        src:"/images/psyc.svg"
    },
    {
        name:"Eye Doctor",
        src:"/images/eye-doctor.svg"
    }
]

export const doctors:Doctor[]=[
    {
        clinicName:"MED Care Clinic",
        doctorPhoto:"/images/doctors/1.jpeg",
        doctorName:"Dr. Sara Saginaw",
        specialization:"Dermatology",
        experience:"15",
        nextSlot:{
            date: 'May 29',
            startTime: '9:00am',
            endTime: '10:00am'
        }
    },
    {
        clinicName:"MED Care Clinic",
        doctorPhoto:"/images/doctors/2.jpeg",
        doctorName:"Dr. Judah Weinstein",
        specialization:"General Medicine",
        experience:"15",
        nextSlot:{
            date: 'May 29',
            startTime: '9:00am',
            endTime: '10:00am'
        }
    }
]

export const nearByClinics:ClinicCard[]=[
    {
        image:"/images/clinics/1.jpeg",
        name:"Medlife Care Clinic",
        specialisation:"Dental Clinic"
    },
    {
        image:"/images/clinics/2.png",
        name:"Medlife Care Clinic",
        specialisation:"Dental Clinic"
    },
    {
        image:"/images/clinics/3.jpeg",
        name:"Medlife Care Clinic",
        specialisation:"Dental Clinic"
    },
    {
        image:"/images/clinics/4.jpeg",
        name:"Medlife Care Clinic",
        specialisation:"Dental Clinic"
    }
]