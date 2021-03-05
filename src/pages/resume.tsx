import Bar from '../components/Bar'
import { languages, tools } from '../data/dataSkill'
import Head from 'next/head';


const Resume = () => {
   return (
      <main>
   <Head>
 <title>Michael Chacón - Resume</title>
                <meta name="description" content="Portfolio Personal"/>

         </Head>
      <div className='px-6 py-2'>
         {/* //! Education & Experience */}
         <div className='grid gap-6 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Education</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                    System Engineer
                  </h5>
                  <p className='font-semibold'>
                    Universidad Nacional Abierta (2020-2025)
                  </p>
                  <p className='my-3'>
                    I am currently pursuing a degree in Statistics and System Engineering
                  </p>
               </div>
            </div>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Experience</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                     Responsible for website
                  </h5>
                  <p className='font-semibold'>Movimiento por la paz y la vida</p>
                  <p className='my-3'>Create and maintain the institution's website </p>
               </div>
            </div>
         </div>

         {/*Languages & Tools */}
         <div className='grid gap-9 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
               <div className='my-2'>
                  {languages.map((language, i) => (
                     <Bar value={language} key={i} />
                  ))}
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
               <div className='my-2'>
                  {tools.map((tool, i) => (
                     <Bar value={tool} key={i} />
                  ))}
               </div>
            </div>
         </div>
      </div>
      </main>
   )
}

export default Resume
