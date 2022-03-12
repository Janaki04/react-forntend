import { useState, useContext } from 'react'
import {useNavigate } from 'react-router-dom';
import { Createcontext } from "./Createcontext";

 function Fashion() {
    
    const [list] = useContext(Createcontext);

    const [load] = useState(true);
    let store = useNavigate();
    const product = list.filter((data) => data.category === "Fashion")

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
                                    <button className='cart'>Add Cart</button>
                                </div>
                                </div>
                        )
                    })
                }
            </div>
            </div>
            )
}

export default Fashion