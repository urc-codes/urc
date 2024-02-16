import { c1, c2,c3 } from "@/public/images"
import Image from 'next/image';


export const Carousel = () => {
  return (
    <>
  <div className="carousel w-full h-52 md:h-full">
  <div id="slide1" className="carousel-item relative w-full">
    <Image src={c1} alt="C1" className="w-full opacity-30" />
    <div className="content absolute text-center w-full  h-full flex flex-col justify-center" >
         <h3 className="text-xs md:text-5xl">WELCOME TO THE UENR ROBOTICS CLUB</h3>
            <h1 className="text-xs md:text-4xl"><strong>Nurturing Engineers For Our Society.</strong></h1>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-0 top-[60%]">
      <a href="#slide3" className=" btn-circle">❮</a> 
      <a href="#slide2" className=" btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <Image src={c2} alt="C2" className="w-full opacity-30" />
    <div className="content absolute text-center w-full  h-full flex flex-col justify-center" >
         <h3 className="text-xs md:text-5xl">INCLUDE MORE SKILL TRAINING</h3>
            <h1 className="text-xs md:text-4xl"><strong>We Will Help You To Improve Upon Your Skillset.</strong></h1>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-0 top-[60%]">
      <a href="#slide1" className=" btn-circle">❮</a> 
      <a href="#slide3" className=" btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <Image src={c3} alt="C3" className="w-full opacity-30" />
    <div className="content absolute text-center w-full  h-full flex flex-col justify-center" >
         <h3 className="text-xs md:text-5xl">CREATE THE THINGS YOU WISH EXISTED</h3>
            <h1 className="text-xs md:text-4xl"><strong>Breaking Barriers, Building a Future</strong></h1>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-0 top-[60%]">
      <a href="#slide2" className=" btn-circle">❮</a> 
      <a href="#slide1" className=" btn-circle">❯</a>
    </div>
  </div> 
</div>
    </>
  )
}
