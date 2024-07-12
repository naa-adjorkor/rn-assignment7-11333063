import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LocationsScreen() {
  return(
  <View style={styles.container}>
      <Text>LocationsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 55,
  paddingHorizontal: 24,
},
})