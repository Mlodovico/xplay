
import { Container, Button } from './styles'
import Link from 'next/link';


export const MenuBar = () => {
    return (
        <Container>
            <Button>
                <Link href='/home'>
                    Home
                </Link>
            </Button>
            <Button>
                <Link href='/search'>
                    Search
                </Link>
            </Button>
            <Button>
                <Link href='/library'>
                    Library
                </Link>
            </Button>
            <Button>
                <Link href='/config'>
                    Config
                </Link>
            </Button>
        </Container>
    )
}