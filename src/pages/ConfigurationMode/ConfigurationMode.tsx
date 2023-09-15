import React, {useState} from 'react'
import {View} from 'react-native'
import {Button, Text} from '@rneui/themed'
import {CommonColorModal, YellowModal} from './Modals'
import {BackgroundImageComponent} from '../../components/BackgroundImage'
import {styles} from './ConfigurationModeStyle'
import BackroundGrid from '../../../assets/images/BackgroundGrid.jpg'
import {ConfigScreenProps} from './types'

/**
 * Config screen component.
 *
 * @param {ConfigScreenProps} navigation - The navigation prop.
 */
export const ConfigScreen = ({navigation}: ConfigScreenProps) => {
  const [commonModalVisible, setCommonModalVisible] = useState(false)
  const [yellowModalVisible, setYellowModalVisible] = useState(false)
  const [selectedColor, setSelectedColor] = useState('')

  /**
   * Set the red modal visibility to true and update the selected color.
   *
   * @param {string} color - The selected color.
   */
  const handleButtonFunctionSelect = (color: string) => {
    if (color === 'amarillo') {
      setYellowModalVisible(true)
    } else {
      setCommonModalVisible(true)
    }
    setSelectedColor(color)
  }

  /**
   * Handle exit configuration by navigating back.
   */
  const handleExitConfig = () => {
    navigation.goBack()
  }

  return (
    <BackgroundImageComponent image={BackroundGrid}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué botón quieres configurar?</Text>
        <Button
          title={CustomTitle('rojo')}
          color='#E50918'
          buttonStyle={styles.button}
          onPress={() => handleButtonFunctionSelect('rojo')}
        />
        <Button
          title={CustomTitle('azul')}
          color='#2872B5'
          buttonStyle={styles.button}
          onPress={() => handleButtonFunctionSelect('azul')}
        />
        <Button
          title={CustomTitle('naranja')}
          color='#FF914D'
          buttonStyle={styles.button}
          onPress={() => handleButtonFunctionSelect('naranja')}
        />
        <Button
          title={CustomTitle('celeste')}
          color='#38B6FF'
          buttonStyle={styles.button}
          onPress={() => handleButtonFunctionSelect('celeste')}
        />
        <Button
          title='Botones amarillos'
          titleStyle={styles.buttonTitle}
          color='#FBC433'
          buttonStyle={styles.button}
          onPress={() => handleButtonFunctionSelect('amarillo')}
        />

        {/* Show the common color modal if the selected color is not yellow */}
        {selectedColor !== 'amarillo' && (
          <CommonColorModal
            visible={commonModalVisible}
            onClose={() => setCommonModalVisible(false)}
            color={selectedColor}
          />
        )}

        {selectedColor === 'amarillo' && (
          <YellowModal
            visible={yellowModalVisible}
            onClose={() => setYellowModalVisible(false)}
          />
        )}

        <Button
          title='Salir de modo configuración'
          titleStyle={styles.exitButtonTitle}
          color='black'
          buttonStyle={styles.exitButton}
          onPress={handleExitConfig}
        />
      </View>
    </BackgroundImageComponent>
  )
}

/**
 * Returns a custom title component with the specified color.
 *
 * @param {string} color - The color of the button.
 * @returns {React.ReactNode} - The custom title component.
 */
const CustomTitle = (color: string) => {
  return (
    <View>
      <Text style={styles.buttonTitle}>
        {/* Display the button color in the title */}
        Botón {color}
      </Text>
    </View>
  )
}
