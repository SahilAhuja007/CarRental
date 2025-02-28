import React from 'react';
import Cont from '../components/Cont';
import FakeReview from '../components/FakeReview';

const Home = () => {
  return (
    <div>
        <div className='bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'>
        <Cont /> 
        </div>
      
       {/* Add FakeReview component
       <FakeReview />   */}
    </div>
  );
};

export default Home;
