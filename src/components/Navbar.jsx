import React from 'react'
import { GoBell } from "react-icons/go";
import { CiSquareInfo } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Navbar() {
    return (
        <div className="container mx-auto">
            <div className='text-white flex justify-between py-8'>
                <div className='w-13 h-13'><img src="/bitcoin.png" alt="logo" className='w-full h-full object-contain' /></div>
                <div className='flex items-center gap-4'>
                    <CiSquareInfo className='w-6 h-6' />
                    <GoBell className='w-6 h-6'/>
                    <div className='flex items-center gap-2'> 
                         <Avatar className="border-2 border-[#D175B6] shadow-[0px_-1px_27px_5px_rgba(209,_117,_182,_0.35)] w-13 h-13">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p>Hi, <span className='text-[#00EEC5]'>Muhammad Asad</span></p>
                        <p>welcome back!</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
