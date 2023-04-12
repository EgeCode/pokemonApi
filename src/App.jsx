import React, { useState, useEffect } from 'react'
import ListPokemons from './components/ListPokemons';
import {
    ChakraProvider,
    Stack,
    Container,
    Heading,
    Text,
    Card,
    CardBody,
    CardFooter,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Image

} from '@chakra-ui/react'





function App() {

    //estados
    const [pokemon, setPokemon] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [filtro, setFiltro] = useState('');

    //API general
    const API = 'https://pokeapi.co/api/v2/pokemon';

    //get pokemons from API fuction
    const fetchPokemons = async () => {
        const response = await fetch(API + '?limit=100000&offset=0')
        const data = await response.json()

        setPokemons(data.results)

    }

    const showDetail = async (idPokemon) => {

        const response = await fetch(API + '/' + idPokemon)
        const data = await response.json()

        setPokemon(data)
    }

    //use hook useEffect
    useEffect(() => {
        fetchPokemons()
    }, [])

    return (

        <ChakraProvider>
            <Container maxW='720px'>
                {pokemon == '' ?
                    <>
                        <Box bg='tomato' w='100%' p={4} mt={4} color='white' borderRadius="5px">
                            <Heading>List of pokemons</Heading>
                        </Box>
                        <ListPokemons pokemons={pokemons} filtro={filtro} onchange={setFiltro} showDetail={showDetail} />
                    </>
                    : <>
                        <Box bg='tomato' w='100%' p={4} mt={4} color='white' borderRadius="5px">
                            <Heading>Details</Heading>
                        </Box>
                        <Card p="20px" mt="25px">
                            <Heading size='md'>{'#' + pokemon.id + ' .- ' + pokemon.name.toUpperCase()}</Heading>
                            <Stack direction="row">
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                />

                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                />
                            </Stack>

                            <Stack>
                                <CardBody>
                                    <Text>
                                        <strong>Type: </strong> {pokemon.types[0].type.name.toUpperCase()}
                                    </Text>
                                    <Text>
                                        <strong>Heigth: </strong> {pokemon.height}
                                    </Text>
                                    <Text>
                                        <strong>Weight: </strong> {pokemon.weight}
                                    </Text>
                                    <Accordion allowMultiple>
                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <strong>Abilities: </strong> {pokemon.abilities.length}
                                                </Box>
                                                <AccordionIcon />

                                            </AccordionButton>
                                            <AccordionPanel>
                                                <ul>
                                                    {pokemon.abilities.map((a) =>
                                                        <li>{a.ability.name.toUpperCase()}</li>
                                                    )}
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </CardBody>
                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue' onClick={() => setPokemon('')}>
                                        {"<<"} Atras
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </>}

            </Container>
        </ChakraProvider>

    )
}
export default App
