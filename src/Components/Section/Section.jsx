import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../../../public/softwer-developer.jpg"
import slide2 from "../../../public/web-developer.jpg"
import slide3 from "../../../public/app-developer.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';


const Section = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-extrabold text-center mb-6 text-[#fd5ef8]'>Developers Section</h1>
            <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://swiperjs.com/demos/images/nature-1.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className='flex items-center'>
            <div className='w-1/2 p-5'>
            <div className="title text-3xl pl-6 font-bold mb-5 text-[#3789bc]" data-swiper-parallax="-300">
          Software Developers
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className='text-white pl-6'>
            Software developers design and code applications, translating user needs into functional solutions. Proficient in languages like Java or Python, they create efficient, secure software. Front-end developers focus on user interfaces, back-end developers manage databases and server logic. In this dynamic field, continuous learning is essential for driving innovation and solving complex challenges.
            </p>
          </div>
            </div>
            <div className='w-1/2'>
                 <img className='p-7 rounded-lg' src={slide1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex items-center'>
            <div className='w-1/2 p-5'>
            <div className="title text-3xl font-bold mb-5 pl-6 text-[#3789bc]" data-swiper-parallax="-300">
          Web Developer
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className='text-white pl-6'>
            Web developers specialize in creating dynamic and visually appealing websites. Proficient in languages like HTML, CSS, and JavaScript, they design and code responsive user interfaces. Front-end developers focus on the client side, ensuring a seamless user experience, while back-end developers manage server-side functionality and databases. Continuous learning is vital in this rapidly evolving field.
            </p>
          </div>
            </div>
            <div className='w-1/2'>
                 <img className='p-7 rounded-lg' src={slide2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex items-center'>
            <div className='w-1/2 p-5'>
            <div className="title text-3xl font-bold mb-5 pl-6 text-[#3789bc]" data-swiper-parallax="-300">
          App Developers
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className='text-white pl-6'>
            App developers specialize in creating mobile applications for various platforms. Proficient in languages such as Swift (iOS) or Kotlin (Android), they design and code intuitive user interfaces. App developers collaborate to optimize functionality and deliver engaging user experiences. Staying current with mobile technologies is crucial in this rapidly evolving field.
            </p>
          </div>
            </div>
            <div className='w-1/2'>
                 <img className='p-7 rounded-lg' src={slide3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Section;