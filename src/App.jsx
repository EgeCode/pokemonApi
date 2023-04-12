import React, { useState, useEffect } from 'react'
import ListPokemons from './components/ListPokemons';
import PokemonsDetail from './components/PokemonsDetail';
import {
    ChakraProvider,
    Container,
} from '@chakra-ui/react'

function App() {
    
    //props and states
    const [pokemon, setPokemon] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [filtro, setFiltro] = useState('');

    //API URL basic
    const API = 'https://pokeapi.co/api/v2/pokemon';

    //get pokemons from API fuction
    const fetchPokemons = async () => {

        const response = await fetch(API + '?limit=100000&offset=0')
        const data = await response.json()

        setPokemons(data.results)

    }

    //show detail of pokemon 
    const showDetail = async (idPokemon) => {

        const response = await fetch(API + '/' + idPokemon)
        const data = await response.json()

        setPokemon(data)
    }

    //back to list 
    const backPage = () =>{

        setPokemon('')
    }

    //hook useEffect
    useEffect(() => {
        fetchPokemons()
    }, [])

    return (

        <ChakraProvider>
            <Container maxW='720px'>
                { pokemon == '' ?
                    <> 
                        <ListPokemons pokemons={pokemons} filtro={filtro} onchange={setFiltro} showDetail={showDetail} />
                    </>
                    : <>
                        <PokemonsDetail pokemon={pokemon} backPage={backPage} />
                    </>
                }
            </Container>
        </ChakraProvider>
    )
} 
export default App
