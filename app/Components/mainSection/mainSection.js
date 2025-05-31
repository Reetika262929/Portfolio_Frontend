import React from 'react'

const MainSection = () => {
  return (
   <div className="main-section-wrapper">
      <div className="stars" />

      <div className=" d-flex align-items-center w-100 content-container">
       
        <div className='w-50'>
           <div className='box1 w-20 text-nowrap d-flex align-items-center gap-1'>
<div>
  ✌🏻
  </div>

  <div>
    Hi There, I am Reetika Tripathi
  </div>
        </div>
          <p style={{ fontSize: '50px', fontWeight: '600', fontFamily: 'ExoSpace' }} className="text-white">
            A Frontend Engineer. I help startups launch and grow their products
          </p>
          <p className="mt-4 text-white">
            I am a software engineer with more than four years of experience. Recognized as a practical and effective developer, experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within budget.
          </p>
        </div>
        <div className="w-50 d-block m-auto">
          <img src="https://cdn.pixabay.com/photo/2024/05/02/09/16/web-development-8734249_640.png" />
        </div>
      </div>
    </div>
  );
};

export default MainSection