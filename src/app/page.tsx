import Hero from "@/components/hero";
import Image from "next/image";
import homeImg from "public/home.jpg"

export default function Home() {
  return (
    <div>
      <Hero
        image={homeImg}
        imgAlt="car factory"
        title="Professional Cloud Hosting"
       />
    </div>  
  );
}
