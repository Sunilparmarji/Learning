import React from "react";
import './Home.scss';
import Crousel from "../Crousel/Crousel";

function Home () {
    return (
        <>
            <div className="homeWrapper">
                <Crousel />
            <h3>Home</h3>
            </div>
        </>
    );
}
export default Home;