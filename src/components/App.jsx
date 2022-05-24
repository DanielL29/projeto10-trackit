import { useLocation } from 'react-router-dom';
import Router from '../components/Router';
import { UserProvider } from '../context/UserContext';
import { GlobalStyle } from './../assets/global/GlobalStyle';
import Footer from './footer/Footer';
import Header from './header/Header';

export default function App() {
    const location = useLocation()
    const isLogin = location.pathname !== '/' && location.pathname !== '/cadastro' ? true : false

    return (
        <UserProvider>
            <GlobalStyle isLogin={isLogin} />
            {isLogin ? <Header /> : ''}
            <Router />
            {isLogin ? <Footer /> : ''}
        </UserProvider>
    )
}