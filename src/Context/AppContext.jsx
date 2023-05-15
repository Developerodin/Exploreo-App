import React, { useState } from 'react'

const InitialMarkerData={
Distance: "14 km",
Place: "Bagru",
Rating: "1.5",
Reviews: "27",
StaionID: "41",
Status: "Available",
icon: "assets/icon/IconS.png",
lat: 26.8148938,
lng: 75.7117989,
title: "Highway King Bagru",
travelTime: "44"
}

export const AppContext =React.createContext();
const AppContextProvider = ({children}) => {
    const AuthValue=localStorage.getItem("auth") || false;
     const [Auth,setAuth]=useState(AuthValue);
    const[userData,setUserData]=useState([{name:"Akshay"}]);
    const[MarkerData,setMarkerData]=useState(InitialMarkerData);
    const[TabBarVisibility,setTabBarVisibility] = useState(null);


  return <AppContext.Provider value={{userData,setUserData,Auth,setAuth,MarkerData,setMarkerData,TabBarVisibility,setTabBarVisibility}}>{children}</AppContext.Provider>
}

export default AppContextProvider;