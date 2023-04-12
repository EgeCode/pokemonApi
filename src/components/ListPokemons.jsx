import React from "react";
import InputSearch from "./InputSearch";
import { TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Button,
    Stack,
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