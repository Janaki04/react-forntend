import {  useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Createcontext } from "./Createcontext";
 function Topaccs() {
    const [list] = useContext(Createcontext);

   
    let store = useNavigate();
    const product = list.filter((list) => list.category === "Accesories")

    return (
        <div>
             <h1 className='lap'>TopBrands/Accesories</h1>
           <div className='accsbox'>
               {product.filter((value) => value.price >= 1000).map((items) => {
                    return (
                        <div className='accscard' onClick={() => store(`/Accesories`)}>

                            <img className='accsimage' src={items.imageurl} alt=""/>
                            <h1 className='accsname'> {items.name}</h1>


                        </div>


                    )

                })}

            </div>

        </div>
    )
}

export default Topaccs