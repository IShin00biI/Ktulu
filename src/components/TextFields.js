import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import * as cards from '../cards'
import { styles } from '../styles/styles'


export const ReadLoud = ({text}) => {
  return (
    <View style={styles.readLoud}>
      <Text style={styles.readLoudText}>
        {text}
      </Text>
    </View>
  )
}


export const ManitouInfo = ({text}) => {
  return (
    <View style={styles.manitouInfo}>
      <Text style={styles.manitouInfoText}>
        {text}
      </Text>
    </View>
  )
}

export default { ReadLoud }
export default { ManitouInfo }
