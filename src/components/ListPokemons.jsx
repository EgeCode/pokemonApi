import React from "react";
import InputSearch from "./InputSearch";
import {
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Button,
    Stack,
    Box,
    Heading
} from "@chakra-ui/react";

export default function ListPokemons({ pokemons, filtro, onchange, showDetail }) {

    const rows = [];

    pokemons.forEach((pokemon, index) => {
        if ((pokemon.name.toLowerCase().indexOf(filtro.toLowerCase()) === -1)) {
            return;
        }

        rows.push(
            <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{pokemon.name.toUpperCase()}</Td>
                <Td>
                    <Button onClick={() => showDetail(index + 1)} size="xs">select</Button>
                </Td>
            </Tr>,
        );
    });

    return (

        <Stack>
            <Box bg='tomato' w='100%' p={4} mt={4} color='white' borderRadius="5px">
                <Heading>List of pokemons</Heading>
            </Box>
            <InputSearch filtro={filtro} onchange={onchange} />
            <TableContainer>
                <Table variant='simple' size="sm">
                    <TableCaption>List of pokemons 2023</TableCaption>
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