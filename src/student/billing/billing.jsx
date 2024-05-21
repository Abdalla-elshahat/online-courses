import './billing.css'
import { TbExclamationMark } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
function Billing(){
    return(
        <>
              <div className="serice courses billing">
        <div className="tops">
        <h2 className="serich">Billing & Payments</h2>
                <span className='Goto'>Make Payment</span>
                    </div>
                    <div className="upgrade upgradebilling">
                    <div className="left">
                   < TbExclamationMark className='icon'/>
                    <p className="upgradeh2">You have an invoice <span className="cod">#21387 </span> due for <span className="cost">$49.00</span></p>
                    </div>
                    <div className="right">
                    <buton className="upgradebtn">Pay Now !</buton>
                    </div>
                </div>
                <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Basic information</h2>
    <p>This account is billed to:</p>
</div>
<div className="rightbill">
    <div className="ll">
       <img src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-High-Quality-PNG.png" alt=""/>
       <p>Visa card ending in 2428</p>
    </div>
    <div className="rr">
    <span className="remove">Remove</span>
    <span className="change">Change</span>
    </div>
</div>
            </div>
            <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Invoices</h2>
    <p>Your past payments</p>
</div>
<div className="right tab">
    <table>
        <tr>
            <th>Invoice</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
        </tr>
        <tr>
            <td className='invoice'>#12199</td>
            <td className='amount'>$49.00</td>
            <td className='status'>DUE</td>
            <td className='dates'><CiCalendarDate/>25 May 2019</td>
        </tr>
        <tr>
            <td className='invoice'>#12199</td>
            <td className='amount'>$49.00</td>
            <td className='status'>DUE</td>
            <td className='dates'><CiCalendarDate/>25 May 2019</td>
        </tr>
        <tr>
            <td className='invoice'>#12199</td>
            <td className='amount'>$49.00</td>
            <td className='status'>DUE</td>
            <td className='dates'><CiCalendarDate/>25 May 2019</td>
        </tr>
        <tr>
            <td className='invoice'>#12199</td>
            <td className='amount'>$49.00</td>
            <td className='status'>DUE</td>
            <td className='dates'><CiCalendarDate/>25 May 2019</td>
        </tr>
        <tr>
            <td className='invoice'>#12199</td>
            <td className='amount'>$49.00</td>
            <td className='status'>DUE</td>
            <td className='dates'><CiCalendarDate/>25 May 2019</td>
        </tr>
    </table>
</div>
            </div>
                </div>
        </>
    )
}
export default Billing;