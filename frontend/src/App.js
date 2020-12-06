import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <Header />
            <main className='py-3'>
                <Container>
                    <h2>Hello World</h2>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default App;
