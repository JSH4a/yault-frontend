import './App.css';

import Header from './components/Header';
import CardList from './components/CardList';

import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getCards } from './api/CardService';

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const getAllCards = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const { data } = await(getCards(page, size));
      setData(data);
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }

  const toggleModal = (show) => {
    console.log("Clicked");
  }

  useEffect(() => {
    getAllCards();
  }, [])

  return (
    <>
    <Header toggleModal={toggleModal} numberOfCards={data.totalElements}/>
    <main className='main'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Navigate to={'/cards'}/>} />
          <Route path="/cards" element={<CardList data={data} currentPage={currentPage} getAllCards={getAllCards}/>} />
        </Routes>
      </div>
    </main>
    </>
  );
}

export default App;
