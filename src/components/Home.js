import React from 'react';
import Nav from "./Nav";
import img_1412 from "../IMG_1412.jpg"
import Contacts from './Contacts';

// Import your other components
// import About from './About';
// import Experience from './Experience';
// import Projects from './Projects';
// import Contact from './Contact';

const styles = {
  homeContainer: {
    fontFamily: 'Poppins, sans-serif',
    maxWidth: '100%',
    // backgroundColor: '#3a1a1f',
  },
};

function Home() {
  return (
      <div style={styles.homeContainer}>
        <Nav />
        <div>
          <h1>Software Developer</h1>
          <h2>To continuously enhance skills, design innovative and scalable software solutions that drive business growth, improve user experiences, and meet diverse client needs through cutting-edge technologies.</h2>
          <img src={img_1412} alt="Profile photo" style={{width: "200px"}} />
          <h3>Resume: UAT Analyst - Nordstrom Credit, CDP Analyst - Nordstrom Credit</h3>
          <h4>This website</h4>
          <Contacts />
        </div>
      </div>
  );
}

export default Home;