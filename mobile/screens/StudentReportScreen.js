import React from 'react';
import { ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { careerDetails } from '../constants/careerDetails';

export default function StudentReportScreen({ scores, completedCount }) {
  const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const maximum = Math.max(...entries.map(([, value]) => value), 1);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  const leader = entries[0][0];

  const shareSummary = async () => {
    const lines = entries.map(([career, value]) => `${career}: ${value} points`);
    await Share.share({
      title: 'TeamUnlock+ illustrative report',
      message: `TeamUnlock+ demo report\nMissions completed: ${completedCount}/6\n${lines.join('\n')}\n\nIllustrative prototype results; not a formal assessment.`,
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>STUDENT REPORT</Text>
      <Text style={styles.header}>Your career-interest snapshot</Text>
      <Text style={styles.subtitle}>Based only on answers in this app session.</Text>
      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>{total ? 'Leading interest' : 'No answers yet'}</Text>
        <Text style={styles.heroValue}>{total ? careerDetails[leader].title : 'Start your first mission'}</Text>
        <Text style={styles.heroMeta}>{completedCount}/6 missions completed · {total} total points</Text>
      </View>
      <Text style={styles.sectionTitle}>Interest scores</Text>
      {entries.map(([career, value]) => (
        <View key={career} style={styles.scoreRow}>
          <View style={styles.scoreLabels}><Text style={styles.scoreName}>{career}</Text><Text style={styles.scoreValue}>{value}</Text></View>
          <View style={styles.bar}><View style={[styles.fill, { width: `${(value / maximum) * 100}%` }]} /></View>
        </View>
      ))}
      <TouchableOpacity style={styles.shareButton} onPress={shareSummary}><Text style={styles.shareText}>Share text summary</Text></TouchableOpacity>
      <Text style={styles.note}>Sharing uses your device’s native share sheet. No PDF is generated, and results are not saved after the app restarts.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#160D2B' },
  content: { padding: 22 },
  eyebrow: { color: '#FFD166', fontWeight: '800', letterSpacing: 2, fontSize: 12, marginTop: 14 },
  header: { color: '#FFFFFF', fontSize: 26, fontWeight: '800', marginTop: 7 },
  subtitle: { color: '#B9AED2', marginTop: 7 },
  heroCard: { backgroundColor: '#30204E', borderRadius: 18, padding: 20, marginVertical: 22 },
  heroLabel: { color: '#B9AED2', fontSize: 12, textTransform: 'uppercase' },
  heroValue: { color: '#FFD166', fontSize: 22, fontWeight: '800', marginTop: 7 },
  heroMeta: { color: '#EAE4F5', marginTop: 10 },
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: '700', marginBottom: 15 },
  scoreRow: { marginBottom: 16 },
  scoreLabels: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 7 },
  scoreName: { color: '#F4F0FA' },
  scoreValue: { color: '#FFD166', fontWeight: '700' },
  bar: { height: 9, backgroundColor: '#30204E', borderRadius: 8, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: '#8F75D6' },
  shareButton: { backgroundColor: '#FFD166', padding: 15, borderRadius: 13, marginTop: 10 },
  shareText: { color: '#251541', fontWeight: '800', textAlign: 'center' },
  note: { color: '#B9AED2', lineHeight: 20, marginTop: 15, marginBottom: 20 },
});
