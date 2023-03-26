import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContext } from '@react-navigation/native';

const Splash = () => {
  const navigation = React.useContext(NavigationContext);
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Login");
        },3000)
    },[])

  return (
    <View style={{flex : 1,justifyContent: "center",alignItems : "center",backgroundColor:"#0d2329"}}>
      <Image source={require("../images/Logo.png")}/>
    </View>
  )
}

export default Splash