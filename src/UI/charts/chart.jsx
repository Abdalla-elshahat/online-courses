import './chart.css'
import 'charts.css';
import { BsThreeDots } from "react-icons/bs";

import App from '../../googlechart/googlechart';
function Chart(){
    return(
        <>
         <div className="chart">
                <h2 className="earnh">Charts</h2>
<div className="tops">
<div className="card">
        <div className="to">
                <span className='inf'>
                    <h2>Line</h2>
                    <p>A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.</p>
                </span>
                <App/>
            </div>
            <div className="bottomdashins">
                        <div className="mony">
                        </div>
                    </div>
        </div>
        <div className="card">
            <div className="to">
                <span className='inf'>
                    <h2>Doughnut</h2>
                    <p>Excellent at showing the relational proportions between data.</p>
                </span>
            </div>
            <div className="botme">
            <figure class="chart-three animate">
	<svg role="img" xmlns="http://www.w3.org/2000/svg">
		<title>[title here]</title>
		<desc>[long description here]</desc>
		<circle class="circle-background"/>
		<circle class="circle-foreground"/>
	</svg>
	<figcaption>75% of all males like donuts.</figcaption>
</figure>

            </div>
    </div>
        <div className="card cardbar">
        <div className="to">
                <span className='inf'>
                    <h2>Bar</h2>
                    <p>A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.</p>
                </span>
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
        <div className="card cardbar">
        <h2>Switch Toggle</h2>
        <div className="to">
                <span className='inf'>
                    <p>Easily toggle an additional set of data with a simple interface based on the data attributes.</p>
                </span>
                <span><p>Show affiliate</p>
<label class="switch">
  <input type="checkbox" className='vv' onClick={(e)=>{
     let x= document.querySelectorAll(".g");
    if(e.target.checked){
        x.forEach((e)=>{
            e.style.display="block"
        })
    }
    else{
        x.forEach((e)=>{
          e.style.display="none"
        })
    }
  }}/>
  <span class="slider round"></span>
</label></span>
            </div>
            <div className="bottomdashins">
                        <div className="mony">
                            <span>$30K</span>
                            <span>$20K</span>
                            <span>$20K</span>
                            <span>$0K</span>
                        </div>
                        <div className="pres">
                            <span> <span className='g'></span>Jan</span>
                            <span><span className='g'></span>Feb</span>
                            <span><span className='g'></span>Mar</span>
                            <span><span className='g'></span>Apr</span>
                            <span><span className='g'></span>May</span>
                            <span><span className='g'></span>Jun</span>
                            <span><span className='g'></span>Jul</span>
                            <span><span className='g'></span>Aug</span>
                            <span><span className='g'></span>sep</span>
                            <span><span className='g'></span>oct</span>
                            <span><span className='g'></span>Nov</span>
                            <span><span className='g'></span>Des</span>
                        </div>
                    </div>
        </div>

        </div>
    </div>
        </>
    )
}
export default Chart;