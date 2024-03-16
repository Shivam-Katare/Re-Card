import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import useStore from './store';
import TextInput from './components/TextInput/TextInput';
import CardsContainer from './components/CardsContainer';
import { Sidebar } from './components/Drawer/Drawer';

function App() {

const userData = useStore(state => state.userData);
const [username, setUsername] = useState('');

const fetchUserData = useStore(state => state.fetchUserData);

useEffect(() => {
  handleGenerateCard();
}, [fetchUserData]);

const handleUserNameChange = (e) => {
  setUsername(e.target.value);
}

const handleGenerateCard = () => {
  fetchUserData(username);
}

if (!userData) {
  return <div className='grid justify-items-center items-center w-full'>
    <span className="loading loading-dots loading-lg"></span>
  </div>;
}

  return (
    <div className="App w-full grid justify-items-center">
      <Sidebar />
      <TextInput username={username} onChange={handleUserNameChange} handleGenerateCard={handleGenerateCard} />
      <div className="relative mt-4 w-fit h-screen p-[29px] self-stretch overflow-hidden rounded-32 grid place-items-center grid-rows-[0.6fr_0.1fr] card-container">
        {userData.username ? <CardsContainer userData={userData} /> : <p className='text-white font-extrabold text-[16px]'>Enter your Hashnode username (e.g. 'JohnDoe'). Note: Username is case sensitive.</p>}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
