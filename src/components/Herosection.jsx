import React from 'react'
import bannerVideo from '../assets/images/artistic-seo-video.mp4';

const Herosection = () => {
  return (
    <section>
            <video className="w-full h-{100vh}" autoPlay muted loop>
                <source src={bannerVideo} type="video/mp4" />
            </video>     
        </section>
  )
}

export default Herosection
