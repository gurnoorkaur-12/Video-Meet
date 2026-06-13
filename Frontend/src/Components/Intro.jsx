import './Intro.css';
import Meeting from './Meeting.jsx';
export default function Intro(){
    return(
        <section className='Intro'>
            <h1 style={{margin:"0.2rem"}}>Video calls and Meetings for everyone</h1>
            <h4 style={{margin:"0.5rem",color:"#6e6e6e",fontWeight:"400"}}>Connect,collaborate and celebrate from anywhere with Video Meet</h4>
            <Meeting></Meeting>
            <hr style={{opacity:1.25}}/>
        </section>
    )
}