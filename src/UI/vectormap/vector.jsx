import MapComponent from "./mapchart";

function Vector(){
    return(
    <>
    <div className="buttons avatars">
            <h2 className="b">Vector map</h2>
        <div className="botb">
                <div className="card">
                <div className="top"><p>Pins</p></div>
                 <div className="bottom">
                    <MapComponent/>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Gross domestic product (GDP) by country</p></div>
                 <div className="bottom">
    
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Scale and focus</p></div>
                <ul>
                    <li>Italy</li>
                    <li>Japan</li>
                    <li>United State</li>
                </ul>
                 <div className="bottom">
    
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Custom map - Mall</p></div>
                 <div className="bottom">
    
                 </div>
                </div>
               
        </div>
        </div>
    </>
    )
}
export default Vector;