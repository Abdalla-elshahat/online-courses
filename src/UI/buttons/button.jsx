import './button.css'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { IoIosCloud } from "react-icons/io";
import { MdLaunch } from "react-icons/md";
import { PiMusicNotesSimpleDuotone } from "react-icons/pi";
function Button(){
    return(
        <>
        <div className="buttons">
            <h2 className="b">Buttons</h2>
        <div className="botb">
            <div className="le">
                <div className="card">
                <div className="top"><p>Default Buttons</p></div>
                 <div className="bottom">
                    <p className='tops'>Use button classes on an <span>&lt;a/&gt;,&lt;button/&gt;,</span> or <span>&lt;input/&gt;</span> element.</p>
                <div className="buttonss">
                    <button className='primary'>primary</button>
                    <button className='secondry'>Secondery</button>
                    <button className='success'>Success</button>
                    <button className='danger'>Danger</button>
                    <button className='warning'>warning</button>
                    <button className='info'>info</button>
                    <button className='lighte'>Light</button>
                    <button className='dark'>Dark</button>
                    <button className='linke'>Link</button>
                </div>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Outlined Buttons</p></div>
                 <div className="bottom">
                    <p className='tops'>Use the <span>.btn-outline-*</span> classes to create bordered buttons.</p>
                <div className="buttonss buttonstwo">
                    <button className='primary'>primary</button>
                    <button className='secondry'>Secondery</button>
                    <button className='success'>Success</button>
                    <button className='danger'>Danger</button>
                    <button className='warning'>warning</button>
                    <button className='info'>info</button>
                    <button className='lighte'>Light</button>
                    <button className='dark'>Dark</button>
                </div>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Rounded Buttons</p></div>
                 <div className="bottom">
                    <p className='tops'>Use the <span>.btn-outline-*</span> and <span>.btn-rounded</span> classes together to quickly create bordered buttons with large rounded corners..</p>
                <div className="buttonss buttonsthree">
                    <button className='primary'>primary</button>
                    <button className='secondry'>Secondery</button>
                    <button className='success'>Success</button>
                    <button className='danger'>Danger</button>
                    <button className='warning'>warning</button>
                    <button className='info'>info</button>
                    <button className='light'>Light</button>
                    <button className='dark'>Dark</button>
                    <button className='link'>Link</button>
                </div>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Rounded Outlined Buttons</p></div>
                 <div className="bottom">
                    <p className='tops'>Use the <span>.btn-outline-*</span> and <span>.btn-rounded</span> classes together to quickly create bordered buttons with large rounded corners..</p>
                <div className="buttonss buttonsthree buttonsedit">
                    <button className='primary'>primary</button>
                    <button className='secondry'>Secondery</button>
                    <button className='success'>Success</button>
                    <button className='danger'>Danger</button>
                    <button className='warning'>warning</button>
                    <button className='info'>info</button>
                    <button className='light'>Light</button>
                    <button className='dark'>Dark</button>
                    <button className='link'>Link</button>
                </div>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Button Sizes</p></div>
                 <div className="bottom">
                    <p className='tops'>Add <span>.btn-lg </span>or <span>.btn-sm</span> classes for additional button sizes.</p>
                <div className="buttonss sam">
                    <button className='larg'>Larg</button>
                    <button className='normal'>Normal</button>
                    <button className='small'>Small</button>
                </div>
                 </div>
                </div>
            </div>
            <div className="ri">
            <div className="card">
                <div className="top"><p>Button Icons</p></div>
                 <div className="bottom">
                    <p className='tops'>Add icons to any button or even use Icon-only buttons.</p>
                <div className="buttonss oo">
                    <button className='lovee'><IoMdHeartEmpty/></button>
                    <button className='x'>X</button>
                    <button className='music'><PiMusicNotesSimpleDuotone/></button>
                    <button className='star'><IoIosStar/></button>
                    <button className='like'><AiFillLike/></button>
                    <button className="setting"><IoSettingsOutline/></button>
                    <button className='favor'><FaHeart/> Favorite</button>
                    <button className='launch'><MdLaunch/> Launch</button>
                    <button className='cloudhosting'><IoIosCloud/> Cloud hosting</button>
                </div>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Button Block</p></div>
                 <div className="bottom">
                    <p className='tops'>Create block level buttons, by adding add <span>.btn-block.</span></p>
                <div className="llll">
                    <button className='blok1'>Block Button</button>
                    <button className='blok2'>Block Button</button>
                    <button className='blok3'>Block Button</button>
                </div>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Button Group</p></div>
                 <div className="bottom">
                    <p className='tops'>Create a group of buttons by wrapping with <span>.btn-group.</span></p>
                <div className="diff">
                   <div className="comp">
                    <button>left</button>
                    <button>middle</button>
                    <button>right</button>
                   </div>
                   <div className="comp">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                   </div>
                   <div className="comp">
                    <button>1</button>
                    <button className='twwo'>2</button>
                    <button>3</button>
                    <button>Dropdown</button>
                   </div>
                </div>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Disabled Buttons</p></div>
                 <div className="bottom">
                    <p className='tops'>Add the <span> disabled</span> attribute to disable buttons.</p>
                <div className="buttonss">
                    <button className='info'>info</button>
                    <button className='success'>Success</button>
                    <button className='danger'>Danger</button>
                    <button className="dark">Dark</button>
                </div>
                 </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Button;