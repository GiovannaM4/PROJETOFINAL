import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Header from "./Components/header/Header"
import Main from "./Components/main/Main"
import Footer from './components/footer/Footer.jsx';
import './GlobalStyle/globalStyle.scss';


export default function App(){
return (
<section>
  <Header/>
  <Main/>
  <Footer/>
</section>
)
}