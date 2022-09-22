import logo from './logo.svg';
import { NavBar } from './ui/NavBar';
import { Container } from './pricesReader/Container';
import { Footer } from './ui/Footer';
import { TasaProvider } from './context/TasaProvider';

function App() {
  return (<>
    <NavBar/>

    <TasaProvider>
      <Container/>
    </TasaProvider>
    <Footer/>
  </>);
}

export default App;
