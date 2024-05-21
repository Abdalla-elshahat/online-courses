import { useState } from 'react';
import './add.css';
import { AiOutlineUpload } from "react-icons/ai";
function Add(){
    let [nameE,setnameE]=useState('');
    let [nameA,setnameA]=useState('');
    let [price,setprice]=useState(0);
    let [img,setimage]=useState();
    let [arr,setarr]=useState([]);
    function change(e){
        e.preventDefault();
setarr([...arr,{
nE:nameE,
nA:nameA,
p:price,
imag:img,
}])
document.getElementById("ne").value='';
document.getElementById("ar").value='';
document.getElementById("p").value='';
document.getElementById("img").value='';
console.log(arr)
    }
    return(
        <>
        {arr.map((e)=>{
                    return(
                    <div className='aa' key={Math.random()*e.p}>
                        <li>{e.nE}</li>
                        <li>{e.nA}</li>
                        <li>{e.p}</li>
                        <li><img src={e.imag} alt='' width={"100px"} height={"100px"}/></li>
                    </div>
                    )
                })}
        <div className="contener">
            <div className="model">
        <form onSubmit={(e)=>{change(e)}}>
            <div className="box"> <label >Name-En</label>
<input type='text' placeholder='your name bu english' name='en'onChange={(e)=>setnameE(e.target.value)} id='ne' required/></div>
<div className="box">
<label >Name-Ar</label>
<input type='text' placeholder='your name bu arabic' name='Ar'onChange={(e)=>setnameA(e.target.value)} id='ar'required/>
</div>
<div className="box">
<label >Price</label>
<input type='number' placeholder='price' name='pr'onChange={(e)=>setprice(e.target.value)} id='p'required/>
</div>
<div className="box">
<label >uplod the image</label>
<label htmlFor="img">
<AiOutlineUpload className='icon'/>
</label>
<input  type="file" alt=''  name='img' onChange={(e)=>setimage(URL.createObjectURL(e.target.files[0]))} id='img'/>
</div>
<input type="submit" name="submit" value={"Save"}  className='submit'/>
<input type="reset" name="submit" value={"cancel"}  className=' c'/>
        </form>
        </div>
        </div>
        </>
    )
}
export default Add;