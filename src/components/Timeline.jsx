import { useInView } from 'react-intersection-observer';
import { GiDna2 } from 'react-icons/gi';
import { BiPodcast } from 'react-icons/bi';
import { MdOutlineBiotech } from 'react-icons/md';
import { DiDatabase } from 'react-icons/di';

import '../assets/Animations.css';

const Timeline = () => {
    const [ refOne, inViewOne ] = useInView({ threshold: 0.5, triggerOnce: true, });
    const [ refTwo, inViewTwo ] = useInView({ threshold: 0.5, triggerOnce: true, });
    const [ refThree, inViewThree ] = useInView({ threshold: 0.5, triggerOnce: true, });
    const [ refFour, inViewFour ] = useInView({ threshold: 0.5, triggerOnce: true, });

    return (
        <div className="relative w-[80%] mx-auto before:absolute before:content-[''] before:w-1 before:h-full before:bg-white lg:before:left-36 xl:before:left-1/2">
            
            {/* left */}
            <div ref={refOne} className={`${inViewOne ? 'show' : 'hide'} relative py-6 pl-12 lg:pl-10 xl:pl-20 lg:pr-20 xl:pr-10 lg:w-3/4 lg:left-[144px] xl:w-1/2 xl:left-0`}>
                <div className="leftscale absolute top-6 left-0 lg:left-0 lg:-translate-x-7 xl:left-full xl:-translate-x-6 text-base lg:text-3xl p-3 rounded-full w-fit border-[3px] border-white bg-[#263238]">
                    <GiDna2 className="text-white" />
                </div>
                <div className="slideinleft relative pt-8 pb-14 px-10 rounded-lg shadow-xl bg-[#f6f6f6] before:absolute before:content-[''] before:w-3 lg:before:w-4 before:h-3 lg:before:h-4 before:rotate-45 before:top-3 lg:before:top-5 before:left-0 before:-translate-x-1 lg:before:-left-0 xl:before:left-full lg:before:-translate-x-2 before:bg-[#f6f6f6]">
                    <h1 className='text-center text-3xl text-[#303e49] capitalize'>Molecular Biologist</h1>
                    <h3 className='mb-4 font-light text-2xl text-[#303e49]'>Researcher</h3>
                    <p className='font-light text-lg text-[#303e49]'>
                        I possess a profound understanding of the intricacies of cellular processes and an unwavering passion for exploring the molecular underpinnings of life.
                        My innate curiosity, coupled with my unrelenting drive to constantly learn and improve, has allowed me to stay at the forefront of the latest advancements and developments in the field.
                    </p>
                    <div className="mt-3 space-y-2">
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">Cellular Processes</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">PCR</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">Gel Electrophoresis</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">DNA Sequencing</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">Tissue Culture</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">Bio-informatics</p>
                    </div>
                </div>
                <p className='slideinleftdate w-1/2 absolute bottom-10 left-28 xl:top-11 xl:left-full xl:translate-x-12 text-sm text-[#303e49]'>2022 - present</p>
            </div>

            {/* right */}
            <div ref={refTwo} className={`${inViewTwo ? 'show' : 'hide'} relative py-6 pl-12 lg:pl-10 xl:pl-12 lg:pr-20 xl:pr-10 lg:w-3/4 lg:left-[144px] xl:w-1/2 xl:left-[50%]`}>
                <div className="rightscale absolute top-6 left-0 lg:-translate-x-7 text-base lg:text-3xl p-3 rounded-full w-fit border-[3px] border-white bg-[#263238]">
                    <MdOutlineBiotech className="text-white" />
                </div>
                <div className="slideinright relative pt-8 pb-14 px-10 rounded-lg shadow-xl bg-[#f6f6f6] before:absolute before:content-[''] before:w-3 lg:before:w-4 before:h-3 lg:before:h-4 before:rotate-45 before:top-3 lg:before:top-5 before:left-0 before:-translate-x-1 lg:before:-left-0 xl:before:left-0 lg:before:-translate-x-2 before:bg-[#f6f6f6]">
                    <h1 className='text-center text-3xl text-[#303e49] capitalize'>Science and technology enthusiast</h1>
                    <h3 className='mb-4 font-light text-2xl text-[#303e49]'>Curious</h3>
                    <p className='font-light text-lg text-[#303e49]'>
                        As a science and technology enthusiast, I am constantly seeking to deepen my understanding of the latest developments in the field. Through my podcast and other engagements, I aim to share my passion and knowledge with a wider audience, always striving to communicate complex ideas in a clear and concise manner. With a focus on staying ahead of the curve, I am dedicated to staying at the forefront of innovation and keeping others informed.
                    </p>
                    <div className="mt-3 space-y-2">
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">physics</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">chemistry</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">biology</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">mathematics</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">artificial intelligence</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">computing</p>
                    </div>
                </div>
                <p className='slideinrightdate w-1/2 absolute bottom-10 left-28 xl:top-11 xl:right-full xl:-translate-x-60 text-sm text-[#303e49]'>2015 - present</p>
            </div>

            {/* left */}
            <div ref={refThree} className={`${inViewThree ? 'show' : 'hide'} relative py-6 pl-12 lg:pl-10 xl:pl-20 lg:pr-20 xl:pr-10 lg:w-3/4 lg:left-[144px] xl:w-1/2 xl:left-0`}>
                <div className="leftscale absolute top-6 left-0 lg:left-0 lg:-translate-x-7 xl:left-full xl:-translate-x-6 text-base lg:text-3xl p-3 rounded-full w-fit border-[3px] border-white bg-[#263238]">
                    <BiPodcast className="text-white" />
                </div>
                <div className="slideinleft relative pt-8 pb-14 px-10 rounded-lg shadow-xl bg-[#f6f6f6] before:absolute before:content-[''] before:w-3 lg:before:w-4 before:h-3 lg:before:h-4 before:rotate-45 before:top-3 lg:before:top-5 before:left-0 before:-translate-x-1 lg:before:-left-0 xl:before:left-full lg:before:-translate-x-2 before:bg-[#f6f6f6]">
                    <h1 className='text-center text-3xl text-[#303e49] capitalize'>Podcaster</h1>
                    <h3 className='mb-4 font-light text-2xl text-[#303e49]'>Kavi's Podcast</h3>
                    <p className='font-light text-lg text-[#303e49]'>
                    My podcast on science is available on popular platforms such as YouTube, Spotify, Apple Podcasts and more. If you have an interest in science, I invite you to give it a listen.
                    </p>
                    <div className="mt-3 space-y-2">
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">science</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">podcast</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">youTube</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">spotify</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">apple podcasts</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">interest</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">listen</p>
                    </div>
                </div>
                <p className='slideinleftdate w-1/2 absolute bottom-10 left-28 xl:top-11 xl:left-full xl:translate-x-12 text-sm text-[#303e49]'>2023 - present</p>
            </div>

            {/* right */}
            <div ref={refFour} className={`${inViewFour ? 'show' : 'hide'} relative py-6 pl-12 lg:pl-10 xl:pl-12 lg:pr-20 xl:pr-10 lg:w-3/4 lg:left-[144px] xl:w-1/2 xl:left-[50%]`}>
                <div className="rightscale absolute top-6 left-0 lg:-translate-x-7 text-base lg:text-3xl p-3 rounded-full w-fit border-[3px] border-white bg-[#263238]">
                    <DiDatabase className="text-white" />
                </div>
                <div className="slideinright relative pt-8 pb-14 px-10 rounded-lg shadow-xl bg-[#f6f6f6] before:absolute before:content-[''] before:w-3 lg:before:w-4 before:h-3 lg:before:h-4 before:rotate-45 before:top-3 lg:before:top-5 before:left-0 before:-translate-x-1 lg:before:-left-0 xl:before:left-0 lg:before:-translate-x-2 before:bg-[#f6f6f6]">
                    <h1 className='text-center text-3xl text-[#303e49] capitalize'>Data Scientist</h1>
                    <h3 className='mb-4 font-light text-2xl text-[#303e49]'>Open to Work</h3>
                    <p className='font-light text-lg text-[#303e49]'>
                    As a data scientist, I employ my technical abilities in statistical analysis, machine learning, and data visualization to transform data into meaningful insights. My responsibilities include creating predictive models, enhancing algorithms, and effectively conveying the outcomes of my analysis to relevant parties.
                    </p>
                    <div className="mt-3 space-y-2">
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">statistical analysis</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">machine learning</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">python</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">data visualization</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d] capitalize">SQL</p>
                    </div>
                </div>
                <p className='slideinrightdate w-1/2 absolute bottom-10 left-28 xl:top-11 xl:right-full xl:-translate-x-60 text-sm text-[#303e49]'>2022 - present</p>
            </div>

        </div>
    );
}

export default Timeline;