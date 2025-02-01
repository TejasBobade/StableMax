"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const page = () => {
  return (
    <div className='w-full p-3 h-dvh flex justify-start items-center pt-[72px] flex-col'>
        <div className='w-full border border-red-500 p-3'>
            <h1 className='text-center font-bold text-white text-4xl'>Create</h1>
            <p className='text-white/60 text-center'>
            Generate Stunning Images from Text for FREE
            </p>
        </div>
        <div className='flex border border-orange-500 w-full gap-3 h-full'>
            <div className="__form flex-[2] gap-2 flex justify-center items-start flex-col">
                <p className='text-left text-sm text-white/80' >Type you prompt below to create any image you can imagine</p>
                <div className='flex gap-2 w-full'>
                    <Input placeholder='a cat sitting over a sofa...' className='max-w-[70%] transition-all'/>
                    <Button>Generate</Button>
                </div>
            </div>
            <div className="__output flex-[1] bg-white/5 rounded-lg"></div>
        </div>
    </div>
  )
}

export default page