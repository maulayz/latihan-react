import './App.css';
import NavigationBar from "./component/NavigationBar"
import Intro from "./component/Intro"
import Trending from "./component/Trending"
import SuperHero from "./component/SuperHiro"
import Footer from "./component/Footer"

import "./style/LandingPage.css"

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>

      <div className='Trending'>
        <Trending />
      </div>

      <div className='SuperHero'>
        <SuperHero />
      </div>

      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
