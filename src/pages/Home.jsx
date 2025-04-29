import React from 'react'
import Layout from '../layout/Layout'
import bannerVideo from '../assets/images/artistic-seo-video.mp4';

const Home = () => {
  return (
    <Layout>
        <section>
            <video className="w-full h-{100vh}" autoPlay muted loop>
                <source src={bannerVideo} type="video/mp4" />
            </video>     
        </section>
    </Layout>
  )
}

export default Home
