import React, { useEffect, useContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './store/contexts/AuthContext'
import { AuthActions } from './store/actions/AuthActions'
import { Routing } from './routes/Routes'
import { Spinner } from './components/Spinner'

export const Authentication = () => {
  const [isLoading, setLoading] = useState(true)
  const { state, dispatch } = useContext(AuthContext)

  useEffect(() => {
    AuthActions.login(dispatch).then(() => setLoading(false))
  }, [dispatch])

  return isLoading ? (
    <Spinner />
  ) : (
    <BrowserRouter>
      <Routing isAuth={state.isAuth} />
    </BrowserRouter>
  )
}