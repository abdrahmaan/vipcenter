import React from "react";
import ReactDOM from 'react-dom';
import Navbar  from "./compon/main/Navbar";
import PicSection from "./compon/Home/PicSection";

class Home extends React.Component{

    render(){
        return(
        <>
            <Navbar/>
            <PicSection />
          </>  
        );
    }


}


export default Home;