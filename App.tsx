import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Home, ConfigScreen} from './src/pages'

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Config' component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
