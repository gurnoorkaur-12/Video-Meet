import './Meeting.css';

export default function Meeting(){
    return(
        <>
            <section className='meeting'>
                <button className="guest">
                    Join as a Guest
                    <i className="fa-regular fa-square-plus" style={{color:"rgb(255, 255, 255)"}}></i>
                </button>
            </section>
        </>
    )
}