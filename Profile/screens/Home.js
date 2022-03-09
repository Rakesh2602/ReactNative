import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:25}}>Home</Text>
      <Button
        title='click below'
      />
      <Button
          title='Flipkart'
          onPress={()=>navigation.navigate('Women_shopping')}
      />
    </View>
  )
}

export default Home