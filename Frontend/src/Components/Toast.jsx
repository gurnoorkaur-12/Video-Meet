
export default function Toast(){
    return(
        <>
            <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{color:"black"}}>
                <div id="toast-message" className="toast bg-light" role="alert" aria-live="assertive" aria-atomic="true"  data-bs-delay="10000">
                    <div className="toast-header fs-5" style={{fontWeight:800,color:"black"}}>
                        <i className="fa-solid fa-video fa-lg" style={{color:" rgb(86, 178, 249)",margin:"0 4px"}}></i>
                        Video Meet
                    </div>
                </div>
            </div>
        </>
    )
}