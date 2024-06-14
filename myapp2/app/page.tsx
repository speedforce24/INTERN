/* eslint-disable react/no-unescaped-entities */

import AdvertBar from './components/AdvertBar';
import Navbar from './components/Navbar';
import 'animate.css/animate.min.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

// Prevent Font Awesome from adding its CSS automatically
config.autoAddCss = false;

// Import your FontAwesome configuration
import '../lib/fontawesome'; // Make sure this path is correct
import Footer from './components/Footer';
import Image from 'next/image';

function App() {
  return (
<>
      <div className="App pt-14">
        <AdvertBar/>
        <Navbar />
        
        
      </div>
      <div className="text-lime-700 bg-primary">
        <ul className="flex sm:justify-center lg:justify-start">
          <div className="mt-8 grid lg:grid-cols-2">
            <Image src="/img/Banner.png" alt="banner_poster " width={700} height={700} />
            <div className="w-100 p-20 shadow-lg bg-gray-50 rounded-2xl mb-6 ml-6">
              <h1 className="font-bold text-xl text-black text-center">
                Make Your Child A Genius
              </h1>
              <p className="text-black font-bold ml-4 text-center">
                Learn From Best Tutors In English,French and Local Languages
              </p>
              <div>
                <label htmlFor="username" className="block text-base mb-2"></label>
                <input
                  type="text"
                  id="Enter your Child's Name"
                  className="border w-full text-base px-2 py-1 focusl:outline-none focus:ring-0 focus:border-gray-600"
                  placeholder="Enter your Child's Name"
                />
              </div>
              <div>
                <label htmlFor="Email" className="block text-base mb-2"></label>
                <input
                  type="text"
                  id="Email"
                  className="border w-full text-base px-2 py-1 focusl:outline-none focus:ring-0 focus:border-gray-600"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="Phone Number" className="block text-base mb-2"></label>
                <input
                  type="text"
                  id="Phone Number"
                  className="border w-full text-base px-2 py-1 focusl:outline-none focus:ring-0 focus:border-gray-600"
                  placeholder="Phone Number"
                />
              </div>
              <button className="button">Get Your Free Lesson</button>
            </div>
          </div>
        </ul>
      </div>
      <main className="flex sm:justify-center lg:justify-start">
        <div className="grid lg:grid-cols-2 sm:flex-row-reverse">
          <Image className="object-fit:contain" src="/img/pic_02.png" alt="tablet" width={700} height={700}/>
          <div>
            <div className="mt-16">
              <h1 className="font-extrabold text-3xl ml-10">MAKE YOUR CHILD A GENIUS</h1>
              <p className="text-lg font-bold text-center">
                BUY IMOSE OMOTAB 2 TABLET WITH TEESAS SUBSCRIPTION PLAN
              </p>
            </div>
            <Image className="" src="/img/pic_01.png" alt="tab" height={700} width={700} />
            <button className="button2">Buy now</button>
          </div>
        </div>
      </main>
      <h1 className="font-bold text-4xl flex justify-center mt-8">Live Classes</h1>
      <p className="font-bold text-lg flex justify-center ml-20 mr-20 text-gray-700 p-2 mt-8">
        Introduce your child to our instructor led classes online that will help them learn the basic
        core subjects like Maths, English and Science, as well as indigenous languages (Yoruba,
        Hausa, Igbo, Ibibio, Bini, Ijaw, Tiv and many more).They will engage with tutors and
        students from across the globe.
      </p>
      <main></main>
      <main className="px-16 py-6">
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <div className="card">
            <Image
              src="/img/pic1.png"
              alt="Learn English"
              className="w-full h-32 sm:h-48 object-cover"
              width={700} height={700}
            />
            <div className="m-4">
              <span className="font-bold text-2xl">Learn English</span>
              <span className="block text text-gray-500 text-sm">
                Learn English language and basic literacy skills such as phonetics, reading and
                writing.
              </span>
            </div>
          </div>
          <div className="card">
            <Image
              src="/img/pic2.png"
              alt="Learn Mathematics"
              className="w-full h-32 sm:h-48 object-cover"
              width={700} height={700}
            />
            <div className="m-4">
              <span className="font-bold text-2xl">Learn Mathematics</span>
            </div>
            </div>

<div className="card">
  <Image src="/img/pic3.png" alt="Learn Mathematics" className="w-full h-32 sm:h-48 object-cover" width={700} height={700}/>
  <div className="m-4">
    <span className="font-bold text-2xl">Learn Hausa</span>
    <span className="block text  text-gray-500 text-sm">Learn indigenous languages and connect with your roots, as you learn alphabets, greetings, songs, folktales.</span>
  </div>

</div>
</div>
</main>
<main className="px-16 py-6">
<div className="grid lg:grid-cols-3 gap-10">
<div className=" tiles" >
  <Image src="/img/pic4.png" alt="map" className="w-full h-48 sm:h-48 object-contain "width={700} height={700}/>
  <div className="m-4">
    <h1 className="font-bold text-2xl text-center mb-3">Learn Indigenous Languages</h1>
    <p className="block text  text-gray-500 text-center">Learn indigenous languages and connect with your roots, as you learn alphabets, greetings, songs, folktales, history and lots more</p>
</div>
</div>

<div className=" tiles " >
  <Image src="/img/pic5.png" alt="tab" className="w-full h-48 sm:h-48 object-contain" width={700} height={700}/>
  <div className="m-4">
    <h1 className="font-bold text-2xl text-center mb-3">Personalized Experience with Live Classes</h1>
    <span className="block text  text-gray-500 text-center">Join our instructor led classes handled by expert tutors and help your child gain clarity/in depth knowledeg of core foundational</span>
</div>
</div>
<div>
<Image src="/img/shape10.png" alt="tab" className="w-full h-48 sm:h-48 object-contain" width={700} height={700}/>
  <div className="m-4">
    <h1 className="font-bold text-2xl text-center mb-3">Exciting and Engaging Content</h1>
    <span className="block text  text-gray-500 text-center">Gameified teaching methods with animations and musicals that will keep the child glued to learning for Exciting and engaging content.</span>
</div>
</div>
<div>
<Image src="/img/shape11.png" alt="tab" className="w-full h-48 sm:h-48 object-contain" width={700} height={700}/>
  <div className="m-4">
    <h1 className="font-bold text-2xl text-center mb-3">Entrance Exam Preparation</h1>
    <span className="block text lg:block text text-gray-500 text-center ">Want your child to gain entrance into the top secondary school? Subscribe now and have them enjoy unlimited access to our vast resources to our vast resources of practice and test questions, with learning soultions from Nursery to year 6</span>
</div>
</div>
<div>
<Image src="/img/shape12.png" alt="tab" className="w-full h-48 sm:h-48 object-contain" width={700} height={700}/>
  <div className="m-4">
    <h1 className="font-bold text-2xl text-center mb-3"> High Quality Video Tutorials</h1>
    <span className="block text lg:block text text-gray-500 text-center "> Video tutorials contain lessons delivered in High Definition,consistent with an integrated curriculum,tailored to each year group </span>
</div>
</div>
<div>
<Image src="/img/shape13.png" alt="tab" className="w-full h-48 sm:h-48 object-contain" width={700} height={700}/>
  <div className="m-4">
    <h1 className="font-bold text-2xl text-center mb-3">Track Your Child Progress</h1>
    <span className="block text lg:block text text-gray-500 text-center ">Monitor your child's learning journey on the parent app abd get real time info on improvement oppourtunities plus pther personalised learning data</span>
</div>
</div>
</div>
</main>

<main className="flex  sm:justify-center lg:justify-start ">
<div className="grid lg:grid-cols-2 ">
<div className=" flex">
<Image className="object-fit:contain "src="/img/mob-left.png" alt="interface" width={700} height={700}/>
<Image className="object-fit:contain "src="/img/mob-right.png" alt="interface" width={700} height={700}/>
</div>

<div className="mt-16 pr-8 ">
  <h1 className="font-extrabold text-3xl text-center text-gray-700 ">
  Learn On The Go With The Teesas App
  </h1>
  <p className="text-md text-center "> Going out and about town,or on a short holiday with the children? Download the Teesas Education App on your mobile devices and have your children watch videos on the go. Keep the little one occupied and continously learning, with the Teesas Education app. Anywhere and everywhere</p>
  <div className="flex sm:justify-center">
    <button className="bg-black text-white flex sm:justify-center font-bold mt-9  pr-8 pl-8 pt-4 pb-2 rounded-lg ml-32 ">
      Get it on Google Playstore
    </button>
    <button className="bg-black text-white flex sm:justify-center font-bold mt-9  pr-8 pl-8 pt-4 pb-2 rounded-lg ">Download on App Store</button>
    <button className="bg-black text-white flex sm:justify-center font-bold mt-9  pr-8 pl-8 pt-4 pb-2 rounded-lg ">Access Teesas Web Version</button>
  </div>
</div>

</div>
</main>
<main className="flex  sm:justify-center lg:justify-start">
    <div className="grid lg:grid-cols-2">
            <div className="mt-16 ml-4 mr-20 ">
                    <h1 className="font-bold text-3xl text-center  ">
                    Interested In Teaching?
                    </h1>
                    <p className="text-md ">Hey teachers, its's time to monietize your top skills and decades of experience. Go digital now and join our teachers market palce, to meet your target teaching audience.Your time is now</p>
                    <button className="button2"> Start Teaching</button>
              </div>
          <div>
          <Image className="object-fit:cover "src="/img/pic9.png" alt="interface" width={700} height={700}/>
          </div>
        </div> 

</main>
<Footer/>
</>
);
}

export default App;
