import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import '@smastrom/react-rating/style.css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Rating from 'react-rating';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load reviews');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section>
            <SectionTitle subHeading="What our clients say" heading="Testimonials" />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => {
                    return (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center text-center mx-24 my-16">
                                <Rating
                                    style={{ maxWidth: 280 }}
                                    value={review.rating} 
                                    readOnly
                                />
                                <p className="py-8 w-[700px]">{review.details}</p>
                                <h3 className="text-2xl  text-orange-400">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;