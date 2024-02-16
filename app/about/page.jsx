import { AboutContent } from "@/components/AboutContent";

export default function AboutPage (){
    return(
        <>
        <div className="w-full h-fit bg-white p-10 text-[#00375C]">
            <h1 className="font-black text-5xl mb-8">About Us</h1>
            <AboutContent />
        </div>
        </>
    )
}