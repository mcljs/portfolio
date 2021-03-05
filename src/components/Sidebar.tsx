
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Sidebar = () => {
   const { theme, setTheme } = useTheme()

   const changeMode = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }
   return (
      <>
         <Image
            src='/image.jpg'
            alt='avatar'
         width={180}
         height={180}
            className='w-30 h-30 mx-auto border rounded-full '
         />
         <h3 className='my-4 text-2xl font-medium tracking-wider font-kaushan'>
            <span>Michael</span> Chacón
         </h3>
         <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-300'>
            Web Developer
         </p>
         {/* Resume */}
         <a
            href='/assets/Michael_Chacon.pdf'
            download='Michael_Chacon.pdf'
            className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-300'>
            <GiTie className='w-6 h-6' />
            <span>Download CV</span>
         </a>

         {/* Socials */}
         <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>
            <a href='https://www.facebook.com/mcljs'>
               <AiFillFacebook className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://www.linkedin.com/in/mcljs/'>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://github.com/mcljs'>
               <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
            </a>
         </div>

         {/* Contacts */}
         <div
            className='py-4 my-5 bg-gray-200 dark:bg-black-300'
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center'>
               <GoLocation className='mr-2' /> <span>Caracas,Venezuela </span>
            </div>
            <p className='my-2 '> mcljs15@gmail.com </p>
            <p className='my-2'> +58-4261185075</p>
         </div>

         {/* Email Button */}

         <button
            className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'
            onClick={() => window.open('mcljs15@gmail.com')}>
            Email me
         </button>
      
         <button
            onClick={changeMode}
            className='w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 '>
          Change Theme
         </button>
    
        


      </>
   )
}

export default Sidebar
