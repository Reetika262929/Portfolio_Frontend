import React from 'react'

const MainSection = () => {
  return (
    <div>
          <div className="hero-container">
      <img
        className="main-img"
        src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Avatar"
      />
      <div className="overlay-text">
        <p className='name-text'>Reetika Tripathi</p>
        <h1>I am a <span className="animated-text"></span></h1>
      </div>
    </div>
    </div>
  )
}

export default MainSection