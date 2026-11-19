import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function ARCameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View style={styles.centred}><Text style={styles.body}>Checking camera permission…</Text></View>;
  }

  if (!permission.granted) {
    return (
      <View style={[styles.centred, styles.content]}>
        <Text style={styles.emoji}>📷</Text>
        <Text style={styles.header}>Workplace camera preview</Text>
        <Text style={styles.body}>Camera access is needed only to display the on-device preview. This prototype does not record, upload or recognise images.</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}><Text style={styles.buttonText}>Allow camera access</Text></TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back">
        <View style={styles.overlay}>
          <Text style={styles.overlayLabel}>WORKPLACE PREVIEW</Text>
          <Text style={styles.overlayTitle}>Camera concept demonstration</Text>
          <Text style={styles.overlayBody}>No augmented-reality tracking or image processing is implemented.</Text>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#160D2B' },
  centred: { flex: 1, backgroundColor: '#160D2B', alignItems: 'center', justifyContent: 'center' },
  content: { padding: 28 },
  emoji: { fontSize: 50 },
  header: { color: '#FFFFFF', fontSize: 25, fontWeight: '800', textAlign: 'center', marginVertical: 16 },
  body: { color: '#B9AED2', lineHeight: 21, textAlign: 'center' },
  button: { backgroundColor: '#FFD166', paddingHorizontal: 24, paddingVertical: 14, borderRadius: 13, marginTop: 24 },
  buttonText: { color: '#251541', fontWeight: '800' },
  camera: { flex: 1, justifyContent: 'flex-end' },
  overlay: { margin: 20, padding: 20, borderRadius: 18, backgroundColor: 'rgba(22,13,43,0.86)' },
  overlayLabel: { color: '#FFD166', fontWeight: '800', letterSpacing: 1.5, fontSize: 11 },
  overlayTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: '800', marginTop: 8 },
  overlayBody: { color: '#EAE4F5', lineHeight: 20, marginTop: 8 },
});
