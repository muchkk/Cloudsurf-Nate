import React from 'react';
import Nav from "./Nav";

// Import your other components
// import About from './About';
// import Experience from './Experience';
// import Projects from './Projects';
// import Contact from './Contact';

const styles = {
  homeContainer: {
    fontFamily: 'Poppins, sans-serif',
    // backgroundColor: '#3a1a1f',
  },
};

function Home() {
  return (
      <div style={styles.homeContainer}>
        <Nav />
        <div>
          <h1>BRUH</h1>
        </div>
      </div>
  );
}

export default Home;