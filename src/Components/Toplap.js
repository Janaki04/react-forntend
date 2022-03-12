import {  useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Createcontext } from "./Createcontext";
 function Toplap() {
    const [list] = useContext(Createcontext);

   
    let store = useNavigate();
    const product = list.filter((list) => list.category === "Laptop")

    return (
        <div>
             <h1 className='lap'>TopBrands/Laptops</h1>
           <div className='lapbox'>
               {product.filter((value) => value.price >= 60000).map((items) => {
                    return (
                        <div className='lapcard' onClick={() => store(`/Laptops`)}>

                            <img className='lapimage' src={items.imageurl} alt=""/>
                            <h1 className='lapname'> {items.name}</h1>


                        </div>


                    )

                })}

            </div>

        </div>
    )
}

export default Toplap