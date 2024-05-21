import './table.css'
import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
function Table(){
    function check(x){
        let tr=document.querySelectorAll("tr");
        tr.forEach((e)=>{
            if(x.id==="i1" && x.checked){
tr.forEach((t)=>{
    t.style.backgroundColor="rgb(75, 121, 207)";
})
            }
            else{
                if(e.className===x.id &&x.checked){
                    e.style.backgroundColor="rgb(75, 121, 207)";
                }
                else{
                    e.style.backgroundColor="transparent";
                }
            }
        })
    }
    return(
        <>
        <div className="edit table">
            <h2 className='editacount'>Table</h2>
            <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Toggle Checkboxes</h2>
    <p>A tiny plugin which adds the ability to toggle all checkboxes within a table.</p>
</div>
<div className="right">
<table>
    <tr  className='i1'>
    <div className="letabl">
    <th><input type="checkbox" id='i1' className='checktst' onChange={(x)=>{check(x.target) }}/></th>
    <th>Employ</th>
    </div>
    <div className="ritabl">
    <th>Status</th>
    <th>Last Activity</th>
    <th>Earnings</th>
    <th></th>
    </div>
    </tr>
    <tr className="i2">
    <div className="letabl">
    <td><input type="checkbox" id='i2' onChange={(x)=>{check(x.target) }} /></td>
    <td><img src="https://lema.frontted.com/assets/images/256_luke-porter-261779-unsplash.jpg" alt="" /> <span>Michael Smith</span></td>
    </div>
    <div className="ritabl">
    <td><span className='adm'>Admin</span></td>
    <td>3 days ago</td>
    <td className='salary'>$12,402</td>
    <td className='us'>< BsThreeDotsVertical/></td>
    </div>
    </tr >
    <tr className="i3">
    <div className="letabl">
    <td><input type="checkbox" id='i3' onChange={(x)=>{check(x.target) }}/></td>
    <td><img src="https://lema.frontted.com/assets/images/256_luke-porter-261779-unsplash.jpg" alt="" /> <span>Michael Smith</span></td>
    </div>
    <div className="ritabl">
    <td><span className='adm'>Admin</span></td>
    <td>3 days ago</td>
    <td className='salary'>$12,402</td>
    <td className='us'><BsThreeDotsVertical/></td>
    </div>
    </tr>
    <tr className="i4">
    <div className="letabl">
    <td><input type="checkbox" id='i4' onChange={(x)=>{check(x.target)}}/></td>
    <td><img src="https://lema.frontted.com/assets/images/256_luke-porter-261779-unsplash.jpg" alt="" /> <span>Michael Smith</span></td>
    </div>
    <div className="ritabl">
    <td><span className='adm'>Admin</span></td>
    <td>3 days ago</td>
    <td className='salary'>$12,402</td>
    <td className='us'><BsThreeDotsVertical/></td>
    </div>
    </tr>
</table>
</div>
            </div>
            <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Search</h2>
    <p>Add search functionality to your tables with List.js. Please read the <a href="#">official plugin documentation</a> for a full list of options.</p>
</div>
<div className="right">
    <div className="search">
        <input type="text" placeholder='Search'/>
<IoIosSearch/>
    </div>
<table>
    <tr className="i5">
    <div className="letabl">
    <th><input type="checkbox" id='i5' onChange={(x)=>{check(x.target)}}/></th>
    <th>Employ</th>
    </div>
    <div className="ritabl">
    <th>Status</th>
    <th>Last Activity</th>
    <th>Earnings</th>
    <th></th>
    </div>
    </tr>
    <tr className="i6">
    <div className="letabl">
    <td><input type="checkbox" id='i6' onChange={(x)=>{check(x.target)}}/></td>
    <td><img src="https://lema.frontted.com/assets/images/256_luke-porter-261779-unsplash.jpg" alt="" /> <span>Michael Smith</span></td>
    </div>
    <div className="ritabl">
    <td><span className='adm'>Admin</span></td>
    <td>3 days ago</td>
    <td className='salary'>$12,402</td>
    <td className='us'><BsThreeDotsVertical/></td>
    </div>
    </tr>
    <tr className="i7">
    <div className="letabl">
    <td><input type="checkbox" id='i7' onChange={(x)=>{check(x.target)}}/></td>
    <td><img src="https://lema.frontted.com/assets/images/256_luke-porter-261779-unsplash.jpg" alt="" /> <span>Michael Smith</span></td>
    </div>
    <div className="ritabl">
    <td><span className='adm'>Admin</span></td>
    <td >3 days ago</td>
    <td className='salary'>$12,402</td>
    <td className='us'><BsThreeDotsVertical/></td>
    </div>
    </tr>
    <tr className="i8" >
    <div className="letabl">
    <td><input type="checkbox" id='i8'  onChange={(x)=>{check(x.target)}}/></td>
    <td><img src="https://lema.frontted.com/assets/images/256_luke-porter-261779-unsplash.jpg" alt="" /> <span>Michael Smith</span></td>
    </div>
    <div className="ritabl">
    <td><span className='adm'>Admin</span></td>
    <td>3 days ago</td>
    <td className='salary'>$12,402</td>
    <td className='us'><BsThreeDotsVertical/></td>
    </div>
    </tr>
</table>
</div>
            </div>
            <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Sort Columns</h2>
    <p>Add sorting functionality to your tables with by List.js. Please read the <a href="#"> official plugin documentation </a>for a full list of options.</p>
</div>
<div className="right">
    <div className="blokk">
    <div className="lett">
    <img src="https://lema.frontted.com/assets/images/256_joao-silas-636453-unsplash.jpg" alt="" />
    <span>
        <h2>Bryan K. Davis</h2>
        <p>Web Developer</p>
    </span>
</div>
<div className="rii">
    <BsThreeDotsVertical/>
</div>
    </div>
    <div className="blokk">
    <div className="lett">
    <img src="https://lema.frontted.com/assets/images/256_joao-silas-636453-unsplash.jpg" alt="" />
    <span>
        <h2>Bryan K. Davis</h2>
        <p>Web Developer</p>
    </span>
</div>
<div className="rii">
    <BsThreeDotsVertical/>
</div>
    </div>
    <div className="blokk">
    <div className="lett">
    <img src="https://lema.frontted.com/assets/images/256_joao-silas-636453-unsplash.jpg" alt="" />
    <span>
        <h2>Bryan K. Davis</h2>
        <p>Web Developer</p>
    </span>
</div>
<div className="rii">
    <BsThreeDotsVertical/>
</div>
    </div>
</div>
            </div>
        </div>
        </>
    )
}
export default Table;