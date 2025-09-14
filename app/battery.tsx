import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import mockData from '../mockData/module_to_device.json';

const deviceData = mockData[0];

export default function BatteryScreen() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Battery Information</Text>
      <View style={styles.box}>
        <Text>Device ID: {deviceData.device_id}</Text>
        <Text>Voltage: {deviceData.battery_voltage}V</Text>
        <Text>Relay: {deviceData.relay}</Text>
        <Text>Status: {deviceData.status}</Text>
        <Text>Last Updated: {deviceData.timestamp}</Text>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
});
