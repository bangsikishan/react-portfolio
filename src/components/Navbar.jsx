import { AiFillHome, AiFillGithub } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';
import { BiPodcast, BiDna } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <nav className="flex h-20 bg-[#263238]">
            <RxHamburgerMenu onClick={handleNav} className='absolute top-6 left-6 text-white text-3xl my-auto cursor-pointer md:hidden' />

            <div className='hidden text-white space-x-6 md:flex'>
                <a href="#" className='flex items-center px-4 hover:bg-[#4E808F] transition ease-in duration-300'>
                    <AiFillHome className='text-4xl'/>
                    <span className='pl-3 font-light'>Home</span>
                </a>
                <a href="#" className='flex items-center px-4 hover:bg-[#4E808F] transition ease-in duration-300'>
                    <AiFillGithub className='text-4xl' />
                    <span className='pl-3 font-light'>Projects</span>
                </a>
                <a href="#" className='flex items-center px-4 hover:bg-[#4E808F] transition ease-in duration-300'>
                    <BsMedium className='text-4xl' />
                    <span className='pl-3 font-light'>Blogs</span>
                </a>
                <a href="#" className='flex items-center px-4 hover:bg-[#4E808F] transition ease-in duration-300'>
                    <BiDna className='text-4xl' />
                    <span className='pl-3 font-light'>Skills</span>
                </a>
                <a href="#" className='flex items-center px-4 hover:bg-[#4E808F] transition ease-in duration-300'>
                    <BiPodcast className='text-4xl' />
                    <span className='pl-3 font-light'>Podcasts</span>
                </a>
            </div>

            {nav ? 
                (
                    <div className='absolute top-20 flex flex-col py-5 px-5 h-screen w-full text-white bg-inherit z-10'>
                        <a href="#" className='flex items-center pl-8 py-5 hover:bg-[#4E808F] transition ease-in duration-300'>
                            <AiFillHome className='text-5xl'/>
                            <span className='pl-2'>Home</span>
                        </a>
                        <a href="#" className='flex items-center pl-8 py-5 hover:bg-[#4E808F] transition ease-in duration-300'>
                            <AiFillGithub className='text-5xl' />
                            <span className='pl-2'>Projects</span>
                        </a>
                        <a href="#" className='flex items-center pl-8 py-5 hover:bg-[#4E808F] transition ease-in duration-300'>
                            <BsMedium className='text-5xl' />
                            <span className='pl-2'>Blogs</span>
                        </a>
                        <a href="#" className='flex items-center pl-8 py-5 hover:bg-[#4E808F] transition ease-in duration-300'>
                            <BiDna className='text-5xl' />
                            <span className='pl-2'>Skills</span>
                        </a>
                        <a href="#" className='flex items-center pl-8 py-5 hover:bg-[#4E808F] transition ease-in duration-300'>
                            <BiPodcast className='text-5xl' />
                            <span className='pl-2'>Podcasts</span>
                        </a>
                    </div>
                ) : 
                (
                    <div></div>
                )
            }
        </nav>
    );
}
 
export default Navbar;