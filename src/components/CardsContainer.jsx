import React from 'react'
import MainPage from './MainPage/MainPage'

function CardsContainer({ userData }) {
  return (
    <React.Fragment>
          <MainPage userData={userData} />
    </React.Fragment>
  )
}

export default CardsContainer