import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import TakeNote1 from '../../Components/TakeNote1/TakeNote1'
import TakeNote2 from '../../Components/TakeNote2/TakeNote2'

function DashBoard() {
    const [toggle, setToggle] = useState(false)

    const openTakeNote2 =() => {
        setToggle (true)
    }
    const closeTakeNote2=()=>{
        setToggle(false)
    }
    
     return (
        <div>
            <Header />
            <div>
                {
                    toggle ? <TakeNote2 closeTakeNote2= {closeTakeNote2}/> : <TakeNote1 openTakeNote2 ={openTakeNote2} />
                }
            </div>
        </div>
    )
}

export default DashBoard
