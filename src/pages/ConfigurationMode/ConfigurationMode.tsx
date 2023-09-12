import React, {useState} from 'react'
import {View} from 'react-native'
import {Button, Text} from '@rneui/themed'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamList} from '../../../types'
import {CommonColorModal} from './Modals'
import {BackgroundImageComponent} from '../../components/BackgroundImage'
import {styles} from './ConfigurationModeStyle'
import BackroundGrid from '../../../assets/images/BackgroundGrid.jpg'

type ConfigScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Config'>
}

/**
 * Config screen component.
 *
 * @param {ConfigScreenProps} navigation - The navigation prop.
 */
export const ConfigScreen = ({navigation}: ConfigScreenProps) => {
  const [redModalVisible, setRedModalVisible] = useState(false)
  const [selectedColor, setSelectedColor] = useState('')

  /**
   * Set the red modal visibility to true and update the selected color.
   *
   * @param {string} color - The selected color.
   */
  const handleButtonFunctionSelect = (color: string) => {
    setRedModalVisible(true)
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
        <Button
          title={CustomTitle('rojo')}
          color='#E50918'
          buttonStyle={styles.button}
          onPress={() => handleButtonFunctionSelect('red')}
        />
        <Button
          title={CustomTitle('azul')}
          color='#2872B5'
          buttonStyle={styles.button}
          onPress={() => handleButtonFunctionSelect('blue')}
        />
        <Button
          title={CustomTitle('naranja')}
          color='#FF914D'
          buttonStyle={styles.button}
          onPress={() => handleButtonFunctionSelect('orange')}
        />
        <Button
          title={CustomTitle('celeste')}
          color='#38B6FF'
          buttonStyle={styles.button}
          onPress={() => handleButtonFunctionSelect('cyan')}
        />
        <Button
          title='Configurar botónes amarillos'
          titleStyle={styles.buttonTitle}
          color='#FBC433'
          buttonStyle={styles.button}
          onPress={() => handleButtonFunctionSelect('yellow')}
        />

        {/* Show the common color modal if the selected color is not yellow */}
        {selectedColor !== 'yellow' && (
          <CommonColorModal
            visible={redModalVisible}
            onClose={() => setRedModalVisible(false)}
            color={selectedColor}
          />
        )}

        <Button
          title='Salir de modo configuración'
          titleStyle={styles.exitButtonTitle}
          color=''
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
        Configurar botón {color}
      </Text>
    </View>
  )
}
