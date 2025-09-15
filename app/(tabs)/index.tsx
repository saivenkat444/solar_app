import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';

// Import JSON
import mockData from '../../mockData/module_to_device.json';
const deviceData = mockData[0];

// Get device dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../assets/images/rural_energy.png')}
          style={[styles.headerImage, { height: screenHeight * 0.3 }]} // 30% of screen height
          resizeMode="contain"
        />
      }
    >
      {/* Section 1: Battery */}
      <Pressable onPress={() => router.push('/battery')}>
        <ThemedView style={[styles.section, { padding: screenWidth * 0.05 }]}>
          <Text style={[styles.sectionTitle, { fontSize: screenWidth * 0.045 }]}>Battery Status</Text>
          <Text>Voltage: {deviceData.battery_voltage}V</Text>
          <Text>Relay: {deviceData.relay}</Text>
        </ThemedView>
      </Pressable>

      {/* Section 2: LED / Community Control */}
      <Pressable onPress={() => router.push('/community_control')}>
        <ThemedView style={[styles.section, { padding: screenWidth * 0.05 }]}>
          <Text style={[styles.sectionTitle, { fontSize: screenWidth * 0.045 }]}>Community Control</Text>
          <Text>Tap to manage power supply</Text>
        </ThemedView>
      </Pressable>

      {/* Section 3: Solar Info */}
      <Pressable onPress={() => router.push('/solar_panel')}>
        <ThemedView style={[styles.section, { padding: screenWidth * 0.05 }]}>
          <Text style={[styles.sectionTitle, { fontSize: screenWidth * 0.045 }]}>Solar Panel Info</Text>
          <Text>Temperature: {deviceData.temperature}°C</Text>
          <Text>Status: {deviceData.status}</Text>
          <Text>Tap to view panels</Text>
        </ThemedView>
      </Pressable>

      {/*Section 4: Alerts - Fixed this section */}
      <Pressable onPress={() => router.push('/alerts')}>
        <ThemedView style={[styles.section, { padding: screenWidth * 0.05 }]}>
          <Text style={[styles.sectionTitle, { fontSize: screenWidth * 0.045 }]}>Alerts</Text>
          <View>
            {deviceData.alerts.length === 0 ? (
              <Text>No alerts</Text>
            ) : (
              <Text>View {deviceData.alerts.length} alert(s)</Text>
            )}
          </View>
        </ThemedView>
      </Pressable>

      {/* Extra space */}
      <View style={{ height: screenHeight * 0.2 }} /> {/* 20% of screen height */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});