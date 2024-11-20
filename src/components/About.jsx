import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-black flex flex-col justify-center items-center"
    >
      <div class="container">
        <h2 className="text-3xl  text-white font-bold mb-4 mt-1 text-center">
          About Me
        </h2>
        <p className="text-xl text-white text-center">
          I'm a students from the University of Singaperbangsa Karawang, I am
          reliable in several areas of programming such as{' '}
          <b class="text-yellow-500">
            HTML, PHP, Bootstrap, Codeigniter, React JS
          </b>
          and others. I am Enthusiastic about learning new technologies and
          committed to delivering an outstanding user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
