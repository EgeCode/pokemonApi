import React from "react";
import  {
    Box,
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
    Image,
    Heading,
    Stack
} from '@chakra-ui/react'


export default function PokemonsDetail ({pokemon, backPage}) {

    return (
        <>
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
                        <Button variant='solid' colorScheme='blue' onClick={()=>backPage()}  >
                            {"<<"} Atras
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}