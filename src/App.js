import "./App.css";
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/footer";
import Portraits from "./Components/Portraits/Portraits";
import Travel from "./Components/Travel/travel";
import Families from "./Components/Families/families";
import Contacts from "./Components/Contacts/contacts";
import Slider from "./Components/Slider/slider";
import Info from "./Components/Info/info";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";




const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content-wrap">
          <Routes>

            <Route path="" element={<Content />} />
            <Route path="/portraits" element={<Portraits />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/families" element={<Families />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/info" element={<Info />} />
            <Route path="/slider/portraits/*" element={<Slider state={props.state} source="Portraits" />} />
            <Route path="/slider/families/*" element={<Slider state={props.state} source="Families" />} />
            <Route path="/slider/travel/*" element={<Slider state={props.state} source="Travel" />} />
          </Routes>
        </div>
        <Footer />

      </div>
    </Router>
  );
};

export default App;


// не добавлен блок в react-scripts/config/webpack.config.js, весь раздел, ранее не было

// fallback: {
//   "fs": false,
//   "tls": false,
//   "net": false,
//   "path": false,
//   "zlib": false,
//   "http": false,
//   "https": false,
//   "stream": false,
//   "crypto": false,
//   "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
// } 