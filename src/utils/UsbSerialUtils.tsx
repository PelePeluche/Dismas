import {
  UsbSerialManager,
  UsbSerial,
  Parity,
} from 'react-native-usb-serialport-for-android'
import {Alert} from 'react-native'

export async function requestUSBPermission (): Promise<UsbSerial | null> {
  try {
    // check for the available devices
    const devices = await UsbSerialManager.list()
    // Send request for the first available device
    const granted = await UsbSerialManager.tryRequestPermission(
      devices[0].deviceId,
    )
    if (granted) {
      // open the port for communication
      const usbSerialport = await UsbSerialManager.open(devices[0].deviceId, {
        baudRate: 9600,
        parity: Parity.None,
        dataBits: 8,
        stopBits: 1,
      })
      return usbSerialport
    } else {
      Alert.alert('USB permission denied')
      return null
    }
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function disconnectUSB (usbSerial: UsbSerial | null) {
  if (usbSerial) {
    try {
      await usbSerial.close()
    } catch (e) {
      console.error(e)
    }
  }
}

export async function sendData (usbSerial: UsbSerial | null, data: string) {
  if (usbSerial) {
    try {
      await usbSerial.send(data)
    } catch (e) {
      console.error(e)
    }
  }
}
