import axios from "axios"
import { useEffect } from "react"
import styled from "styled-components"


export default function SectionProducts
(){

    useEffect(()=>{
        const promisse = axios.get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1")
    },[])
    return(
        <>
        </>
    )
}