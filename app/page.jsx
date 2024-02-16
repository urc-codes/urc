import { Carousel } from "@/components/Carousel";
import { Contactinfo } from "@/components/Contactinfo";
import { Executives } from "@/components/Executives";
import { Numbers } from "@/components/Numbers";
import { Teams } from "@/components/Teams";


export default function Home() {
  return (
    <>
    <Carousel />
    <Teams />
    <Numbers />
    <Executives />
    <Contactinfo />
    </>
  );
}
