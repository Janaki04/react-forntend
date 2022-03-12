import { useState, useContext } from 'react'
import {useNavigate } from 'react-router-dom';
import { Createcontext } from "./Createcontext";

 function Mobiles() {
    
    const [list] = useContext(Createcontext);

    const [load] = useState(true);
    let store = useNavigate();
    const product = list.filter((data) => data.category === "Mobile")

    return (
        <div>
            <div className='box'>
                {
                    product.filter((value) => load && value.category).map((items) => {
                        return (
                            <div className='card' onClick={()=>store(`/category/${items.Id}`)}>
                                <img className='image' src={items.imageurl} alt='' />
                                <div className='space'>
                                    <p className='name'> {items.name}</p>
                                    <p className='price'>{"Rs."+items.price}</p>
                                    <button className='cart'>Add to Cart</button>
                                </div>
                                </div>
                        )
                    })
                }
            </div>
            </div>
            )
}
export default Mobiles