import React from 'react'

import Classes from './numberGame.module.css'

import Result from '../components/result/result'
import Input from '../components/input/input'
       
let HISTORY=[]
let ADD=false

class NumberGame extends React.Component{
       state={
              inputNum:null,
              range:100,
              randNum:Math.floor( Math.random()*100+1 ),
              result:null
       }

       //update on every keystoke
       inputChangeHandler=(e)=>{
        this.setState({
                        inputNum:e.target.value
                     })     
       }

       //update on submit
       inputHandler=(e)=>{
        e.preventDefault()
        
        let result=this.state.inputNum-this.state.randNum
        
        if(result<0) result*=-1
        this.setState({
                        result:result
                     })

        if(result===0)ADD=true
       }

       componentDidUpdate(){
              if(this.state.result===0){
                 this.setState(  prevSt=>({
                                           randNum:Math.floor( Math.random()*(prevSt.range+100) + 1 ),
                                           range:prevSt.range+100,
                                           inputNum:null,
                                           result:null
                                          }) 
                              )
                }
       }

    render(){
       const ui=<div className={Classes.Ui} key={Date.now()} >
                 <Result No={this.state.result}/>
                 <Input inputHandler={this.inputHandler}
                        inputChangeHandler={this.inputChangeHandler}
                        range={this.state.range}
                        inputNum={this.state.inputNum}/>
                </div>

       if(ADD===true){
         HISTORY=[...HISTORY,ui]
         ADD=false
       }

       return( 
           <div className={Classes.Main}>
            {HISTORY}
            {ui}
           </div>
       )
    }
}

export default NumberGame