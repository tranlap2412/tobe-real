'use client'
import Link from 'next/link'
import React from 'react'

const PostButton = () => {
  return (
    <Link href={'/posting/post'}
    className='max-w-[192px] h-[50px] flex justify-center items-center text-xl font-medium bg-gradient-right 
    rounded-[10px] hover:shadow-md transition-all duration-200'
    >Post</Link>
  )
}

export default PostButton