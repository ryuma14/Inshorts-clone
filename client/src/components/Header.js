import React from 'react'
import {AppBar} from '@material-ui/core'
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Menu} from '@material-ui/icons'

const useStyles=makeStyles({
    header:{
     background:'#fff',
     height:71,
     paddingTop:5
    },
    logo:{
     height:56,
     margin:'auto',
     paddingRight:70
    },
    menu:{
        color:'#000'
    }
})



export default function Header() {
    const classes=useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
    return (
        <AppBar className={classes.header}>
         <Toolbar>
         <Menu className={classes.menu}/>
            <img src={url} alt='logo' className={classes.logo}/>
         </Toolbar>
</AppBar>
    )
}
