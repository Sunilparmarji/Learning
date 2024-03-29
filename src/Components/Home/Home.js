import React from "react";
import './Home.scss';
import Crousel from "../Crousel/Crousel";

function Home () {
    return (
        <>
           <div className="homeCrousel">
                <Crousel />
            </div>
            
        </>
    );
}
export default Home;