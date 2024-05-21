import './takequiz.css'
import { FaArrowRight } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
function Takequiz(){
    return(
        <>
        <div className="serice courses takequiz">
        <div className="tops">
            <div className="quizloc">
            <h2 className="serich">Final Quiz</h2>
                <p><FaGraduationCap/> Getting Started with InVision</p>
            </div>
                <span className='Goto'>Back to Course <FaArrowRight/></span>
                    </div>
                    <div className="upgrade upgradequiz">
                    <div className="left">
                   < TbExclamationMark className='icon'/>
                    <p className="upgradeh2">You have <span>5 days left </span>on our subscription</p>
                    </div>
                </div>
                <div className="safl">
                    <div className="card">
                        <div className="t">
                        <p><span>#9</span> Github command to deploy comits?</p>
                        </div>
                        <form > <div className="m">
                            <div className="blo">
                            <input type="checkbox" id='push' />
                            <label htmlFor="push">git push</label>
                            </div>
                            <div className="blo">
                            <input type="checkbox" id='pull' />
                            <label htmlFor="pull">git pull</label>
                            </div>
                            <div className="blo">
                            <input type="checkbox" id='commit' />
                            <label htmlFor="commit">git commit -m "message"</label>
                            </div>
                        </div>
                      
                        <div className="b">
                            <span className='skip'>Skip</span>
                            <span className='Goto'>Submit <FaArrowRight/></span>
                        </div>
                        </form>
                    </div>
                    <div className="card">
                        <div className="bloktr">
                          <p><span>#9</span>Github command to deploy comits?</p>
                        </div>
                        <div className="bloktr">
                          <p><span>#10</span>Github command to deploy comits?</p>
                        </div>
                         <div className="bloktr">
                          <p><span>#11</span>Github command to deploy comits?</p>
                        </div>
                        <div className="bloktr">
                          <p><span>#12</span>Github command to deploy comits?</p>
                        </div> 
                        <div className="bloktr">
                          <p><span>#13</span>Github command to deploy comits?</p>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Takequiz;