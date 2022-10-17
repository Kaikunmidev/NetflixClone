import "./home.css"
import logo from "../../assets/logo.png"
function Home() {
  return (
    <div className="container">
      <div className="main1">
        <div className="heros">
          <img className="netlogo" src={logo} alt="" />
          <button className="signin">Sign In</button>
        </div>
        <div className="mainbody">
        <div className="unlimited">
          <h1 className="unlimitedText">Unlimited movies, TV shows, and more.</h1>
          <p className="watch">Watch anywhere. Cancel anytime.</p>
        </div>
        <div className="ready">
          <p className="readyText">Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className="emailButton">
          <div className="emailinput">
            <input type="email" placeholder="Email address" />
          </div>
          <div className="startedB">
            <button className="btn1">Get Started <img src="" alt="" /></button>
          </div>
        </div>
        </div>
        </div>
        <div className="section2">
          <hr />
          <div className="enjoy">
            <h2 className="enjoyBIGtext">Enjoy on your TV.</h2>
          </div>
          <div className="watch">
            <h5 className="watchText">Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray Players, and more.</h5>
          </div>
        </div>
      </div>
  )
}

export default Home