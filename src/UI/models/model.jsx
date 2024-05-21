import './model.css'
function Model(){
    return(
        <>
           <div className="buttons">
            <h2 className="b">Modals</h2>
        <div className="botb">
            <div className="le">
                <div className="card">
                <div className="top"><p>Bootstrap</p></div>
                 <div className="bottom">
                 <p className='tops'>A rendered modal with header, body, and set of actions in the footer.</p>
                <div className="buttonss">
                    <button className='primary'>Standerd</button>
                    <button className='secondry'>Larg model</button>
                    <button className='success'>small model</button>
                    <button className='danger'>Danger</button>
                </div>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Alerts</p></div>
                 <div className="bottom">
                 <p className='tops'>Show different contexual alert messages using modal component.</p>
                <div className="buttonss">
                    <button className='primary'>Success</button>
                    <button className='secondry'>info Alerts</button>
                    <button className='success'>warning ALert</button>
                    <button className='danger'>Error Alert</button>
                </div>
                 </div>
                </div>
            </div>
            <div className="ri">
            <div className="card">
                <div className="top"><p>Pages</p></div>
                 <div className="bottom">
                 <p className='tops'>Examples of modals with custom content.</p>
                <div className="buttonss">
                    <button className='primary'>Sign up model</button>
                    <button className='secondry'>Login model</button>
                </div>
                 </div>
                </div>
                <div className="card">
                <div className="top"><p>Vertically Centered</p></div>
                 <div className="bottom">
                 <p className='tops'>By default, modals will be positioned at the top of the page, but you can change this to vertically centered by adding the .modal-dialog-centered class to the <span>&lt;div class="modal-dialog"&gt;...&lt;/div&gt;</span> element.</p>
                <div className="buttonss">
                    <button className='primary'>Vertically centered modal</button>
                </div>
                 </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Model;