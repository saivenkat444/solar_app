import { ThemedView } from '@/components/themed-view';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function communityControlScreen() {
  const [building1, setBuilding1] = useState(true);
  const [building2, setBuilding2] = useState(false);
  const [building3, setBuilding3] = useState(true);

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Building Power Control</Text>

      {/* Building 1 */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Building 1</Text>
        <Switch
          value={building1}
          onValueChange={setBuilding1}
        />
        <Text>
          {building1 ? 'Power is being supplied' : 'Power is OFF'}
        </Text>
      </View>

      {/* Building 2 */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Building 2</Text>
        <Switch
          value={building2}
          onValueChange={setBuilding2}
        />
        <Text>
          {building2 ? 'Power is being supplied' : 'Power is OFF'}
        </Text>
      </View>

      {/* Building 3 */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Building 3</Text>
        <Switch
          value={building3}
          onValueChange={setBuilding3}
        />
        <Text>
          {building3 ? 'Power is being supplied' : 'Power is OFF'}
        </Text>
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
