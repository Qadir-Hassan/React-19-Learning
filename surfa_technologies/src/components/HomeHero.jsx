import React from 'react'
import heroImg from '../assets/images/new-home-hero-bg.png'

const HomeHero = () => {
  return (
    <div className='pt-20 px-4  bg-hero-pattern bg-grey-10 w-full h-full bg-blend-overlay'>
    <div className='flex flex-col justify-center items-center gap-y-7 xl:gap-y-10'>
        <div className='xsm:px-10 lg:max-w-[800px] 2xl:max-w-[880px] '>
            <h1>A Digital Product Studio
            that will Work</h1>

        </div>
        <div className='bg-[#242424]  py-[18px] px-5 rounded-radius-8 mb-7 xl:hidden'>
          <p className='font-regular text-[16px] text-grey-60 text-center'>For startups, enterprise leaders, media & publishers, and social good.</p>
        </div>
        <div className='hidden bg-[#242424] border-grey-20 rounded-[12px] xl:flex 2xl: py-8 px-10'>
            <p className='text-grey-60 2xl:text-[22px]' >For  <span className='hero-stylish-text'>Startups</span> , <span className='hero-stylish-text'>Enterprise Leaders</span> ,
            <span className='hero-stylish-text'> Media & Publishers</span> and <span className='hero-stylish-text'>Social Goods</span>
            </p>
        </div>

        <div className='flex gap-x-6'>
           <a href="#" className='secondary-btn'>Our Works</a>
            <a href="#" className='primary-btn'>Contact Us</a>
        </div>

        <div className='overflow-hidden'>
                <img src={heroImg} alt="" className='scale-[1.1] xl:max-h-72' />
        </div>
    </div>

    </div>
  )
}

export default HomeHero