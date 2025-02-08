/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom';
import {FiCalendar, FiClock, FiDollarSign, FiMapPin} from 'react-icons/fi'


const Card = ({ data }) => {
    const {companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, employmentType, description} = data
    return (
        <section className="card">
            <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
                <img src={companyLogo} alt="" />
                <div>
                    <h4 className='text-primary mb-1'>{ companyName}</h4>
                    <h4 className='text-lg font-bold mb-2'>{jobTitle}</h4>
                    
                    <div className='md:flex items-center gap-1 text-sm text-gray-700 mb-2'>
                        <span className='flex items-center gap-1'><FiMapPin></FiMapPin>{ jobLocation}</span>
                        <span className='flex items-center gap-1'><FiClock></FiClock>{ employmentType}</span>
                        <span className='flex items-center gap-1'><FiDollarSign></FiDollarSign>{minPrice}-{ maxPrice} k</span>
                        <span className='flex items-center gap-1'><FiCalendar></FiCalendar>{ postingDate}</span>
                    </div>
                    <p className='text-base text-gray-700'>{ description}</p>
                </div>
            </Link>
        </section>
    );
};

export default Card;