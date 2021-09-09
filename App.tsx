import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import AppProvider from '@hooks/index';

const Title = styled(Text)`
  font-size: 24px;
`;

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Title>Poli Junior</Title>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </AppProvider>
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
