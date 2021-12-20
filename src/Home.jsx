import React from "react";
import web from "../src/Images/Home.png"
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common
                name="Grow Your Knowledge with"
                imgsrc={web}
                visit="/services"
                btname="Get Started" />
        </>
    );
}

export default Home;