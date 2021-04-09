import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';

const useStyle = makeStyles({
  
   hambicon: {
    backgroundColor: "#1c1414",
    color: "#f1f0ee",
    stroke: "#f1f0ee",
    fontSize: "50px",
    right: "15px",
    top: "15px",
    padding: "10px",
    borderRadius: "50%",
    border: "1px solid #1c1414",
    /*borderColor: "#1c1414",*/
    '&:hover': {
      backgroundColor: "#f1f0ee",
      color: "#1c1414",
      stroke: "#1c1414",
      border: "1px solid #f1f0ee",
    },
    '@media (min-width: 1024px)': { 
      fontSize: "60px",
    },
    '@media (min-width: 1280px)': { 
      fontSize: "100px",
    }    
  },
});


function MenuComp() {
  const classes = useStyle();
  
  return <MenuIcon className={classes.hambicon}></MenuIcon>;

}
export default MenuComp
