import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import {requestUSBPermission} from '../../utils/UsbSerialUtils'

export function Home () {
  useEffect(() => {
    // Ejecuta la función de los utils al instanciarse el componente
    requestUSBPermission()
  }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
