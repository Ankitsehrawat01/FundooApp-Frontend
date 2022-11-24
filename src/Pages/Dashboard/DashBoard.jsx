import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import TakeNote1 from '../../Components/TakeNote1/TakeNote1'
import TakeNote2 from '../../Components/TakeNote2/TakeNote2'
import TakeNote3 from '../../Components/TakeNote3/TakeNote3'
import { retriveNoteAPI } from '../Services/dataService'

function DashBoard() {
    const [toggle, setToggle] = useState(false)
    const [dataArray, setDataArray] = useState([])

    const openTakeNote2 =() => {
        setToggle (true)
    }
    const closeTakeNote2=()=>{
        setToggle(false)
    }
    const getNote = () => {
        retriveNoteAPI()
        .then((response)=>{console.log(response)
            setDataArray(response.data.data)
        })
         .catch((error)=>{console.log(error)})
         console.log("Notes List Retrived")
    }

    useEffect(() => {
        getNote()
    },[])
     return (
        <div>
            <Header />
            <div>
                {/* conditional rendering*/}
                {
                    toggle ? <TakeNote2 closeTakeNote2= {closeTakeNote2}/> : <TakeNote1 openTakeNote2 ={openTakeNote2} />
                }
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '65vw', position: 'relative', left:'20%'}}>
                    {/*  list rendering to retrive our all notes array*/}
                    {
                        dataArray.map((note) => (<TakeNote3 note= {note} getNote={getNote} />))
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard
