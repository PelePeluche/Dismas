import {ReactNode} from 'react'
import {ImageSourcePropType} from 'react-native'

export type BackgroundImageComponentProps = {
  children?: ReactNode
  image: ImageSourcePropType
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
}
