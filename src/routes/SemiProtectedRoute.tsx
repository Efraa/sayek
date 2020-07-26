import React, { useContext, useEffect } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { AuthContext } from '../store/contexts/AuthContext'

export const SemiProtectedRoute: React.FC<RouteProps> = props => {
  const location = window.location.href
  const { dispatch } = useContext(AuthContext)

  useEffect(() => {
    dispatch({
      type: 'SET_LOCATION',
      location,
    })
  }, [])

  return <Route {...props} />
}