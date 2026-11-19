import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { careerDetails } from '../constants/careerDetails';

export default function ProfileScreen({ topCareer, completedCount, onReset }) {
  const career = careerDetails[topCareer];
  const confirmReset = () => Alert.alert('Reset prototype?', 'This clears the current in-memory answers and mission progress.', [
    { text: 'Cancel', style: 'cancel' },
    { text: 'Reset', style: 'destructive', onPress: onReset },
  ]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.avatar}><Text style={styles.avatarText}>DS</Text></View>
      <Text style={styles.name}>Demo Student</Text>
      <Text style={styles.subtitle}>Illustrative profile · no personal data stored</Text>
      <View style={styles.statsRow}>
        <View style={styles.stat}><Text style={styles.statValue}>{completedCount}/6</Text><Text style={styles.statLabel}>Missions</Text></View>
        <View style={styles.stat}><Text style={styles.statValue}>{completedCount ? topCareer : '—'}</Text><Text style={styles.statLabel}>Leading interest</Text></View>
      </View>
      <Text style={styles.sectionTitle}>Suggested career direction</Text>
      <View style={styles.card}>
        <Text style={styles.careerTitle}>{completedCount ? career.title : 'Complete a mission to begin'}</Text>
        {completedCount > 0 && (
          <>
            <Text style={styles.label}>Example roles</Text>
            <Text style={styles.body}>{career.jobs.join(' · ')}</Text>
            <Text style={styles.label}>Skills to explore</Text>
            <Text style={styles.body}>{career.skills.join(' · ')}</Text>
            <Text style={styles.label}>Possible next steps</Text>
            {career.steps.map((step) => <Text key={step} style={styles.body}>• {step}</Text>)}
          </>
        )}
      </View>
      <Text style={styles.note}>Suggestions are illustrative and are not a psychometric assessment or career advice.</Text>
      <TouchableOpacity style={styles.resetButton} onPress={confirmReset}><Text style={styles.resetText}>Reset demo progress</Text></TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#160D2B' },
  content: { padding: 22, alignItems: 'center' },
  avatar: { width: 82, height: 82, borderRadius: 41, backgroundColor: '#FFD166', alignItems: 'center', justifyContent: 'center', marginTop: 16 },
  avatarText: { color: '#251541', fontWeight: '800', fontSize: 27 },
  name: { color: '#FFFFFF', fontSize: 25, fontWeight: '800', marginTop: 14 },
  subtitle: { color: '#B9AED2', marginTop: 6, textAlign: 'center' },
  statsRow: { flexDirection: 'row', gap: 12, marginVertical: 22, alignSelf: 'stretch' },
  stat: { flex: 1, backgroundColor: '#251541', borderRadius: 15, padding: 16, alignItems: 'center' },
  statValue: { color: '#FFD166', fontSize: 21, fontWeight: '800' },
  statLabel: { color: '#B9AED2', fontSize: 12, marginTop: 5 },
  sectionTitle: { color: '#FFFFFF', fontSize: 19, fontWeight: '700', alignSelf: 'flex-start', marginBottom: 10 },
  card: { backgroundColor: '#30204E', borderRadius: 18, padding: 18, alignSelf: 'stretch' },
  careerTitle: { color: '#FFD166', fontSize: 20, fontWeight: '700' },
  label: { color: '#B9AED2', fontSize: 12, fontWeight: '700', marginTop: 16, marginBottom: 6, textTransform: 'uppercase' },
  body: { color: '#F4F0FA', lineHeight: 22 },
  note: { color: '#B9AED2', lineHeight: 19, marginVertical: 18 },
  resetButton: { borderColor: '#6E598D', borderWidth: 1, borderRadius: 12, padding: 13, alignSelf: 'stretch' },
  resetText: { color: '#EAE4F5', textAlign: 'center' },
});
