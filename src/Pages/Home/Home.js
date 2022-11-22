import React from 'react';
import Banner from './Banner/Banner';
import Infocards from './InfoCards/Infocards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;