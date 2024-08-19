import React, { useEffect,useState } from 'react';
import './HomePage.css';

const images = [
  'https://media.licdn.com/dms/image/D4D22AQHiUR4YwgR1WA/feedshare-shrink_1280/0/1710666209108?e=1726704000&v=beta&t=eIFnOtW0EoCIULswpgXh-bSAXyqv9st2t0b7mZs72V0',
  'https://media.licdn.com/dms/image/D4D22AQGNp7mb1AQXcA/feedshare-shrink_1280/0/1710542053248?e=1726704000&v=beta&t=A037yMdOxvDeQsMzB7EMdZm0LvodF3KKEcmlhB8S7-c',
  'https://media.licdn.com/dms/image/v2/D4D22AQGlpZJCrb9Sgg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1700161626044?e=1726704000&v=beta&t=4j-ewQNxXUVldZQ5AZngFcYmlZgOz52kqwy0NuOk0_Y',
  'https://media.licdn.com/dms/image/D4E22AQHjqjs5LPXQaQ/feedshare-shrink_1280/0/1700203984188?e=1726704000&v=beta&t=DGtolkAQwCOb8wIe46CxC84DId6F2X0SzS0db4Xouv8',
  'https://media.licdn.com/dms/image/v2/D4D22AQGHHesRixn8tw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1696921607361?e=1726704000&v=beta&t=Qfy9Hz6xFzcgXjIEZXzNd6vJS6WEQ5eJl8znLQif7YE',
  'https://media.licdn.com/dms/image/v2/C4D22AQE5A262nVvDzw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1667924889629?e=1726704000&v=beta&t=OAQAkLw_d5HMxBrF5HnhqJz8iBtxxDM-2tciTdcJ_CU'
];

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const items = document.querySelectorAll('.carousel__item');
    const numItems = items.length;
    const angle = 360 / numItems;

    items.forEach((item, index) => {
      const rotation = angle * index;
      item.style.transform = `rotateY(${rotation}deg) translateZ(320px)`;
    });
  }, []);

  const scrollToSection = (id, name) => {
    setActiveSection(name);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMenu(false); // Close the menu after a section is selected
  };

  return (
    <div className="homepage">
      <div className="main-content">
        <h1>Welcome to My Portfolio</h1>
        <div className="carousel-container">
          <div className="carousel">
            {images.map((image, index) => (
              <div key={index} className="carousel__item">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <aside className="side-nav">
          <div className="menu-button" onClick={() => setShowMenu(!showMenu)}>
            Sections
          </div>
          {showMenu && (
            <div className="popup">
              <div onClick={() => scrollToSection('section1', 'Introduction')}>Introduction</div>
              <div onClick={() => scrollToSection('section2', 'Why Programming?')}>Why Programming?</div>
              <div onClick={() => scrollToSection('section3', 'Background')}>Background</div>
              <div onClick={() => scrollToSection('section4', 'Conclusion')}>Conclusion</div>
            </div>
          )}
        </aside>

        <section id="section1" className="content-section">
          <h2>Introduction</h2>
          <p>
            <strong>Was this “portfolio,” so to speak, ever supposed to exist? Not really.</strong><br /><br />
            Seven months ago, I discovered a newfound love for programming. It started as a necessity—being active in the startup ecosystem and needing to facilitate interactions with engineers during my role as a product manager. I threw myself into it, squeezing every bit of time from my day to absorb as much knowledge as possible and to build.
          </p>
        </section>

        <section id="section2" className="content-section">
          <h2>Why Programming?</h2>
          <p>
            <strong>Why programming?</strong> I have a relentless drive to create—perhaps even a need to create. I'm an artist, a musician, a builder of all sorts, both digital and physical. Whatever I do, I have to fill the void with creations of some kind. Programming has enabled me to do that in the digital landscape.
          </p>
        </section>

        <section id="section3" className="content-section">
          <h2>Background</h2>
          <p>
            But that’s not the whole story. I was born and raised by a lawyer and an agricultural entrepreneur (a more polished way of saying "farmer"). If there’s one thing I learned during my upbringing, it's the importance of intersectionality. This has always defined me—the willingness and versatility to explore uncharted fields and disciplines, and to thrive in them.
          </p>
        </section>

        <section id="section4" className="content-section">
          <h2>Conclusion</h2>
          <p>
            <strong>Did all of this matter?</strong> I really like to think so. Over the past year, I’ve worked as an innovation consultant and later as an innovation project manager. These roles have given me the chance to operate in every aspect—both the rewarding and the challenging—of building companies.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;