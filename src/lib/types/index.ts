export type Doctor = {
    clinicName: string;
    doctorPhoto: string;
    doctorName: string;
    specialization: string;
    experience: string;
    nextSlot: {
      date: string;
      startTime: string;
      endTime: string;
    };
  };