import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const SAMPLE = [
  { label: 'Technology', value: 72 },
  { label: 'Data & analytics', value: 64 },
  { label: 'Business', value: 58 },
  { label: 'Creative', value: 49 },
  { label: 'Sustainability', value: 43 },
];

export default function InstitutionalReportScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>ILLUSTRATIVE COHORT VIEW</Text>
      <Text style={styles.header}>Institutional report concept</Text>
      <Text style={styles.subtitle}>A layout concept for educators. Every value below is fixed sample data, not live student analytics.</Text>
      <View style={styles.statsRow}>
        <View style={styles.stat}><Text style={styles.statValue}>24</Text><Text style={styles.statLabel}>Sample students</Text></View>
        <View style={styles.stat}><Text style={styles.statValue}>68%</Text><Text style={styles.statLabel}>Sample completion</Text></View>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Sample career-interest distribution</Text>
        {SAMPLE.map((item) => (
          <View key={item.label} style={styles.row}>
            <View style={styles.labels}><Text style={styles.label}>{item.label}</Text><Text style={styles.value}>{item.value}%</Text></View>
            <View style={styles.bar}><View style={[styles.fill, { width: `${item.value}%` }]} /></View>
          </View>
        ))}
      </View>
      <Text style={styles.note}>A production version would require authenticated roles, consent-aware data collection, a backend, aggregation rules and privacy controls. None are implemented in this prototype.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#160D2B' },
  content: { padding: 22 },
  eyebrow: { color: '#FFD166', fontWeight: '800', letterSpacing: 1.5, fontSize: 12, marginTop: 14 },
  header: { color: '#FFFFFF', fontSize: 26, fontWeight: '800', marginTop: 7 },
  subtitle: { color: '#B9AED2', lineHeight: 20, marginTop: 8 },
  statsRow: { flexDirection: 'row', gap: 12, marginVertical: 22 },
  stat: { flex: 1, backgroundColor: '#30204E', borderRadius: 16, padding: 18 },
  statValue: { color: '#FFD166', fontSize: 27, fontWeight: '800' },
  statLabel: { color: '#B9AED2', marginTop: 5 },
  card: { backgroundColor: '#251541', borderRadius: 18, padding: 18 },
  sectionTitle: { color: '#FFFFFF', fontSize: 17, fontWeight: '700', marginBottom: 18 },
  row: { marginBottom: 16 },
  labels: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 7 },
  label: { color: '#EAE4F5' },
  value: { color: '#FFD166', fontWeight: '700' },
  bar: { height: 9, backgroundColor: '#42305F', borderRadius: 8, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: '#8F75D6' },
  note: { color: '#B9AED2', lineHeight: 20, marginVertical: 20 },
});
