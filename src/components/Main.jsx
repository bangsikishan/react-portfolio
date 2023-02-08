import { TypeAnimation } from 'react-type-animation';

import Timeline from "./Timeline";

const Main = () => {
    return (
        <main className="bg-[#99a799]">
            <h1 className="pt-6 px-10 font-light text-white text-center text-4xl md:text-5xl md:text-left md:pl-3">
                Hi! I'm
                <span className="font-normal text-[#f6f2d4]"> Kavi</span>
            </h1>
            <TypeAnimation
                sequence={[
                    'Molecular Biologist',
                    3000,
                    'Research Scientist',
                    3000,
                    'Podcaster',
                ]}
                wrapper="h1"
                cursor={true}
                repeat={Infinity}
                style={{ textAlign: 'center', marginTop: 20, color: 'white' }}
                className="text-2xl pb-5 md:text-5xl"
            />
            <div className='relative w-[80%] mx-auto bg-[#f6f6f6] border-t-[40px] border-[#253036]'>
                <div className='absolute -top-[26px] left-[20px] w-3 h-3 rounded-full bg-[#ed4c5c] md:w-4 md:h-4 md:-top-7'></div>
                <div className='absolute -top-[26px] left-[45px] w-3 h-3 rounded-full bg-[#fdcb58] md:w-4 md:h-4 md:-top-7'></div>
                <div className='absolute -top-[26px] left-[70px] w-3 h-3 rounded-full bg-[#78b159] md:w-4 md:h-4 md:-top-7'></div>
                <p className='p-6 text-base font-light text-[#9c9c99] md:text-xl md:p-10'>
                Nerd who exists on the planet Earth and is utterly obsessed on expanding knowledge, observing things and upgrading skills. Leaning toward the idea of spreading awareness, love, and kindness. optimistic, confident, hard-worker and ethical creature.
                </p>
            </div>
            <Timeline />
        </main>
    );
}
 
export default Main;