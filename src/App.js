import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header'
import Routes from './config/Routes';

function App() {
  return (
    <BrowserRouter>
      <Route  render={props => (
        <>
          <Header />
          <Routes/>
        </>
      )} />
    </BrowserRouter>
    
  );
}


export default App;
