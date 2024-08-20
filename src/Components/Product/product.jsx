import React from 'react'
import './product.css'
import k2404404 from '../../assets/k2404404.jpg' 
import k4404404 from '../../assets/k4404404.jpg' 
import k5404404 from '../../assets/k5404404.jpg' 
import k6404404 from '../../assets/k6404404.jpg' 
import k7404404 from '../../assets/k7404404.jpg'
import k8404404 from '../../assets/k8404404.jpg'
import k9404404 from '../../assets/k9404404.jpg'
import k10404404 from '../../assets/k10404404.jpg'
import k11404404 from '../../assets/k11404404.jpg'
import k13404404 from '../../assets/k13404404.jpg'
import necklace2 from '../../assets/necklace2.jpg'
import necklace2300300 from '../../assets/necklace2300300.jpg'
import necklace1300300 from '../../assets/necklace1300300.jpg'
import necklace3300300 from '../../assets/necklace3300300.jpg'

const product = () => {
  return (
    <div>
      <div className='Feature'>
        <h2>FEATURE PRODUCT</h2>
      </div>
                                        {/* Product items section */}
        
        <section>
        <div className='parent8'>
          <div>
            <img src={k7404404} alt='Rings'></img>
            <pre>Gold-Plated Pearl Drop Earrings</pre>
            <p>$179.99</p>
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
          <div>
            <img src={k2404404} alt='Rings'></img>
            <pre>Double Wave Hoop Earings</pre>
            <p>$53.75</p>
          </div>
          {/* <div>
            <img src={k4404404} alt='Rings'></img>
            <pre>Circle Charm Necklace with Diamonds</pre>
            <p>$38.24</p>
          </div>  */}
          </div>

          <div className='parent9'>
          <div>
            <img src={k9404404} alt='Rings'></img>
            <pre>Twisted Rope Bracelet</pre>
            <p>$38.24</p>
          </div>
          <div>
            <img src={k10404404} alt='Rings'></img>
            <pre>London Charm Bracelet</pre>
            <p>$167.99</p>
          </div>
          <div>
            <img src={k11404404} alt='Rings'></img>
            <pre>Gold-plated Pearl Necklace</pre>
            <p>$52.76</p>
          </div>
          <div>
            <img src={k13404404} alt='Rings'></img>
            <pre>Stone Short Drop Earrings</pre>
            <p>$149.99</p>
          </div>
          {/* <div>
            <img src={k8404404} alt='Rings'></img>
            <pre>Pearl Drop Stud Set of Two</pre>
            <p>$69.75</p>
          </div> */}
          </div>
      </section>

                                              {/* Necklaces items section */}

      <section>
        <div className='parent10'>
            <img src={necklace2} alt='necklace2'></img>
          <div className='child101'>
           <h2 className='child102'>Necklaces and <br/>Pendants for Women</h2>
           <p className='child103'>NOW ONLY $7-LIMITED TIME ONLY</p>
           <button className='child104'>SHOP NOW</button>
        </div>
        </div>
        <div className='Images'>
          <img src={necklace1300300} alt='necklace1300300' id='images' ></img>
          <img src={necklace2300300} alt='necklace2300300' id='images' ></img>
          <img src={necklace3300300} alt='necklace3300300' id='images' ></img>
        </div>
        
        </section>

    </div>
    
  )
}

export default product
