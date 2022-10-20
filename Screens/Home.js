import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'

const Home = ({route,navigation}) => {

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Welcome {route.params.name}</Text>
      <Button title="Go Back" onPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer:{
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: 500,
    paddingTop: 20,
    paddingBottom: 15,
  },
})