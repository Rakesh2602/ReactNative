import { View, Text, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Women_shopping from './screens/Women_shopping'
import { icons } from 'feather-icons';
import { Header,Left, Right, Body, Thumbnail } from 'native-base';
const Stack=createNativeStackNavigator();
const App = () => {
return (
    <NavigationContainer>
        <Stack.Navigator 
        // screenOptions={{
        //     headerStyle:{
        //         backgroundColor:'#236DF1'
        //     },
        //     headerTintColor:'white',
        //    }}
           >
            <Stack.Screen
                name='Home'
                component={Home}
                //options={{headerShown:false}}
            />
            <Stack.Screen
                name='Women_shopping'
                component={Women_shopping}
                options={{headerShown:false}}
            //    title:"Women_shi...",
            //     headerTitleStyle:{
            //         color:'white',
            //         fontSize:20
            //     },
            //     }}
               />            
        </Stack.Navigator>   
     </NavigationContainer>
)}

export default App;