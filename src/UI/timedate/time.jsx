import './time.css'
import { BsQuestionCircle } from "react-icons/bs";
function Time(){
    return(
        <>
         <div className="buttons times">
            <h2 className="b">Time & Date</h2>
            <h2 className="b btw">Flatpickr
            <p>A simple yet powerful datepicker powered by Flatpickr. Please read the official plugin documentation for a full list of options.</p></h2>
        <div className="botb botbs">
                <div className="card">
                <div className="top"><p>Date Picker</p></div>
                 <div className="bottom">
                    <label htmlFor="date">Date</label>
                    <input type="date" placeholder='may,6,2024' />
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Range Picker</p></div>
                 <div className="bottom">
                    <label htmlFor="date" placeholder="October 7, 2018 to October 15, 2018">Range</label>
                    <input type="date"/>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Anchor Range Picker</p></div>
                 <div className="bottom">
                 <label>Recent Orders</label>
                    <div className='an'>
                        <span className='date'>13/03/2018 to 20/03/2018</span>
                        <BsQuestionCircle className='quis'/>
                    </div>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Date Time Picker</p></div>
                 <div className="bottom">
                    <label htmlFor="date">Date Time</label>
                    <input type="date" placeholder='October 7, 2018 at 15:35'/>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Time Picker</p></div>
                 <div className="bottom">
                    <label htmlFor="date">Time Picker</label>
                    <input type="time" placeholder='15:35'/>
                 </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Time;