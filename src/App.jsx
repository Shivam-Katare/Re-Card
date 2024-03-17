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
      <div className='w-full grid justify-items-center items-center grid-cols-[0.09fr_0.8fr]'>
      <Sidebar />
        <h1 className="bad-script-regular text-white font-extrabold cursor-pointer text-[42px] mt-[24px]">Re-Card</h1>
      </div> 
      <TextInput username={username} onChange={handleUserNameChange} handleGenerateCard={handleGenerateCard} />
      <div className="relative mt-4 w-fit h-screen p-[29px] self-stretch overflow-hidden rounded-32 grid place-items-center grid-rows-[0.6fr_0.1fr] card-container">
        {userData.username ? <CardsContainer userData={userData} /> : <p className='text-white font-extrabold text-[16px] text-center'>For optimal performance, please adjust your screen size to less than 1200px.<br /> You can do this by pressing `Ctrl` and `-` (minus) to scale down your display for enhanced results. 🖥️✨</p>}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
