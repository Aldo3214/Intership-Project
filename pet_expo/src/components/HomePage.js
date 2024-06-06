function HomePage() {
  return (
    <div>
      <div className="hero-container">
        <div className="title-box">
          <p className="title">For the love of pets</p>
          <p className="subtitle">Welcome to our pet expo</p>
        </div>
      </div>

      <div className="about-container" id="about">
        <div className="about-text">
          <h3 className="heading-tertiary">About us</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            reiciendis a libero, corporis placeat officiis obcaecati. Dolorem
            esse cum suscipit molestiae earum est ex. Ullam, reprehenderit
            itaque. Recusandae, voluptates hic. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eaque reiciendis a libero, corporis
            placeat officiis obcaecati. Dolorem esse cum suscipit molestiae
            earum est ex. Ullam, reprehenderit itaque. Recusandae, voluptates
            hic.
          </p>
        </div>
        <div className="about-img">
          <div className="composition">
            <img
              src="../public/img/dog.jpg"
              alt="dog"
              className="composition__photo composition__photo--p2 dog-image"
            />
            <img
              src="../public/img/cat.jpg"
              alt="cat"
              className="composition__photo composition__photo--p1 cat-image"
            />
            <img
              src="../public/img/bird.jpg"
              alt="bird"
              className="composition__photo composition__photo--p3 bird-image"
            />
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contacts">
          <h3 className="contact-subtitle">Our Contacts</h3>
          <ul className="contact-list">
            <li>
              <a href="#">+355695488231</a>
            </li>
            <li>
              <a href="#">pet_expo@gmail.com</a>
            </li>
            <li>
              <a href="#">pet_expo@yahoo.com</a>
            </li>
          </ul>
        </div>

        <div className="socials">
          <h3 className="contact-subtitle">Our Social Medias</h3>
          <ul className="contact-list">
            <li className="social-list-item">
              <a href="#">
                <img
                  className="facebook-logo"
                  src="../public/img/facebook-icon.png"
                />
              </a>
            </li>
            <li className="social-list-item">
              <a href="#">
                <img
                  className="instagram-logo"
                  src="../public/img/instagram-icon.png"
                />
              </a>
            </li>
            <li className="social-list-item">
              <a href="#">
                <img
                  className="twitter-logo"
                  src="../public/img/twitter-icon.jpg"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
