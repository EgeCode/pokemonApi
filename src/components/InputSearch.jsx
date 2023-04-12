import React from 'react'
import { Input } from "@chakra-ui/react"


export default function InputSearch({ filtro, onchange }) {
    return (
        <>
            <Input id='filter' placeholder='Write the name of the pokemon here for search' my={3} value={filtro} onChange={(e) => onchange(e.target.value)} autoFocus/>
        </>
    )
}
