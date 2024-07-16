import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { SparklesPreview } from "./ui/sparklesUi";

export const Footer = () => {
    return (
        <div className="h-[140px] w-full mt-[190px]">
            <SparklesPreview/>
            <div className="flex flex-col mx-auto px-9 text-center pt-3 bottom-0">
                <h2 className="text-2xl font-extrabold text-white z-10">
                    Dina
                </h2>
                <div className="flex flex-row items-center justify-center mt-5 z-10">
                    <div className="">
                        <FaFacebookF className="text-white text-2xl mx-4 cursor-pointer hover:text-gray-400"/>
                    </div>
                    <div>
                        <FaInstagram className="text-white text-2xl mx-4 cursor-pointer hover:text-gray-400" />
                    </div>
                    <div>
                        <CiTwitter className="text-white text-2xl mx-4 cursor-pointer hover:text-gray-400"/>
                    </div>
                </div>
                <p className="text-xs font-light text-white mt-5 z-10">
                    Copyright © 2024. All right reserved.
                </p>
            </div>
        </div>
    )
}