import React from 'react'
import GenerateButton from './GenerateButton'

function TextInput({ username, onChange, handleGenerateCard }) {
  return (
    <>
      <label className="form-control w-[17rem] md:w-[40rem] mt-12">

        <input
          type="text"
          placeholder="Enter your Hashnode username (e.g. 'JohnDoe'). Note: Username is case sensitive."
          className="input input-bordered bg-[#181717b3] text-white"
          value={username}
          onChange={onChange}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center"></div>
          <div className="text-sm leading-6">
            <p className="font-semibold text-[#ffffff] hover:text-[#ffffff] cursor-text">
            Note: Username is case sensitive. Test with this username: <span className="text-[#ff6b6b]">ShivamKatare</span>
            </p>
          </div>
        </div>
      </label>
      <GenerateButton handleGenerateCard={handleGenerateCard} disabled={!username.trim()} />
    </>

  )
}

export default TextInput