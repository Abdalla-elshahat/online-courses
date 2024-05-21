import './editcorses.css'
import { FaPlus } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { ImParagraphLeft } from "react-icons/im";
function  Editcorses(){
    return(
        <>
            <div className="dash editcorses">
            <div className="content">
                <div className="studentdashbord">
                    <p>Edit Course</p>
                </div>
               <div className="bottomc">
                <div className="card cardleft">
                <form action="">
                <div className="bake">
                    <div className="blok">
                    <label htmlFor="slug">SLUG (URL)</label>
    <input type="email"  placeholder='/course-title-is-editable-here'/>
                    </div>
                    <div className="blok">
                    <label htmlFor="title">Title</label>
    <input type="text" id='title' placeholder='Course title is editable here'/>
                    </div>
                    <div className="blok">
                    <label htmlFor="des">Description</label>
   <textarea name="des" id="des" cols="30" rows="10" placeholder='des...'></textarea>
                    </div>
   <div className="sele">
    <label htmlFor="sele">CATEGORY</label>
    <select id="sele">
        <option value="WebDesign">Web Design</option>
        <option value="WebDevelopment">Web Development</option>
        <option value="Marketing">Marketing</option>
    </select>
   </div>
   <div className="trs">
    {/* ? */}
   </div>
    <div className="f3">
        <p className="avatar">Avatar</p>
        <div className="upload">
        <label htmlFor="file" className='tot'><FaImage/></label>
        <input type="file" id='file'/>
        <button htmlFor="file">Upload file</button>
        </div>
    </div>
    </div>
    <span className='save'>
    <input type="submit" value={"Save Change"}/>
    </span>
                </form>
            </div>
               <div className="card">
                                <div className="toeditcors">
                                    <span>
                                        <h2>Lessons</h2>
                                        <p>Manage Lessons</p>
                                    </span>
                                    <span className='new'>New <FaPlus/></span>
                                </div>
                                <div className="bottomcltt">
                             <div className="malomat">
                                <div className="ganb">
                                <span className='number'><ImParagraphLeft/></span>
                                <span className='name'>Overview</span>
                                </div>
                                <span className='minute'>3:33</span>                                
</div>   
                             <div className="malomat">
                            <div className="ganb"> 
                            <span className='number'><ImParagraphLeft/></span>
                                <span className='name'>Asset Pipeline</span></div>
                                <span className='minute'>3:33</span>                                
</div>   

<div className="malomat">
    <div className="ganb">
    <span className='number'><ImParagraphLeft/></span>
     <span className='name'>Getting Started <span className='free'>Free</span></span>
    </div>
    <span className='minute'>6.55</span>                                
</div>   
<div className="malomat">
    <div className="ganb"><span className='number'><ImParagraphLeft/></span>
                                <span className='name'>Advanced Workflows <span className='pro'>Pro</span></span>
                                </div>
                                <span className='minute'>3:33</span>                                
</div>   
<div className="malomat">
    <div className="ganb">
    <span className='number'><ImParagraphLeft/></span>
                                <span className='name'>Tips & Tricks<span className='pro'>Pro</span></span>
    </div>
                                <span className='minute'>3:33</span>                                
</div>   
<div className="malomat">
    <div className="ganb">
    <span className='number'><ImParagraphLeft/></span>
                                <span className='name'>Final Quiz</span>
    </div>
                                <span className='minute'><span className='quiz'>Quiz</span></span>                                
</div> 
<div className="malomat">
    <div className="ganb">
    <span className='number'><ImParagraphLeft/></span>
                                <span className='name'>Final Quiz</span>
    </div>
                                <span className='minute'>33.3</span>                                
</div> 
<div className="malomat">
    <div className="ganb">
    <span className='number'><ImParagraphLeft/></span>
                                <span className='name'>Final Quiz</span>
    </div>
                                <span className='minute'>5.3</span>                                
</div>     
                                </div>
</div>
                </div>
               </div>
                </div>
        </>
    )
}
export default Editcorses;