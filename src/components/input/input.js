import React from 'react'

const Input=(props)=>{
       let val=props.inputNum
       if(!props.inputNum) val=''
    return(
           <form onSubmit={props.inputHandler}>
            <label>Enter a number from 1 to {props.range} :</label><br/>
            <input autoFocus
                   type='number'
                   value={val}
                   onChange={props.inputChangeHandler}
                   />
            <button type='submit'>Submit</button>
           </form>
          )
}

export default Input