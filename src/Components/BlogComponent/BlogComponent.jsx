import React from 'react'
import NewArticle from '../NewArticle/NewArticle'

const BlogComponent = () => {
    return (
        <div className=' flex flex-col gap-[50px]'>
            <div>
                <p className='text-xl font-bold text-[#7BBF3F] text-center cursor-pointer'>
                    NEWS & ARTICLE
                </p>
                <div className='w-full flex justify-center items-center'>
                    <p className=' text-[48px] font-extrabold text-center w-[545px] cursor-pointer'>
                        Latest news & articles
                        from the blog
                    </p>
                </div>

            </div>

            <div className=' w-full flex gap-[40px] justify-center items-center'>
                <NewArticle />
                <NewArticle />
                <NewArticle />
            </div>

        </div>
    )
}

export default BlogComponent