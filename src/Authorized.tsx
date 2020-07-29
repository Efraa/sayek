import React, { useEffect, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './store/contexts/AuthContext'
import { AuthActions } from './store/actions/AuthActions'
import { Routing } from './routes/Routes'
import { Spinner } from './components/Spinner'
import { AlertContainer } from './components/Alert'
import { StoreProvider } from './store/contexts/StoreContext'

export const Authorized = () => {
  const {
    state: { isAuth, isLoading },
    dispatch,
  } = useContext(AuthContext)

  useEffect(() => {
    AuthActions.login(dispatch)
  }, [dispatch])

  return isLoading ? (
    <Spinner />
  ) : (
    <StoreProvider>
      <BrowserRouter>
        <AlertContainer />
        <Routing isAuth={isAuth} />
      </BrowserRouter>
    </StoreProvider>
  )
}
