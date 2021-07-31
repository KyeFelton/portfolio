import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import { BounceLoader } from 'react-spinners'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Home from './components/Home'
import Azgaar from './components/Projects/Azgaar'
import SearchEngine from './components/Projects/SearchEngine'
import Infocus from './components/Projects/Infocus'
import Quarantinder from './components/Projects/Quarantinder'
import Speechcraft from './components/Projects/Speechcraft'
import { AnimatePresence } from "framer-motion"


function App() {

  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)
  // }, [])

  return (

    //to do - remove bootstrap dependency
    <>
      {
        // loading ?
        //   <div className="loading">
        //     <BounceLoader loading={loading} color="#3073ce" />
        //   </div>
        //   :
        <Router>
          <AnimatePresence>
            <Route exact path="/" component={Home} key="0"/>
            <Route exact path="/portfolio" component={Home} key="1"/>
            <Route exact path="/portfolio/azgaar" component={Azgaar} key="2"/>
            <Route exact path="/portfolio/thesis" component={SearchEngine} key="3"/>
            <Route exact path="/portfolio/infocus" component={Infocus} key="4"/>
            <Route exact path="/portfolio/quarantinder" component={Quarantinder} key="5"/>
            <Route exact path="/portfolio/speechcraft" component={Speechcraft} key="6"/>
          </AnimatePresence>
        </Router>
      }
    </>
  );
}

export default App;
