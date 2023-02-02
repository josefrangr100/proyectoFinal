import React, { useEffect } from 'react'
import { GridHome } from '../../components/GridHome/GridHome'
const URL = `http://localhost:3001`;

export const Home = () => {
  useEffect(()=>{
    llamarServidor();
    }, [])
    function llamarServidor(){
      fetch (`${URL}`).then(resp => resp.json())
                  .then(respuesta=> {
                    console.log(respuesta)
                  })
    }
  return (
<>
    <div> 

      <GridHome/>

    </div>
</>
      
      
      

  )
}
