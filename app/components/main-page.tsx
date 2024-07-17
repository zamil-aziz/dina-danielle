import Image from "next/image";
import { Button } from "./ui/button";
import { FlipWords } from "./ui/flip-words";

export const MainPage = () => {
    const words = [
        "Writer",
        "Cat Lover",
        "Soon to be runner",
        "Sugar Addict",
        "Endod",
    ];
    return (
        <div className="flex flex-col h-[77vh] max-w-[1000px] mx-auto relative px-9">
            <h1 className="lg:text-6xl font-bold text-5xl tracking-tight pt-[120px] z-10">
                Hi, 
                <span className="block mt-6">
                I&apos;m <span className="text-red-800">Dina</span>
                </span> 
            </h1>
            <FlipWords words={words} className="lg:text-6xl text-5xl font-bold mt-9 tracking-tight italic"/>
            <Button className="rounded-full absolute w-[150px] lg:relative lg:mt-[180px] z-10 bottom-[140px]">
                Contact
            </Button>
            <Image src="/icon.png" alt="cinnamoroll" height={390} width={390}
                className="absolute right-20 md:top-20 bottom-0 sm:block hidden"
            />
            <Image src="/c3.gif" alt="gif" height={150} width={150} unoptimized className="absolute top-[-40px] lg:right-[-120px] right-0"/>
            <Image src="/c1.gif" alt="gif" height={150} width={150} unoptimized className="absolute lg:left-[-120px] left-0 bottom-5"/>
            <Image src="/c4.gif" alt="gif" height={150} width={150} unoptimized className="absolute lg:right-[-120px] right-0 bottom-5"/>
        </div>
    )
}