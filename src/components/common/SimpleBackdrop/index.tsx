import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1
    }
  })
)

type PropsTypes = {
  open: boolean
}

const SimpleBackdrop: React.FC<PropsTypes> = (props) => {
  const classes = useStyles()
  return (
    <Backdrop className={classes.backdrop} open={props.open}>
      <CircularProgress />
    </Backdrop>
  )
}

export default SimpleBackdrop
