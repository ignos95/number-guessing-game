import React from 'react'
import classes from './result.module.css'


const Result=props=>{
  if(props.No !==null)
  {
   if(props.No===0) return <div className={[classes.Result , classes.Correct].join(' ')}>
                            Correct
                           </div>
   else if(props.No>=1&&props.No<=4) return <div className={[classes.Result , classes.Hot].join(' ')}>
                                             Hot
                                            </div>
   else if(props.No>=5&&props.No<=15) return <div className={[classes.Result , classes.Warm].join(' ')}>
                                              Warm
                                             </div>
   else  return <div className={[classes.Result , classes.Cold].join(' ')}>
                 Cold
                </div>
  }
  else 
  return <div className={[classes.Result , classes.None].join(' ')}>
           Please Enter A Number
          </div>
}

export default Result