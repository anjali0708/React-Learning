import React, { useState } from 'react';
import './App.css';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
  const [ isModalVisible, setModalVisible ] = useState(true);

  const hideModal = () => {
    setModalVisible(false);
  }

  const showModal = () => {
    setModalVisible(true);
  }

  return (
    <>
    <MainHeader onCreatePost={showModal}/>
    <main>
      <PostsList isModalVisible={isModalVisible} onHideModal={hideModal}/>
    </main>
    </>
  );
}

export default App;
