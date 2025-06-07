'use client';


import {  motion } from 'framer-motion';

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { EB_Garamond } from 'next/font/google';
import Link from 'next/link';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['700', '800'],
});


function CategorySection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className=" mt-[94px] bg-[#FFFBEB] md:min-h-[150vh] lg:h-[50vh] overflow-hidden flex flex-col justify-center  relative"
    >
      <div className=" bg-[#FFFBEB] min-h-screen md:min-h-[150vh] bg-center bg-no-repeat sm:mx-8"
        style={{
          backgroundImage: "url('/section2-image.png')",
          backgroundPosition: "center 6%",
        }}>

      </div>
      <div className=' absolute top-[30%] sm:top-[50%] left-0 w-full h-full  text-center z-10'>
        <div className={`${ebGaramond.className} font-medium sm:flex justify-between items-center w-full mb-[90px]`}>
          <h2 className='text-responsive text-[#FFFFFF] sm:text-[#CA6F86]'>PANTS</h2>
          <h2 className='text-responsive2 text-[#FFFFFF]'>DRESSES</h2>
          <h2 className='text-responsive text-[#FFFFFF] sm:text-[#CA6F86]'>SKIRTS</h2>
        </div>
        {/* Shop Now Button */}
        <Link href="/shop" passHref>
          <motion.button
            className="border-[2px] border-white hover:border-[#701d34] text-white px-8 py-4 rounded-lg hover:bg-[#701d34] transition flex items-center m-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SHOP NOW
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.div>
          </motion.button>
        </Link>
      </div>
    </section>
  );
}

export default CategorySection; 