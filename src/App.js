import React, {useState} from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Password from './Password/Password';
import Finish from './Finish/Finish';

function App(props) {
  const [currentPage, setPage] = useState(props.page);
  const [userData, setUserData] = useState({});

  function handleSubmit(nextPage, data) {
    setPage(nextPage);
    setUserData(Object.assign(userData, data));
  }

  function getContent() {
    let content;
    if (currentPage === 1) content = <PersonalInfo onSubmit={handleSubmit} />;
    if (currentPage === 2) content = <Password onSubmit={handleSubmit} />;
    if (currentPage === 3) content = <Finish userData={userData}/>
    return content;
  }

  return (
    <div className="App">
      {getContent()}
    </div>
  );
}

export default App;
