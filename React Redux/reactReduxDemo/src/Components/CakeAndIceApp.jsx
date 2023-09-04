import React, { useState } from 'react'
import { addCake, addIce, buyCake, buyIce, buySomeCake } from '../Redux'
import { connect, useDispatch, useSelector } from 'react-redux'

// const mapStateToProps = (state, ownProps) => ({
//     cakeCnt: state.cake.totalCake,
//     iceCnt: state.ice.totalIce
// })

// const mapDispathToProps = (dispatch, ownProps) => ({
//     updateCake_buy: () => dispatch(buyCake()), 
//     updateCake_add: () => dispatch(addCake()), 
//     updateIce_buy: () => dispatch(buyIce()), 
//     updateIce_add: () => dispatch(addIce()) 
// })

function CakeAndIceApp() {
    // const {cakeCnt, iceCnt, updateCake_add, updateCake_buy, updateIce_add, updateIce_buy} = props;

    //Implementing state controlled input:
    const[numInput, setNumInput] = useState(1);

    //implementing using react-redux Hooks...
    const cakeCnt = useSelector(state => state.cake.totalCake);
    const iceCnt = useSelector(state => state.ice.totalIce);

    const dispatch = useDispatch(); 

    const buyMoreCake = () => {
        dispatch(buySomeCake(numInput));
        setNumInput(1);
    }

    //Here, OnClick of Enter, You can buy desired amount of cakes from the store..
    return (
        <div>
            <div>
                <h2>Total Cake Left: {cakeCnt}</h2>
                <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
                <button onClick={()=> dispatch(addCake())}>Add Cake</button>
                <div>
                    <input type="number" 
                           placeholder='Enter number Of Cake'
                           value={numInput}
                           onChange={(evt)=>setNumInput(evt.target.value)} 
                           onKeyDown={(evt)=> ((evt.key === 'Enter') && buyMoreCake())}/>
                    <button onClick={buyMoreCake}>Buy {numInput} Cake</button>
                </div>
            </div>
            <div>
                <h2>Total IceCream Left: {iceCnt} </h2>
                <button onClick={()=>dispatch(buyIce())}>Buy IceCream</button>
                <button onClick={()=>dispatch(addIce())}> Add IceCream</button>
            </div>  
        </div>
    )
}

// export default connect(mapStateToProps, mapDispathToProps)(CakeAndIceApp)
export default CakeAndIceApp