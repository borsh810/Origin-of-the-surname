import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Main from './components/Header/Header';
import Search from './components/Search/Search'

const App = () => {
	return (
      <>
        <Main></Main>
        <Search></Search>
        <Footer></Footer>
      </>
  );
}
export default App;
