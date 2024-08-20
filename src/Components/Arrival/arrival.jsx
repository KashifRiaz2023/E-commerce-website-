import React from 'react'
import './arrival.css'
import k2404404 from '../../assets/k2404404.jpg' 
import k4404404 from '../../assets/k4404404.jpg'
import k5404404 from '../../assets/k5404404.jpg'
import k6404404 from '../../assets/k6404404.jpg'
// import k7404404 from '../../assets/k7404404.jpg'
// import k8404404 from '../../assets/k8404404.jpg'
import Ringsontable from '../../assets/Ringsontable.jpg'

const tk = () => {
  return (
    <div>
                                          {/* Heading Section */}
      <section>
        <div className='parent7'>
        <h2>NEW ARRIVALS</h2>
        </div>
      </section>

                                          {/* Items Section */}
      <section>
        <div className='parent8'>
          <div>
            <img src={k2404404} alt='Rings'></img>
            <pre>Double Wave Hoop Earings</pre>
            <p>$53.75</p>
          </div>
          <div>
            <img src={k4404404} alt='Rings'></img>
            <pre>Circle Charm Necklace with Diamonds</pre>
            <p>$38.24</p>
          </div> 
          <div>
            <img src={k5404404} alt='Rings'></img>
            <pre>Leaf Short Drop Earrings</pre>
            <p>$35.38</p>
          </div>
          <div>
            <img src={k6404404} alt='Rings'></img>
            <pre>Stacking Rings 5 Pack</pre>
            <p>$38.24</p>
          </div>
          {/* <div>
            <img src={k7404404} alt='Rings'></img>
            <pre>Gold-Plated Pearl Drop Earrings</pre>
            <p>$179.99</p>
          </div>
          <div>
            <img src={k8404404} alt='Rings'></img>
            <pre>Pearl Drop Stud Set of Two</pre>
            <p>$69.75</p>
          </div> */}
        </div>
      </section>

                                       {/* Pic with button Section */}

      <section className="parent9">
         <div className="fixed-background">
         <div className="child91">
           <h2>The Latest Look</h2>
           <pre>New arrivals have hit the site.
           <br></br>Shop them all before they all sell out!</pre>
           <button>SHOP NEW ARRIVALS</button>
         </div> 
         </div>

      </section>
    </div>
  )
}

export default tk
