import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="full-width flex-center flex-col">
        <h1 className="head_text text-center">Daily dose of 
        <br className='mx-md:hidden'/>
        <span className="blue_gradient text-center">Positivity and Motivation</span>
        </h1>
        <p className="desc text-center">
        Unleash Your Inner Wordsmith with QuoteFeast: Craft, Share, Inspire!
        </p>
        <Feed/>
    </section>
  );
};

export default Home;
