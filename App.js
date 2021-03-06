import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigations/Navigation';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <Navigation />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#567',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
