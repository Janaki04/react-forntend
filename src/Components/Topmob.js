import {  useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Createcontext } from "./Createcontext";
 function Topmob() {
    const [list] = useContext(Createcontext);

   
    let store = useNavigate();
    const product = list.filter((list) => list.category === "Mobile")

    return (
        <div>
             <h1 className='lap'>TopBrands/Mobiles</h1>
           <div className='mobbox'>
               {product.filter((value) => value.price >= 30000).map((items) => {
                    return (
                        <div className='mobcard' onClick={() => store(`/Mobiles`)}>

                            <img className='mobimage' src={items.imageurl} alt=""/>
                            <h1 className='mobname'> {items.name}</h1>


                        </div>


                    )

                })}

            </div>

        </div>
    )
}

export default Topmob