import History from "./History.jsx";
import Navbar from "./Navbar.jsx";
import Intro from "./Intro.jsx";
import Meeting from "./Meeting.jsx";
import Info from "./Info.jsx";
import './LandingPage.css';

export default function LandingPage(){
    return (
        <section className="landingPage container">
            <History/>
            <Intro/>
            <Info/>           
        </section>
    )
}