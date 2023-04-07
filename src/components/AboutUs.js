import "./AboutUs.css"

const AboutUs = () => {
    return ( 
        <div className="main">
          {/* <h4 className="Name"> About Us </h4> */}
          <a href="http://localhost:3000/AboutUs" id="AboutUs" to="/AboutUs">
          </a>
          <div className="Divine">
            <div className="col">
               <h1>Divine Protein Ice-cream</h1>
               <h3>Divine Protein Ice-cream. Your daily does of healthy Ice-cream. 
                <br/>
                <h4>
                  Our Ice-cream is for those looking to have a healthy lifestyle. If you any questions please let us know!
                 </h4>
                 
                 </h3>
               <h4 className="list-unstyled">
                 <li>333-3333-1313</li>
                  <li>Texas</li>
                   <li>325 Street</li>
                </h4>
              </div>
           <hr />
         </div>
      </div>
    )
}

export default AboutUs;
