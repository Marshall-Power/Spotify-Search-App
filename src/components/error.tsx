import React from 'react'

interface errorMessage {
    errorMsg: string
}

const Error = ({errorMsg}: errorMessage): JSX.Element => {  
    return(
         <div>
             {errorMsg}
         </div>
     )
 }

export default Error