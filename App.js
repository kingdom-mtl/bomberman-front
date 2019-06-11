import React from 'react';
import SocketIOClient from 'socket.io-client';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    // Creating the socket-client instance will automatically connect to the server.
  SocketIOClient('http://localhost:3000');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
