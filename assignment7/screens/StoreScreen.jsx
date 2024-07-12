import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StoreScreen() {
  return(
  <View style={styles.container}>
      <Text>StoreScreen</Text>
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