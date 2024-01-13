
import './globals.css'
import '@/app/css/style.css'
import Header from "@/app/components/Header/Header"



export const metadata = {
  title: 'Social Space: Unleash Your Digital Presence',
  description: 'Embark on a journey of digital connection with Social Space. Elevate your social media experience and manage your online presence effortlessly.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-primary'>
         <Header />
        {children}</body>
    </html>
  )
}
