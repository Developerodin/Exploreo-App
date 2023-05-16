import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { IonImg } from '@ionic/react';

const InviteFriends = () => {

    const {itemData}=useContext(AppContext);


  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"}}>
        {
            itemData.map((el)=>{
                return(
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"60px",height:"60px",margin:"15px",borderRadius:"50px"}}>
                              <img style={{width:"100%",height:"100%",borderRadius:"50px"}} src={el.userImg}/>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default InviteFriends
