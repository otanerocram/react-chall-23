import React from 'react'
import { Redirect } from "react-router-dom"

function PlanForm({authorized}) {

    if(!authorized){
        return <Redirect to="/" />
    }

    const placa = localStorage.getItem("placa")
    const nombre = localStorage.getItem("nombre")

    console.log(placa)
    console.log(nombre)
    

    return (
        <div>
            <h1>Plan form</h1>  
        </div>
    )
}

export default PlanForm
