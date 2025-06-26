import Hero from "./Hero";
import home from "./home.mp4";
import home_video from "./home_video.css";

const Home = () => {
  return (
    <>
      <center><Hero text="Welcome to Movie Browser" /></center>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <div className="back_video">
            <video src={home} autoPlay muted loop>
              <home_video/>
            </video>
            </div>
          <center><h2>Movie Browser project using React</h2></center>
              {/* <p className="lead">
                You will be creating a movie browser that's API driven. There's a search function,
                movie detail view, about page, all built into a single page application / progressive web application.
              </p>
              <p className="lead">
                There are tasks I have purposely left out of this project for you to solve on your own. This is
                VERY similar to a take home assignment that a company will give you when you apply to work with
                them.
              </p>
              <p className="lead">
                Just a few bugs that have not been solved yet:
              </p>
              <ul className="lead">
                <li>There is no 404 page</li>
                <li>Sometimes a search result doesn't have an image</li>
                <li>There is no handler if there are no search results</li>
                <li>The search button in the navigation doesn't work</li>
              </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;