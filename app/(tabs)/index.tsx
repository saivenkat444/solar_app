import React from 'react';
import { StyleSheet, Text, Image, Button, View } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const handleLEDOn = () => {
    alert('LED turned ON (placeholder)');
  };

  const handleLEDOff = () => {
    alert('LED turned OFF (placeholder)');
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
      {/* Section 1 */}
      <ThemedView style={styles.section}>
        <Text style={styles.sectionTitle}>LED Control</Text>
        <View style={styles.buttonRow}>
          <Button title="Turn ON" onPress={handleLEDOn} />
          <Button title="Turn OFF" onPress={handleLEDOff} />
        </View>
      </ThemedView>

      {/* Section 2 */}
      <ThemedView style={styles.section}>
        <Text style={styles.sectionTitle}>Battery Status</Text>
        <Text>Voltage: 12.5V</Text>
        <Text>Charge: 80%</Text>
      </ThemedView>

      {/* Section 3 */}
      <ThemedView style={styles.section}>
        <Text style={styles.sectionTitle}>Solar Panel Info</Text>
        <Text>Panel Output: 50W</Text>
        <Text>Temperature: 35°C</Text>
      </ThemedView>

      {/* Section 4 */}
      <ThemedView style={styles.section}>
        <Text style={styles.sectionTitle}>Load Control</Text>
        <Button title="Turn ON Fan" onPress={() => alert('Fan ON')} />
        <Button title="Turn OFF Fan" onPress={() => alert('Fan OFF')} />
      </ThemedView>

      {/* Extra space to scroll */}
      <View style={{ height: 400 }} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 250, // Big header image so effect is noticeable
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
