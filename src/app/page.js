import Image from 'next/image'
import Link from 'next/link';
import KeyCard from './components/Home/KeyCard';
import FeacherCard from './components/Home/FeacherCard';
export default function Home() {
  const keyCardImg = "/image/keyCard1.png";

  const keyCard = [
    {
      image: '/image/keyCard1.png',
      btnText: 'User Profiles'
    },
    {
      image: '/image/keyCard2.png',
      btnText: 'Private Messaging'
    },
    {
      image: '/image/keyCard3.png',
      btnText: 'Easy Login'
    }
  ]
  const feacherCard = [
    {
      image: '/image/feacherCard1.png',
      cardHeading: 'Emojis & Filters'
    }, {
      image: '/image/feacherCard2.png',
      cardHeading: 'Live Streaming'
    },
    {
      image: '/image/feacherCard3.png',
      cardHeading: 'Media Upload'
    },
    {
      image: '/image/feacherCard4.png',
      cardHeading: 'Personal Branding '
    },
    {
      image: '/image/feacherCard4.png',
      cardHeading: 'Personal Branding '
    }
  ]
  return (
    <>
      <section className="hero-section h-screen relative md:bg-[url('/image/hero-bg.png')]  bg-cover bg-no-repeat">
        <Link href={'/'} className="hero_btn text-white absolute top-[70%] left-[43%]">Know more</Link>
      </section>

      <section className='py-16'>
        <div className='container px-4 mx-auto w-full'>
          <h2 className='text-3xl font-semibold text-center text-white mb-10'>Key Features </h2>
          <div className='grid md:grid-cols-2 gap-y-8 lg:grid-cols-3 sm:grid-cols-2 place-items-center'>
          {keyCard.map((key, index) => (<KeyCard key={index} image={key.image} btnText={key.btnText} />))}
          </div>
        </div>
      </section>

      <section className='md:pb-16'>
        <div className='container px-4 mx-auto w-full'>
          <h2 className='text-3xl font-semibold text-white mb-10'>Key Features </h2>
          <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 place-items-center'>
          {feacherCard.map((key, index) => ( <FeacherCard key={index} image={key.image} tittle={key.cardHeading} />))}
          </div>
        </div>
      </section>

      <section className="md:bg-[url('/image/appDownload.png')] py-20 bg-cover bg-no-repeat">
        <div className='container px-4 mx-auto w-full'>
          <div className='md:pl-14 pb-12 md:w-1/2'>
            <h2 className='text-3xl text-white'>Social Space would be available <br /> on Android & iOS soon</h2>
            <div className='grid grid-cols-2 gap-4 mt-10'>
              <Image className='w-full md:w-40'
                src={"/image/playStore.png"}
                alt="Picture of the author"
                width={500}
                height={500}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
              <Image className='w-full md:w-40'
                src={"/image/appStore.png"}
                alt="Picture of the author"
                width={500}
                height={500}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
