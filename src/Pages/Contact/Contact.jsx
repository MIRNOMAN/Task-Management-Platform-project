import { RiMessage3Fill } from 'react-icons/ri';
import { ImLocation2 } from 'react-icons/Im';
import { BiSolidPhoneCall } from 'react-icons/Bi';

const Contact = () => {
    return (
        <div className='py-10'>
            <div className="text-center">
            <h2 className="text-3xl  text-white font-bold">Contact Us</h2>
            <h1 className="text-6xl mt-10 text-white font-extrabold">Got a Question?</h1>
            <p className="text-xl mt-5 text-white font-medium tracking-widest">We would like to talk more about what you need</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around mt-16 gap-5'>
                <div className='flex flex-1 flex-col justify-center items-center' >
                <ImLocation2 className='w-[50px] h-[50px] mt-8 text-purple-500'></ImLocation2>
                    <div className='text-center'>
                        <h3 className='font-bold text-white text-2xl mt-3'>Address</h3>
                        <p className='text-xl font-extralight text-white mt-3'>Find us at the office</p>
                        <p className='font-medium text-white text-xl mt-3'>15/1 Jatrabari ideal school goli<br /> Jatrabari Dhaka</p>
                    </div>
                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                <RiMessage3Fill className='w-[50px] h-[50px] text-purple-500'></RiMessage3Fill>
                    <div className='text-center'>
                        <h3 className='font-bold text-white text-2xl mt-3'>Email</h3>
                        <p className='text-xl font-extralight text-white mt-3'>Send us your feedback</p>
                        <p className='font-medium text-white text-xl mt-3'>abdullahalnoman1509@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                <BiSolidPhoneCall className='w-[50px] h-[50px] text-purple-500'></BiSolidPhoneCall>
                    <div className='text-center'>
                        <h3 className='font-bold text-white text-2xl mt-3'>Phone</h3>
                        <p className='text-xl font-extralight text-white mt-3'>Give us a ring</p>
                        <p className='font-medium text-white text-xl mt-3'>+8801798341509</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;