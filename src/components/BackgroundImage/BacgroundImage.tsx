import React from 'react'
import {ImageBackground} from 'react-native'
import {styles} from './BacgroundImageStyle'
import {BackgroundImageComponentProps} from './types'

/**
 * BackgroundImageComponent is a React functional component that renders a background image
 * with the given props.
 *
 * @param {ReactNode} props.children - The children to be rendered inside the component.
 * @param {ResizeMode} props.resizeMode - The resize mode for the background image.
 * @param {ImageSourcePropType} props.image - The source of the background image.
 *
 * @returns {JSX.Element} The rendered BackgroundImageComponent.
 */
export const BackgroundImageComponent: React.FC<
  BackgroundImageComponentProps
> = ({children, resizeMode = 'cover', image}) => {
  return (
    <ImageBackground
      source={image}
      resizeMode={resizeMode}
      style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  )
}
