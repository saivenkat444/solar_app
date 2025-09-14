import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { Button, Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

// Import JSON
import mockData from '../../mockData/module_to_device.json';
const deviceData = mockData[0];

export default function HomeScreen() {
  const router = useRouter();

  const handleLEDOn = () => {
    alert('LED turned ON (sending command...)');
  };

  const handleLEDOff = () => {
    alert('LED turned OFF (sending command...)');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../assets/images/tom_cigar.jpg')}
          style={styles.headerImage}
          resizeMode="contain"
        />
      }
    >
      {/* Section 1: Battery */}
      <Pressable onPress={() => router.push('/battery')}>
        <ThemedView style={styles.section}>
          <Text style={styles.sectionTitle}>Battery Status</Text>
          <Text>Voltage: {deviceData.battery_voltage}V</Text>
          <Text>Relay: {deviceData.relay}</Text>
        </ThemedView>
      </Pressable>

      {/* Section 2: LED */}
      <ThemedView style={styles.section}>
        <Text style={styles.sectionTitle}>LED Control</Text>
        <View style={styles.buttonRow}>
          <Button title="Turn ON" onPress={handleLEDOn} />
          <Button title="Turn OFF" onPress={handleLEDOff} />
        </View>
      </ThemedView>

      {/* Section 3: Solar Info */}
      <ThemedView style={styles.section}>
        <Text style={styles.sectionTitle}>Solar Panel Info</Text>
        <Text>Temperature: {deviceData.temperature}°C</Text>
        <Text>Status: {deviceData.status}</Text>
      </ThemedView>

      {/* Section 4: Alerts */}
      <ThemedView style={styles.section}>
        <Text style={styles.sectionTitle}>Alerts</Text>
        {deviceData.alerts.length === 0 ? (
          <Text>No alerts</Text>
        ) : (
          deviceData.alerts.map((a: string, i: number) => (
            <Text key={i}>{a}</Text>
          ))
        )}
      </ThemedView>

      {/* Extra space */}
      <View style={{ height: 400 }} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 250,
  },
  section: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});
