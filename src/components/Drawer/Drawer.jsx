import React from "react";
import {
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import "./drawer.css";
import ReCard from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa6";

export function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <div>
        <div className="navbar bg-[#31114d]">
          <div className="flex-none" onClick={openDrawer}>
            <button className="btn btn-square btn-ghost text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
          <div className="flex-1">
            <a className="text-xl bad-script-regular text-white font-extrabold cursor-pointer invisible sm:visible">Re-Card</a>
          </div>
          <div className="flex-none">
            <h1 className="text-white">
              <span className="invisible absolute sm:visible sm:relative">Re-Card is </span> 
               Inspired by
              <a href='https://app.daily.dev/devcard' target='_blank' className="font-bold text-white underline"> Daily.Dev's DevCard</a>
            </h1>
          </div>
        </div>
      </div>
      <Drawer open={open} onClose={closeDrawer} className="p-3 overflow-y-scroll bg-[ghostwhite]" size={400}>
        <div className=" mb-16 flex items-center justify-between">
          <h1 className="madimi-one-regular text-[26px] text-[#5164ff]">
          </h1>
          <img src={ReCard} alt="Re-Card" className=" absolute w-[12rem] top-[-3rem]" />
          <IconButton variant="text" color="text-primary" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <p className="text-black text-left">
          Re-Card is your personal branding powerhouse.
          With Re-Card, you can generate a sleek,
          customizable card that showcases your Hashnode profile in style.
        </p>

        <p className="text-black text-left mt-6">
         Re-Card takes inspiration from 
         <a href='https://app.daily.dev/devcard' target='_blank' className="font-bold text-black underline"> Daily.Dev's DevCard </a>
         approach to digital identity for developers. With a nod to their creativity, <b> Re-Card</b> extends this concept to the vibrant
         <b> Hashnode community</b>, offering a personalized and shareable card for bloggers and tech enthusiasts alike.
        </p>
        <div className="w-full grid grid-cols-[0.4fr_0.2fr] justify-items-start items-baseline">
          <h3 className="text-[20px] font-extrabold text-black mt-[12px]">Github Repo:</h3>
          <span className="inline">
            <a href="https://github.com/Shivam-Katare/Re-Card" target="_blank" className="text-blue-700 font-extrabold underline">
              <FaGithub />
            </a>
          </span>
        </div>


        <ol className="style_1">
          <li>
            <h1 className="text-[20px] metal-mania-regular">Features:</h1>
            <ul className="text-black">
              <li>1. <span className="text-black font-extrabold">Generate Instantly:</span> Enter your Hashnode username and create your card with a click.</li>
              <li>2. <span className="text-black font-extrabold">Customize Freely:</span> Edit borders, select quotes, and choose from a variety of themes.</li>
              <li>3. <span className="text-black font-extrabold">Download Easily:</span> Get your card in high-quality format to share anywhere.</li>
              <li>4. <span className="text-black font-extrabold">Share Proudly:</span> Flaunt your tech identity on social media and beyond.</li>
            </ul>
          </li>
          <li>
            <h1 className="text-[20px] angkor-regular">Join the Open Source Community:</h1>
            <p className="text-black text-left mt-[12px]">
              As an open-source project, <a href="https://github.com/Shivam-Katare/Re-Card" target="_blank" className="text-blue-700 font-extrabold underline">Re-Card</a> thrives on collaboration.
              If you're a developer with ideas to enhance the app, your contributions are welcome!
              Fork the repository, push your features, and help us grow. Together, we can build something amazing.
            </p>
          </li>
          <li>
            <h1 className="text-[20px] font-extrabold text-[pink] bg-black w-full p-[1px_30px] rounded-[12px]">Share the Love:</h1>
            <p className="text-black text-left mt-[12px]">
              If you love <span className="font-bold">Re-Card</span>, spread the word!
              Share your custom card and tell your friends about this cool new tool.
            </p>
          </li>
          <li>
            <h1 className="text-gray-500 text-[20px] font-extrabold">Coming Soon:</h1>
            <ul>
              <li className="text-[#0000009e]"><span className="font-bold text-black">QRCode Integration:</span> Soon, you'll be able to add a QR code to your card. A simple scan will take anyone straight to your Hashnode profile.</li>
              <li className="text-[#0000009e]"><span className="font-bold text-black">Vertical Card View:</span> We're adding a vertical card option for a fresh perspective on your profile.</li>
            </ul>
          </li>
        </ol>
        <p className="text-[#aa7fff] bg-black rounded-[7px] p-[1px_41px] font-black">
          Stay tuned for these exciting features!
        </p>
        <p className="text-center mt-[6px] font-black text-black"> Made with 💙 by <span><a href="https://github.com/Shivam-Katare" target="_blank">Shivam Katare</a></span> </p>
      </Drawer>
    </React.Fragment>
  );
}