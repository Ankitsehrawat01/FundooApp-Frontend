import { makeStyles } from '@mui/styles'
import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Headermui from '../../Components/Header/Headermui'
import MiniDrawer from '../../Components/MiniDrawer/Drawer'
import TakeNote1 from '../../Components/TakeNote1/TakeNote1'
import TakeNote2 from '../../Components/TakeNote2/TakeNote2'
import TakeNote3 from '../../Components/TakeNote3/TakeNote3'
import { retriveNoteAPI } from '../Services/dataService'

const useStyle = makeStyles({
    listren: {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        width: '70vw', 
        position: 'relative', 
        left:'280px',
        height: 'auto'
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        listren: {
            left: '70px',
            width: '80vw'
        }
    },

    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        listren: {
            left: '70px',
            width: '100vw'
        }

    },

    ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
        listren: {
            left: '80px',
            width: '100vw'
        }
    },

})

function DashBoard() {

    const classes5 = useStyle()

    const [toggle, setToggle] = useState(false)
    const [dataArray, setDataArray] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [noteChoice, setNoteChoice] = useState("Notes")

    const openTakeNote2 =() => {
        setToggle (true)
    }
    const closeTakeNote2=()=>{
        setToggle(false)
    }
    const autoRefresh= () =>{
        getNote()
    }
    const getNote = () => {
        retriveNoteAPI()
        .then((response)=>{console.log(response)
            let filterNotes = []
            if(noteChoice==="Notes")
            {
                filterNotes= response.data.data.filter((notes)=>{
                    if(notes.archive===false && notes.trash===false)
                    {
                        return notes
                    }
                })
            }
            else if(noteChoice==="Archive")
            {
                filterNotes= response.data.data.filter((notes)=>{
                    if(notes.archive===true && notes.trash===false)
                    {
                        return notes
                    }
                })
            }
            else if(noteChoice==="Trash")
            {
                filterNotes= response.data.data.filter((notes)=>{
                    if(notes.archive===false && notes.trash===true)
                    {
                        return notes
                    }
                })

            }
            setDataArray(filterNotes)
        })
         .catch((error)=>{console.log(error)})
         console.log("Notes List Retrived")
    }
    const headerDrawer = () => {
        setDrawerToggle(!drawerToggle)
    }
    const headerDrwaer1 =(option) => {
        setNoteChoice(option)
    }

    useEffect(() => {
        getNote()
    },[noteChoice])
     return (
        <div>
            {/* <Header headerDrawer= {headerDrawer}/> */}
            <Headermui headerDrawer= {headerDrawer}/>
            <MiniDrawer drawerToggle={drawerToggle} headerDrwaer1={headerDrwaer1}/>
            <div>
                {/* conditional rendering*/}
                {
                    toggle ? <TakeNote2 autoRefresh={autoRefresh} closeTakeNote2= {closeTakeNote2}/> : <TakeNote1 openTakeNote2 ={openTakeNote2} />
                }
                <div className={classes5.listren}>
                    {/*  list rendering to retrive our all notes array*/}
                    {
                        dataArray.map((note) => (<TakeNote3 note= {note} autoRefresh={autoRefresh} getNote={getNote} />))
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard
