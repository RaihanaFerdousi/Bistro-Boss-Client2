import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';

const UpDateItem = () => {
    const item = useLoaderData();
    console.log(item)
    return (
        <div>
            <SectionTitle heading='UPDATE ITEM' subHeading='Refresh Info'/>
        </div>
    );
};

export default UpDateItem;