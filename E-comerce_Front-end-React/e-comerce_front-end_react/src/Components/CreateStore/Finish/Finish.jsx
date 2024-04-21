import React from 'react';
import Lottie from 'lottie-react'
import DoneAnnimation from '../../../../public/animation/done.json'

export default function Finish() {

    return(
        <div>
<h1 style={{
  color: '#FF5722',
  animation: 'zoomIn 1s',
  '@keyframes zoomOut': {
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' }
  }
}}>
  Your store has been created successfully
</h1>            <Lottie animationData={DoneAnnimation} style={{width: '20%', height: '20%', justifyContent:'center', marginLeft : "40%" , marginBottom : "30px" , color :'red '}}/>
            
        </div>
    )


}