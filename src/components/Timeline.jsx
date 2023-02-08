import { useInView } from 'react-intersection-observer';
import { AiFillFire } from 'react-icons/ai';

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
                    <AiFillFire className="text-white" />
                </div>
                <div className="slideinleft relative pt-8 pb-14 px-10 rounded-lg shadow-xl bg-[#f6f6f6] before:absolute before:content-[''] before:w-3 lg:before:w-4 before:h-3 lg:before:h-4 before:rotate-45 before:top-3 lg:before:top-5 before:left-0 before:-translate-x-1 lg:before:-left-0 xl:before:left-full lg:before:-translate-x-2 before:bg-[#f6f6f6]">
                    <h1 className='text-center text-3xl text-[#303e49]'>Sr Data Scientist</h1>
                    <h3 className='mb-4 font-light text-2xl text-[#303e49]'>Globant</h3>
                    <p className='font-light text-lg text-[#303e49]'>Build AutoML models and make them available to non-technical users from a graphical interface.</p>
                    <div className="mt-3">
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">ml</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">automl</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">python</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">docker</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">redshift</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">superset</p>
                    </div>
                </div>
                <p className='slideinleftdate w-1/2 absolute bottom-10 left-28 xl:top-11 xl:left-full xl:translate-x-12 text-sm text-[#303e49]'>2021 - present</p>
            </div>

            {/* right */}
            <div ref={refTwo} className={`${inViewTwo ? 'show' : 'hide'} relative py-6 pl-12 lg:pl-10 xl:pl-12 lg:pr-20 xl:pr-10 lg:w-3/4 lg:left-[144px] xl:w-1/2 xl:left-[50%]`}>
                <div className="rightscale absolute top-6 left-0 lg:-translate-x-7 text-base lg:text-3xl p-3 rounded-full w-fit border-[3px] border-white bg-[#263238]">
                    <AiFillFire className="text-white" />
                </div>
                <div className="slideinright relative pt-8 pb-14 px-10 rounded-lg shadow-xl bg-[#f6f6f6] before:absolute before:content-[''] before:w-3 lg:before:w-4 before:h-3 lg:before:h-4 before:rotate-45 before:top-3 lg:before:top-5 before:left-0 before:-translate-x-1 lg:before:-left-0 xl:before:left-0 lg:before:-translate-x-2 before:bg-[#f6f6f6]">
                    <h1 className='text-center text-3xl text-[#303e49]'>BI Manager</h1>
                    <h3 className='mb-4 font-light text-2xl text-[#303e49]'>Rappi</h3>
                    <p className='font-light text-lg text-[#303e49]'>Leading a team of analysts and data scientists to execute different projects, including the construction of ETLs, data lakes, data warehouses, and machine learning models.</p>
                    <div className="mt-3 space-y-2">
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">ml</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">automl</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">python</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">docker</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">snowflake</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">postgres</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">azure</p>
                    </div>
                </div>
                <p className='slideinrightdate w-1/2 absolute bottom-10 left-28 xl:top-11 xl:right-full xl:-translate-x-56 text-sm text-[#303e49]'>2019 - 2021</p>
            </div>

            {/* left */}
            <div ref={refThree} className={`${inViewThree ? 'show' : 'hide'} relative py-6 pl-12 lg:pl-10 xl:pl-20 lg:pr-20 xl:pr-10 lg:w-3/4 lg:left-[144px] xl:w-1/2 xl:left-0`}>
                <div className="leftscale absolute top-6 left-0 lg:left-0 lg:-translate-x-7 xl:left-full xl:-translate-x-6 text-base lg:text-3xl p-3 rounded-full w-fit border-[3px] border-white bg-[#263238]">
                    <AiFillFire className="text-white" />
                </div>
                <div className="slideinleft relative pt-8 pb-14 px-10 rounded-lg shadow-xl bg-[#f6f6f6] before:absolute before:content-[''] before:w-3 lg:before:w-4 before:h-3 lg:before:h-4 before:rotate-45 before:top-3 lg:before:top-5 before:left-0 before:-translate-x-1 lg:before:-left-0 xl:before:left-full lg:before:-translate-x-2 before:bg-[#f6f6f6]">
                    <h1 className='text-center text-3xl text-[#303e49]'>CRM Analytics Coordinator</h1>
                    <h3 className='mb-4 font-light text-2xl text-[#303e49]'>Avianca</h3>
                    <p className='font-light text-lg text-[#303e49]'>Tech leader of a BI, Data Science and DBA team. Build forecast models, data warehouse and Power BI dashboards.</p>
                    <div className="mt-3">
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">ml</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">mssql</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">python</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">docker</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">pbi</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">azure</p>
                    </div>
                </div>
                <p className='slideinleftdate w-1/2 absolute bottom-10 left-28 xl:top-11 xl:left-full xl:translate-x-12 text-sm text-[#303e49]'>2018 - 2019</p>
            </div>

            {/* right */}
            <div ref={refFour} className={`${inViewFour ? 'show' : 'hide'} relative py-6 pl-12 lg:pl-10 xl:pl-12 lg:pr-20 xl:pr-10 lg:w-3/4 lg:left-[144px] xl:w-1/2 xl:left-[50%]`}>
                <div className="rightscale absolute top-6 left-0 lg:-translate-x-7 text-base lg:text-3xl p-3 rounded-full w-fit border-[3px] border-white bg-[#263238]">
                    <AiFillFire className="text-white" />
                </div>
                <div className="slideinright relative pt-8 pb-14 px-10 rounded-lg shadow-xl bg-[#f6f6f6] before:absolute before:content-[''] before:w-3 lg:before:w-4 before:h-3 lg:before:h-4 before:rotate-45 before:top-3 lg:before:top-5 before:left-0 before:-translate-x-1 lg:before:-left-0 xl:before:left-0 lg:before:-translate-x-2 before:bg-[#f6f6f6]">
                    <h1 className='text-center text-3xl text-[#303e49]'>BI Analyst</h1>
                    <h3 className='mb-4 font-light text-2xl text-[#303e49]'>Onelink BPO</h3>
                    <p className='font-light text-lg text-[#303e49]'>Build interactive dashboards, ETLs and SQL queries to show the company KPIs.</p>
                    <div className="mt-3 space-y-2">
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">python</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">mssql</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">pbi</p>
                        <p className="inline-block text-xs font-light mx-1 py-1 px-2 rounded-full text-white bg-[#6c757d]">excel</p>
                    </div>
                </div>
                <p className='slideinrightdate w-1/2 absolute bottom-10 left-28 xl:top-11 xl:right-full xl:-translate-x-56 text-sm text-[#303e49]'>2016 - 2018</p>
            </div>

        </div>
    );
}

export default Timeline;