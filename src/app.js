import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Router from './router'

const App = ({ history }) => {
  console.log('this is the history ',history)
  const [userData, setUserData] = useState()
  const statee = useSelector(state => state.userReducer)

  useEffect(() => {
    setUserData(statee)
  }, [statee])

  return (
    <>
      <Router history={history} statee={userData} />
    </>
  )
}

export default App
