
import './globals.css'
import '@/app/css/style.css'
import Header from "@/app/components/Header/Header"
import { SocialSpace } from './components/Header/SocialSpace'
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: '300',
  subsets: ['latin'],
  display: 'swap'
});


export const metadata = {
  title: 'Social Space: Unleash Your Digital Presence',
  description: 'Embark on a journey of digital connection with Social Space. Elevate your social media experience and manage your online presence effortlessly.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-primary'>
        <Header />
        {children}
        <footer className='text-white pt-10 pb-16 bg-gradient-to-b from-[#1B1B1F] to-[#232328]'>
          <div className='container mx-auto'>
            <div className={`flex flex-wrap p-4 sm:p-0 ${lato.className}`}>

              <div className='md:w-2/5 w-full'>
                <SocialSpace />
              </div>
              <div className='md:w-1/5 w-full'>
                <p className={`font-semibold mb-2`}>RESOURCES</p>
                <p>Home</p>
                <p>Categories</p>
                <p>Experiences </p>
              </div>
              <div className='md:w-1/5 w-full'>
                <p className={`font-semibold mb-2`}>LEGAL</p>
                <p>Privacy & Policy </p>
                <p>Terms & Conditions</p>
              </div>
              <div className='md:w-1/5 w-full'>
                <p className={`font-semibold mb-2`}>COMPANY</p>
                <p>ONE PORTFOLIO ADVISORY PVT. LTD., 
                  E-101 , 1St Floor , Crystal Plaza
                  Link Road , Andheri West
                  Mumbai -40005</p>
                  <p>Email:- yourmail@company.com</p>
              </div>

            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
