import React, { useMemo, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BigBattleScreen from './screens/BigBattleScreen';
import ProfileScreen from './screens/ProfileScreen';
import StudentReportScreen from './screens/StudentReportScreen';
import InstitutionalReportScreen from './screens/InstitutionalReportScreen';
import ARCameraScreen from './screens/ARCameraScreen';

const EMPTY_SCORES = { Tech: 0, Data: 0, Business: 0, Creative: 0, Sustainable: 0 };
const TABS = [
  { key: 'battle', label: 'Battle', icon: 'game-controller' },
  { key: 'profile', label: 'Profile', icon: 'person' },
  { key: 'student', label: 'My report', icon: 'document-text' },
  { key: 'institution', label: 'Cohort', icon: 'bar-chart' },
  { key: 'camera', label: 'Workplace', icon: 'camera' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('battle');
  const [scores, setScores] = useState(EMPTY_SCORES);
  const [completedLevels, setCompletedLevels] = useState([]);

  const topCareer = useMemo(() => Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0], [scores]);

  const addScores = (answerScores) => {
    setScores((current) => {
      const next = { ...current };
      Object.entries(answerScores).forEach(([career, points]) => {
        next[career] = (next[career] || 0) + points;
      });
      return next;
    });
  };

  const completeLevel = (levelId) => {
    setCompletedLevels((current) => (current.includes(levelId) ? current : [...current, levelId]));
  };

  const resetPrototype = () => {
    setScores(EMPTY_SCORES);
    setCompletedLevels([]);
    setActiveTab('battle');
  };

  const screens = {
    battle: <BigBattleScreen completedLevels={completedLevels} onAnswer={addScores} onComplete={completeLevel} />,
    profile: <ProfileScreen topCareer={topCareer} completedCount={completedLevels.length} onReset={resetPrototype} />,
    student: <StudentReportScreen scores={scores} completedCount={completedLevels.length} />,
    institution: <InstitutionalReportScreen />,
    camera: <ARCameraScreen />,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#160D2B" />
      <View style={styles.content}>{screens[activeTab]}</View>
      <View style={styles.tabBar}>
        {TABS.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.tab}
              onPress={() => setActiveTab(tab.key)}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
            >
              <Ionicons name={tab.icon} size={21} color={active ? '#FFD166' : '#B9AED2'} />
              <Text style={[styles.tabText, active && styles.activeTabText]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#160D2B' },
  content: { flex: 1 },
  tabBar: { flexDirection: 'row', backgroundColor: '#251541', borderTopWidth: 1, borderTopColor: '#3C2860', paddingVertical: 7 },
  tab: { flex: 1, alignItems: 'center', gap: 3 },
  tabText: { color: '#B9AED2', fontSize: 10 },
  activeTabText: { color: '#FFD166', fontWeight: '700' },
});
