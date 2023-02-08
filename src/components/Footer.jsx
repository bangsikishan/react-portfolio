import { AiFillGithub } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex items-center justify-center space-x-9 py-4 bg-[#263238]">
            <a href="#">
                <AiFillGithub className='text-white text-3xl md:text-5xl'/>
            </a>
            <a href="#">
                <FaLinkedinIn className='text-white text-3xl md:text-5xl'/>
            </a>
            <a href="#">
                <BsMedium className='text-white text-3xl md:text-5xl'/>
            </a>
        </footer>
    );
}

export default Footer;