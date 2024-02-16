import { ProjectDocuments } from "@/components/ProjectDocuments";

export default function ProjectPage(){
    return (
        <>
        <div className='relative w-full h-[45vh] project bg-black flex justify-center items-center'>
        <div className='absolute bg-black h-full w-full opacity-70'></div>
       <h1 className='font-bold text-[70px] text-white z-10'>Projects</h1>
    </div>
    <ProjectDocuments />
        </>
    )
} 