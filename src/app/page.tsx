
import BookVisit from "@/components/landing-home/BookVisit";
import Hero from "@/components/landing-home/Hero";
import ExploreClinics from "@/components/landing-home/ExploreClinics";
import Specialties from "@/components/landing-home/Specialties";
import Benefits from "@/components/landing-home/Benefits";
import JoinWith from "@/components/landing-home/JoinWith";
import Tutorial from "@/components/landing-home/Tutorial";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <BookVisit />
      <ExploreClinics />
      <Tutorial />
      <Benefits />
      <JoinWith />
    </>
  );
}
