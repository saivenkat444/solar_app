import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import mockData from '../mockData/module_to_device.json';

export default function AlertsScreen() {
  const deviceData = mockData[0];

  return (
<ThemedView style={styles.container}>
      <Text style={styles.title}>Alerts History</Text>

      <View>
        {deviceData.alerts.length === 0 ? (
          <Text style={styles.noAlerts}>No alerts recorded ✅</Text>
        ) : (
          deviceData.alerts.map((alert: string, index: number) => (
            <View key={index} style={styles.alertBox}>
              <Text style={styles.alertText}>{alert}</Text>
            </View>
          ))
        )}
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
  noAlerts: {
    fontSize: 16,
    color: 'gray',
  },
  alertBox: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ffe6e6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff9999',
  },
  alertText: {
    fontSize: 16,
    color: '#cc0000',
  },
});
