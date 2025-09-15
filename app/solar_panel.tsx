import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Import mock data (adjust path)
import solarData from '../mockData/module_to_device.json';

export default function SolarPanelScreen() {
  // For now: take first panel's voltage
  const panelVoltage = solarData[0].panels[0].voltage;

  // Decide condition based on voltage
  let condition = "Fine";
  if (panelVoltage === 0) {
    condition = "Off";
  } else if (panelVoltage < 10) {
    condition = "Requires Maintenance";
  }

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Solar Panels</Text>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>Panel 1</Text>
        <Text>Voltage: {panelVoltage} V</Text>
        <Text>Condition: {condition}</Text>
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
    marginBottom: 20,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
