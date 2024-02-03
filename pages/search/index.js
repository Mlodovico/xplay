
import { useEffect, useState } from "react";
import Image from "next/image"

import { Container, SearchInput, SearchInputContainer, Button } from "./styles";

import SearchInpuIcon from "../../public/search_input_icon.svg"
import CloseIcon from "../../public/close_icon.svg"

export default function Search() {
    const [search, setSearch] = useState('')

    useEffect(() => {
        handleSearch(search)
    }, [search])

    const handleSearch = (search) => {    
        console.log(search)
        //chamar rota filtrada
    }

    return (
        <Container>
            <SearchInputContainer>
            <Image src={SearchInpuIcon} />
            <SearchInput
                type="text"
                placeholder="Pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            <Button onClick={() => setSearch('')}>
            <Image src={CloseIcon} />

            </Button>
                </SearchInputContainer>
       </Container>
    )
}