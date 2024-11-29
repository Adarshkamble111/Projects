const Hero = ({ text, backdrop }) => {  //Here we created a hero component and in this we include a header with boostrap in the header using className.
    // (IMP) We can declare prop of Hero component in various component which can able to display various different text at the same time in different component .
    return (
      <header className="bg-dark text-white p-5 hero-container">
        <h1 className="hero-text">{text}</h1>
        {backdrop &&
          <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
        }
      </header>
    )
  }

export default Hero;