import React from 'react'
import { Box,Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
    container:{
      color:'white',
      background:'#F44336',
      margin:'auto',
      height:48,
      display:'flex',
      alignItems:'center',
      marginBottom:30,
      [theme.breakpoints.down('md')]:{
          display:'none'
      }
    },
    text:{
        fontSize:14,
        marginLeft:50,
        fontWeight:300,
    },
    logo:{
        height:37,
        marginLeft:20,
       marginTop:5,
       '&:last-child':
         { margin:'0 50px 0 20px'}
    }
  }))
  
export default function InfoHeader() {
    const classes=useStyles()
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return (
        <Box className={classes.container}>
            <Typography className={classes.text} >
            For the best experience use <b>inshorts</b> app on your smartphone
            </Typography>
            <Box style={{marginLeft:90}}>
                <img src={appleStore} alt="apple" className={classes.logo}/>
                <img src={googleStore} alt="google"  className={classes.logo} />
            </Box>
        </Box>
    )
}
