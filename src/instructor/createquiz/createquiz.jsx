import './createquiz.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { ImParagraphJustify } from "react-icons/im";
function Createquiz(){
    return(
        <>
         <div className="serice courses quiz">
            <div className="tops">
                <h2 className="serich">Basics of Angular JS :: Quiz</h2>
                <span className='Goto'>Back to Course <FaArrowRight/></span>
                    </div>
                    <div className="card cardquiz">
                        <label htmlFor='Question'>New Question:</label>
                        <input type="text"/>
                        <span><FaPlus/> create Question</span>
                    </div>
                    <div className="card">
                    <div className="toto">
                    <span className='tograp'><span><ImParagraphJustify/></span><p>Q: What is a prop in Angular?</p></span>
                    <span className="delet">Delet</span>
                    </div>
                    <div className="boto">
                        <p className="correct">Correct</p>
                        <div className="blocc">
                        <div className="le"><label htmlFor='first' className='imggrap'><span><ImParagraphJustify/></span>First Answer</label></div>    
                        <div className="ri"> <input type="radio" id='first' name='t'/></div>
                        </div>
                        <div className="blocc">
                        <div className="le"><label htmlFor='second' className='imggrap'><span><ImParagraphJustify/></span>second Answer</label></div>    
                        <div className="ri"> <input type="radio" id='second'  name='t'/></div>
                        </div>
                        <div className="blocc">
                        <div className="le"><label htmlFor='third' className='imggrap'><span><ImParagraphJustify/></span>Third Answer</label></div>    
                        <div className="ri"> <input type="radio" id='third'  name='t'/></div>
                        </div>
                    </div>
                    <span className='newanswer'>New Answer</span>
                    </div>
                    <div className="card">
                    <div className="toto">
                    <span className='tograp'><span><ImParagraphJustify/></span><p>Q: What is a prop in Angular?</p></span>
                    <span className="delet">Delet</span>
                    </div>
                    <div className="boto">
                        <p className="correct">Correct</p>
                        <div className="blocc">
                        <div className="le"><label htmlFor='first' className='imggrap'><span><ImParagraphJustify/></span>First Answer</label></div>    
                        <div className="ri"> <input type="radio" id='first' name='t'/></div>
                        </div>
                        <div className="blocc">
                        <div className="le"><label htmlFor='second' className='imggrap'><span><ImParagraphJustify/></span>second Answer</label></div>    
                        <div className="ri"> <input type="radio" id='second'  name='t'/></div>
                        </div>
                        <div className="blocc">
                        <div className="le"><label htmlFor='third' className='imggrap'><span><ImParagraphJustify/></span>Third Answer</label></div>    
                        <div className="ri"> <input type="radio" id='third'  name='t'/></div>
                        </div>
                    </div>
                    <span className='newanswer'>New Answer</span>
                    </div>
                    <div className="card">
                    <div className="toto">
                    <span className='tograp'><span><ImParagraphJustify/></span><p>Q: What is a prop in Angular?</p></span>
                    <span className="delet">Delet</span>
                    </div>
                    <div className="boto">
                        <p className="correct">Correct</p>
                        <div className="blocc">
                        <div className="le"><label htmlFor='first' className='imggrap'><span><ImParagraphJustify/></span>First Answer</label></div>    
                        <div className="ri"> <input type="radio" id='first' name='t'/></div>
                        </div>
                        <div className="blocc">
                        <div className="le"><label htmlFor='second' className='imggrap'><span><ImParagraphJustify/></span>second Answer</label></div>    
                        <div className="ri"> <input type="radio" id='second'  name='t'/></div>
                        </div>
                        <div className="blocc">
                        <div className="le"><label htmlFor='third' className='imggrap'><span><ImParagraphJustify/></span>Third Answer</label></div>    
                        <div className="ri"> <input type="radio" id='third'  name='t'/></div>
                        </div>
                    </div>
                    <span className='newanswer'>New Answer</span>
                    </div>
        </div>
        </>
    )
}
export default Createquiz;