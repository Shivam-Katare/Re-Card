import React, { useEffect, useRef, useState } from 'react';
import { toPng } from "html-to-image";
import VanillaTilt from 'vanilla-tilt';
import useStore from '../../store';
import "../CardThemes/cardTheme.css";
import { Quotes } from '../Quotes/Quotes';
import { CardTheme } from '../CardThemes/CardThemes';
import toast from 'react-hot-toast';
import { FaDownload } from "react-icons/fa6";
import { FaBorderAll } from "react-icons/fa6";
import { FaFileImage } from "react-icons/fa6";

const MainPage = ({ userData }) => {

  const selectedQuote = useStore(state => state.selectedQuote);
  const seletedTheme = useStore(state => state.selectedTheme);
  const setToggleBorder = useStore((state) => state.setToggleBorder);
  const toggleBorder = useStore((state) => state.toggleBorder);
  const [imageFitContain, setImageFitContain] = useState(true);

  const cardRef = useRef();

  useEffect(() => {
    VanillaTilt.init(cardRef.current, {
      max: 10,
      speed: 1000,
      glare: true,
      "max-glare": 0.8,
    });

    const handleResize = () => {
      cardRef.current.vanillaTilt.destroy();
      if (window.innerWidth < 480) {
        VanillaTilt.init(cardRef.current, {
          max: 10,
          speed: 1000,
          glare: false,
          "max-glare": 0,
        });
      } else {
        VanillaTilt.init(cardRef.current, {
          max: 10,
          speed: 1000,
          glare: true,
          "max-glare": 0.8,
        });
      }
    };

    handleResize();
    console.log(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cardRef.current.vanillaTilt.destroy();
    };
  }, []);

  function formatCount(count) {
    if (count >= 1e9) return (count / 1e9).toFixed(1) + 'B';
    if (count >= 1e6) return (count / 1e6).toFixed(1) + 'M';
    if (count >= 1e3) return (count / 1e3).toFixed(1) + 'K';
    return count;
  }

  const handleImageFit = () => {
    setImageFitContain(prevFit => !prevFit);
  };

  const handleDownload = () => {
    const node = cardRef.current;

    toast.promise(
      toPng(node)
        .then(function (dataUrl) {
          const link = document.createElement('a');
          link.download = 'card.png';
          link.href = dataUrl;
          link.click();
        }),
      {
        loading: 'Downloading...',
        success: 'Card downloaded successfully',
        error: 'Error converting card to image',
      }
    );
  };

  return (
    <>
    <div ref={cardRef} className='bg-[#ffc0cb00] p-[7px] rounded-[14px]'>
      <div className={`${seletedTheme} w-[44.5rem] h-[21rem] rounded-[12px] bg-black p-[9px]`} data-tilt
        data-tilt-glare
      >
        <div className={`p-6 ${toggleBorder ? `border-r-[3px] border-l-[3px] rounded-[12px] ${seletedTheme === "white-gold" || seletedTheme === "yellow-orange" || seletedTheme === "white-pink" || seletedTheme === "white-blue" || seletedTheme === "white-gray" ? "border-black" : "border-white"} ` : ""}`}>
          <div className='w-full grid grid-cols-2 justify-items-center'>
            <div className='flex flex-col gap-0.5 min-w-80 max-w-80 min-h-[16rem] max-h-[16rem]'>
              <h1 className={`font-bold ${seletedTheme === "white-gold" || seletedTheme === "yellow-orange" || seletedTheme === "white-pink" || seletedTheme === "white-blue" || seletedTheme === "white-gray" ? "text-black" : "text-white"} line-clamp-2 text-[40px] max-w-[19rem]`}>{userData?.name}</h1>
              <div className={`line-clamp-1 flex items-center ${seletedTheme === "white-gold" || seletedTheme === "yellow-orange" || seletedTheme === "white-pink" || seletedTheme === "white-blue" || seletedTheme === "white-gray" ? "text-black" : "text-white"} typo-callout`}>
                <span className="">@{userData?.username}</span>
                <span className="mx-1">•</span>
                <time className="w-full">
                  {new Date(userData.dateJoined).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              </div>
              <hr className="bg-black w-full mt-[12px] mb-[12px]"></hr>
              <p className={`line-clamp-3 typo-callout max-w-[19rem] min-w-[19rem] ${seletedTheme === "white-gold" || seletedTheme === "yellow-orange" || seletedTheme === "white-pink" || seletedTheme === "white-blue" || seletedTheme === "white-gray" ? "text-black" : "text-white"}`}>
                {userData?.bio?.markdown === '' ? userData?.tagline : userData?.bio?.markdown}
              </p>

              <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1675531271955/ALEtNA1cM.png?auto=compress' className='logo' />
            </div>

            <div className='grid gap-16 w-full'>
              <div className={`right-side w-full right-top relative flex flex-col bg-cover p-2 pb-10 border-[5px] rounded-[20px] ${seletedTheme === "white-gold" || seletedTheme === "yellow-orange" || seletedTheme === "white-pink" || seletedTheme === "white-blue" || seletedTheme === "white-gray" ? "border-[#a8b3cf]" : "border-white"}`}>
                <img src={userData?.profilePicture} alt="Travel Guy" className={`w-16 h-16 rounded-full -rotate-3 border-white border-4 size-24 rounded-3 ${imageFitContain ? "object-cover" : "object-contain"}`} />
                <span className={`flex w-full flex-row justify-center gap-3 rounded-[14px] bg-black p-4 shadow-2 absolute bottom-0 left-0 ${userData.badges.length === 0 ? "translate-y-[13%]" : "translate-y-1/2"}`}>
                  <span className="flex flex-row items-center gap-1">
                    <strong><h2 className="text-white">{formatCount(userData?.followersCount)}</h2></strong>
                    <span className="text-[12px] text-white"> Followers</span>
                  </span>
                  <span>|</span>
                  <span className="flex flex-row items-center gap-1">
                    <strong><h2 className="text-white">{formatCount(userData?.followingsCount)}</h2></strong>
                    <span className="text-[12px] text-white"> Following</span></span>
                </span>
                {
                  userData.badges.some(badge => badge.name === "Featured On Hashnode") &&
                  <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1638537289044/KeDRCKlY_.png?w=200&h=200&fit=crop&crop=entropy&auto=compress&auto=compress,format&format=webp' alt="hashnode featured" className='absolute w-[2rem] left-[18.5rem] top-[-1rem] ' />
                }

                <p className='quote-on-card'>{selectedQuote}</p>

              </div>

              <span className='flex w-full flex-row items-center justify-center gap-1 total-posts-container'>
                <span className="flex flex-row items-center gap-1">
                  <strong><h2 className="text-white">{userData?.posts?.totalDocuments}</h2></strong>
                  <span className="text-[12px] text-white"> Posts Published</span></span></span>
              <div>
                {userData.badges.length > 0 && <h3 className={`text-[18px] mb-2 font-medium ${seletedTheme === "white-gold" || seletedTheme === "yellow-orange" || seletedTheme === "white-pink" || seletedTheme === "white-blue" || seletedTheme === "white-gray" ? "text-black" : "text-white"}`}>Badges Earned:</h3>}
                <div className='grid grid-cols-7 gap-2 w-[18rem]'>
                  {userData.badges.slice(0, 6).map((badge, index) => (
                    <img key={index} src={badge.image} alt={badge.name} className='rounded-[12px] w-[80px]' />
                  ))}
                  {userData.badges.length > 6 && <div className={`rounded-[12px] w-[80px] text-[20px] font-black ${seletedTheme === "white-gold" || seletedTheme === "yellow-orange" || seletedTheme === "white-pink" || seletedTheme === "white-blue" || seletedTheme === "white-gray" ? "text-black" : "text-white"}`}>+{userData.badges.length - 6}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      <div className='grid grid-cols-[0.2fr_0.2fr_0.2fr_0.2fr_0.7fr] gap-6 mt-7 items-center'>
        <div className="tooltip tooltip-bottom cursor-pointer" data-tip="Download Card" onClick={handleDownload}>
          <FaDownload className='text-[white] text-4xl ' />
        </div>
        <div className="tooltip tooltip-bottom cursor-pointer" data-tip="Add Border" onClick={setToggleBorder}>
          <FaBorderAll className='text-[white] text-4xl ' />
        </div>
        <div className="tooltip tooltip-bottom cursor-pointer" data-tip="Resize Profile Picture: Works for potrait profile picture only" onClick={handleImageFit}>
          <FaFileImage className='text-[white] text-4xl ' />
        </div>
        <CardTheme />
        <Quotes />
      </div>
    </>
  );
};

export default MainPage;