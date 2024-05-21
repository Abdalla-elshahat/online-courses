import './erning.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
function Erning(){
    return(
        <>
         <div className="earn dashins">
                <h2 className="earnh">Earneing</h2>
<div className="tops">
    <div className="le">
        <div className="card">
            <div className="to">
                <span className='inf'>
                    <h2>Current Balance</h2>
                    <p>This billing cycle</p>
                </span>
                <span><BsThreeDots/></span>
            </div>
            <div className="botme">
                <span className='circle'>
               <h2>Next payout</h2>
               <p>15.09.2019</p>
                </span>
                <span className='malm'>
                    <h2>$37,290</h2>
                    <p>Current balance this billing cycle</p>
                </span>
            </div>
        </div>
    </div>
    <div className="ri">
        <div className="rightinsdashbottom">
        <div className="card">
        <div className="to">
                <span className='inf'>
                    <h2>Purchases</h2>
                    <p>This billing cycle</p>
                </span>
                <span><BsThreeDots/></span>
            </div>
            <div className="bottomdashins">
                        <div className="mony">
                            <span>$30K</span>
                            <span>$20K</span>
                            <span>$20K</span>
                            <span>$0K</span>
                        </div>
                        <div className="pres">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                            <span>Jul</span>
                            <span>Aug</span>
                            <span>sep</span>
                            <span>oct</span>
                            <span>Nov</span>
                            <span>Des</span>
                        </div>
                    </div>
        </div>
        </div>
    </div>
</div>
<div className="botm">
    <div className="card">
    <div className="to">
        <h4>Current Students</h4>
    </div>
    <div className="bot">
        <label htmlFor="filter">Filter by:</label>
        <input type="text" placeholder='type an name'/>
        <select name="" id="corses">
            <option value="all">All corses</option>
            <option value="angular">Angular</option>
        </select>
    </div>
    </div>
</div>
        </div>
        </>
    )
}
export default Erning;