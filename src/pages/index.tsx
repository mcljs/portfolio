import {
   GetServerSideProps,
   GetServerSidePropsContext,
   GetStaticProps,
   GetStaticPropsContext,
   NextPage,
} from 'next'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/data'

import Head from 'next/head';

const About: NextPage = () => {
   return (
      <main>
         <Head>
 <title>Michael Chacón - Home</title>
                <meta name="description" content="Portfolio Personal"/>

         </Head>
      <div className='flex flex-col flex-grow px-6 pt-1 '>
         <h6 className='my-3 text-base font-medium'>
          I am currently studying System Engineering. Currently I continue to strengthen my knowledge in React and other technologies. I am a disciplined and precise person, capable of evaluating the facts in a logical and systematic way.
I approach tasks and problems with enthusiasm, I try to solve even the smallest detail with excellence.
         </h6>
         <div
            className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100'
            style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
            <h4 className='my-3 text-xl font-semibold tracking-wide'>
               What I am doing
            </h4>

            <div className='grid gap-6 my-3 md:grid-cols-2'>
               {/* children's initial and animate property should be same as the parent during a stagger effect  */}
               {services.map(service => (
                  <div
                     className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-500 lg:col-span-1 '
                     key={service.title}>
                     <ServiceCard service={service} />
                  </div>
               ))}
            </div>
         </div>
      </div>
      </main>
   )
}

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About
