import "./Info.css";

export default function Info(){
    return(
        <section className="info row rows-cols-4">
            <div className="card">
                <img src="./images/meeting.png" className="card-img" alt="Online Meetings"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">
                        <i className="fa-solid fa-video me-1"></i>
                        Meetings
                    </h5>
                </div>
            </div>
             <div className="card">
                <img src="./images/webinar.png" className="card-img" alt="Webinars"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">
                        <i className="fa-solid fa-clapperboard me-1"></i>
                        Webinars
                    </h5>
                </div>
            </div>
            <div className="card">
                <img src="./images/Celebrations.png" className="card-img" alt="Celebrations"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">
                        <i className="fa-solid fa-cake-candles me-1"></i>
                        Celebrations
                    </h5>
                </div>
            </div>
            
            <div className="card">
                <img src="./images/training.jpg" className="card-img" alt="Training"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">
                        <i className="fa-solid fa-child-reaching me-1"></i>
                        Training
                    </h5>
                </div>
            </div>
            <div className="card">
                <img src="./images/Gatherings.jpg" className="card-img" alt="Gatherings"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">
                        <i className="fa-solid fa-people-group me-1"></i>
                        Gatherings
                    </h5>
                </div>
            </div>
            <div className="card">
                <img src="./images/academics.jpg" className="card-img" alt="Academics"/>
                <div className="card-img-overlay">
                    <h5 className="card-title" style={{color:"black"}}>
                        <i className="fa-solid fa-book-bookmark me-1"></i>
                        Academics
                    </h5>
                </div>
            </div>
        </section>
    )
}