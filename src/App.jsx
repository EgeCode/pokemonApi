import React, { useState, useEffect } from 'react'
import {
    ChakraProvider,
    Input,
    Stack,
    Container,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Link
} from '@chakra-ui/react'



function InputSearch({ filtro, onchange }) {
    return (
        <>
            <label htmlFor="filter">Buscar</label>
            <Input id='filter' placeholder='Escribe el nombre de tu pokemon aquí' my={3} value={filtro} onChange={(e) => onchange(e.target.value)} />
        </>
    )
}

function ListPokemons({ pokemons, filtro, onchange }) {

    const rows = [];
    
    // pokemons.forEach((pokemon,index) => {
    //     if (pokemon.name.toLowerCase().indexOf(filtro.toLowerCase()) === -1) {
    //         return;
    //     }

    //     rows.push(
    //         <Tr key={index}>
    //             <Td>{index +1}</Td>
    //             <Td>{pokemon.name.toUpperCase()}</Td>
    //         </Tr>,
    //     );
    // });

    return (
        
        <Stack>
            <Heading>Busca</Heading>
            <InputSearch filtro={filtro} onchange={onchange} />
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Listado de Pokemons 2023</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Nombre</Th>
                            <Th>Seleccionar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {rows}
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    )
}


function App() {

    const [pokemons, setPokemons] = useState([]);
    const [filtro, setFiltro] = useState('')
    const fetchPokemons = () =>{

        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setPokemons(data)
          })
    }

    useEffect(() => {
        fetchPokemons()
      }, [])


    // const pokemons = [
    //     {
    //         name: "bulbasaur",
    //         url: "https://pokeapi.co/api/v2/pokemon/1/"
    //     },
    //     {
    //         name: "ivysaur",
    //         url: "https://pokeapi.co/api/v2/pokemon/2/"
    //     },
    //     {
    //         name: "venusaur",
    //         url: "https://pokeapi.co/api/v2/pokemon/3/"
    //     },
    //     {
    //         name: "charmander",
    //         url: "https://pokeapi.co/api/v2/pokemon/4/"
    //     },
    //     {
    //         name: "charmeleon",
    //         url: "https://pokeapi.co/api/v2/pokemon/5/"
    //     },
    //     {
    //         name: "charizard",
    //         url: "https://pokeapi.co/api/v2/pokemon/6/"
    //     },
    //     {
    //         name: "squirtle",
    //         url: "https://pokeapi.co/api/v2/pokemon/7/"
    //     }
    // ];

    


    return (

        <ChakraProvider>
            <Container maxW='1200px'>
                <ListPokemons pokemons={pokemons} filtro={filtro} onchange={setFiltro} />
            </Container>
        </ChakraProvider>

    )
}
export default App
