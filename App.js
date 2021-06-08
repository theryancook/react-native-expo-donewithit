import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform, Alert, View, Image, SafeAreaView, Button } from 'react-native';

export default function App() {
const handlePress = () => console.log("Text pressed")
console.log(require('./assets/icon.png'))
  return (
    <SafeAreaView style={styles.container}>
      <Button title={"Click Me"} onPress={() => Alert.alert("Button Title", "Button message",
      [ { text: "Yes"},
        { text: "No" },
        { text: "Third Option"}
        ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  },
});
