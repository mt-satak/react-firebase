import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridRowGap: 16 + 'px',
    margin: 'auto',
    maxWidth: 960,
    padding: 16,
  }
})

const AppContent = ({ children }) => {
  const classes = useStyles()

  return <main className={classes.root}>{children}</main>
}

export default AppContent