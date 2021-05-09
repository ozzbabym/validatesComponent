import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




export default function ValidateComponent(props) {
  const classes = useStyles();
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    

    
    
    const update = (e) => {
      
            setValue(e.currentTarget.value) 

            if(e.currentTarget.value.length<1){
                setError(true)
                props.dispatch({type: 'SET_COUNT', payload: {value: e.currentTarget.value, label: props.label, count: true} })
            }else{
                setError(false)
                props.dispatch({type: 'SET_COUNT', payload: {value: e.currentTarget.value, label: props.label, count: false} })
            }  

            
            
    }

    React.useEffect(()=>{
      if(props.children){
        if(props.children.length > 0){
            props.children.forEach(item=>{                       
                props.dispatch({type: 'SET_COUNT', payload: {value: '', label: item.props.label, count: error} })
              })
        }else{
            props.dispatch({type: 'SET_COUNT', payload: {value: '', label: props.label+1, count: error} })
        }
    }
    },[value])
    
    
    

  return (
    <form className={classes.root} autoComplete="off">
      <div>
        <TextField onChange={(e)=> update(e)} 
          error={props.state[props.label] && props.state[props.label][1] && value.length<1?true:false}
          id="standard-required" 
          label={props.label} 
           />
        </div>
        <ul>
            <li style={{listStyleType: 'none'}}><div>{props.children}</div></li>
        </ul>
    </form>
    )
}