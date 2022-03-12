import {  useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Createcontext } from "./Createcontext";
 function Topfas() {
    const [list] = useContext(Createcontext);

   
    let store = useNavigate();
    const product = list.filter((list) => list.category === "Fashion")

    return (
        <div>
             <h1 className='lap'>TopBrands/Fashion</h1>
           <div className='fasbox'>
               {product.filter((value) => value.price >= 1000).map((items) => {
                    return (
                        <div className='fascard' onClick={() => store(`/Fashion`)}>

                            <img className='fasimage' src={items.imageurl} alt=""/>
                            <h1 className='fasname'> {items.name}</h1>


                        </div>


                    )

                })}

            </div>

        </div>
    )
}

export default Topfas