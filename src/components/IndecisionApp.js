import React from 'react';

import Header from './components/Header';
import Action from './components/Action';
import AddOption from './components/AddOption';
import Options from './components/Options';
import OptionModal from './components/OptionModal';

const IndecisionApp = () => {
  const subtitle = 'Put your life in the hands of computer';
  return (
    <div>
      <Header subtitle={subtitle} />
      <div className="container">
        <Action />
        <div className="widget">
          <Options />
          <AddOption />
        </div>
      </div>
      <OptionModal />
    </div>
  );
};

export default IndecisionApp;
