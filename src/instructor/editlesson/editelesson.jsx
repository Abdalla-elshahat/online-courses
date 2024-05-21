import './editlesson.css'
import { FaPlus } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { ImParagraphLeft } from "react-icons/im";
function Editelesson(){
    return(
        <>
         <div className="dash editcorses editlesson">
            <div className="content">
                <div className="studentdashbord">
                    <p>Edit Lesson</p>
                </div>
               <div className="bottomc">
                <div className="card cardleft">
                <form action="">
                <div className="bake">
                <div className="sele">
    <label htmlFor="sele">CATEGORY:</label>
    <select id="sele">
        <option value="basicangular">basic Angular</option>
    </select>
   </div>
                    <div className="blok">
                    <label htmlFor="title">Title</label>
    <input type="text" id='title' placeholder='Course title is editable here'/>
                    </div>
                    <div className="blok">
                    <label htmlFor="des">Description</label>
   <textarea name="des" id="des" cols="30" rows="10" placeholder='des...'></textarea>
                    </div>
   <div className="trs">
    {/* ? */}
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
                                        <h2>Lessons Vedio</h2>
                                    </span>
                                </div>
                                <div className="bottomcltt">
                                <iframe width="auto" height="315" src="https://www.youtube.com/embed/hGS_j4J5I60?si=LDjSx8cddVVXc0rP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div className="aab">
        <div className="upload">
        <label htmlFor="file" className='tot .totlesson'><FaImage/></label>
        <input type="file" id='file'/>
        <button htmlFor="file">Upload file</button>
        </div>
    </div>
                                </div>
</div>
                </div>
               </div>
                </div>
        </>
    )
}
export default Editelesson;