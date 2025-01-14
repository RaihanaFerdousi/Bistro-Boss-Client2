import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className="max-w-6xl mx-auto mt-8">
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={800}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper mb-8"
            >
                {[slide1, slide2, slide3, slide4, slide5].map((slide, index) => (
                    <SwiperSlide key={index} className="relative group">
                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="rounded-lg shadow-lg"
                        />
                        <h3 className="text-3xl cinzel uppercase text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded opacity-90">
                            {["Salads", "Pizzas", "Soups", "Desserts", "Salads"][index]}
                        </h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Category;