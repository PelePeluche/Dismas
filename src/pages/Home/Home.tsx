import React, {useState} from 'react'
import {View} from 'react-native'
import {Text, Button} from '@rneui/themed'
import {requestUSBPermission, disconnectUSB} from '../../utils/UsbSerialUtils'
import {UsbSerial} from 'react-native-usb-serialport-for-android'
import {BackgroundImageComponent} from '../../components/BackgroundImage'
import BackroundGrid from '../../../assets/images/BackgroundGrid.jpg'
import {Image} from '@rneui/themed'
import {styles} from './HomeStyle'
import {HomeProps} from './types'

/**
 * Renders the Home screen.
 *
 * @param {HomeProps} props - The props for the Home screen.
 * @returns {JSX.Element} The rendered Home screen.
 */
export function Home ({navigation}: HomeProps): JSX.Element {
  const [usbSerial, setUsbSerial] = useState<UsbSerial | null>(null)
  const [connected, setConnected] = useState(false)

  /**
   * Handles the connection process.
   *
   * This function requests permission to access the USB serial port,
   * sets the USB serial port, and sets the connected state to true.
   *
   * @returns {Promise<void>} A promise that resolves once the connection process is complete.
   */
  const handleConnect = async () => {
    // Request permission to access the USB serial port
    const usbSerialport = await requestUSBPermission()

    setUsbSerial(usbSerialport)
    setConnected(true)
  }

  /**
   * Handles the disconnection of the USB device.
   */
  const handleDisconnect = () => {
    disconnectUSB(usbSerial)

    // Reset the USB serial value
    setUsbSerial(null)
  }

  /**
   * Navigates to the configuration screen.
   */
  const handleGoToConfig = () => {
    navigation.navigate('Config')
  }

  return (
    <BackgroundImageComponent image={BackroundGrid}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a Dismas</Text>
        <Image
          source={require('../../../assets/images/iconodismas.jpg')}
          style={styles.image}
        />
        <Button
          title={connected ? 'Desconectar' : 'Conectar'}
          color='black'
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={connected ? handleDisconnect : handleConnect}
        />
        <Button
          title='Entrar a modo configuración'
          color='black'
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={handleGoToConfig}
        />
      </View>
    </BackgroundImageComponent>
  )
}
