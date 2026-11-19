import React, { useState } from 'react';
import { Alert, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { cardsData } from '../constants/questions';

export default function BigBattleScreen({ completedLevels, onAnswer, onComplete }) {
  const [activeLevel, setActiveLevel] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const closeLevel = () => {
    setActiveLevel(null);
    setQuestionIndex(0);
    setSelectedChoice(null);
  };

  const startLevel = (index) => {
    if (index > completedLevels.length) {
      Alert.alert('Level locked', 'Complete the previous level to unlock this mission.');
      return;
    }
    setActiveLevel(index);
    setQuestionIndex(0);
    setSelectedChoice(null);
  };

  const chooseAnswer = (choiceIndex) => {
    if (selectedChoice !== null) return;
    setSelectedChoice(choiceIndex);
    onAnswer(cardsData[activeLevel].questions[questionIndex].choices[choiceIndex].scores);
  };

  const nextQuestion = () => {
    if (selectedChoice === null) {
      Alert.alert('Choose an answer', 'Select one response before continuing.');
      return;
    }
    const questions = cardsData[activeLevel].questions;
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((current) => current + 1);
      setSelectedChoice(null);
      return;
    }
    onComplete(cardsData[activeLevel].id);
    closeLevel();
  };

  const currentQuestion = activeLevel === null ? null : cardsData[activeLevel].questions[questionIndex];
  const progress = completedLevels.length / cardsData.length;

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>TEAMUNLOCK+</Text>
      <Text style={styles.header}>Future Workplace Big Battle</Text>
      <Text style={styles.subtitle}>Explore six missions and discover your career-interest pattern.</Text>
      <View style={styles.progressCard}>
        <View style={styles.progressLabels}>
          <Text style={styles.progressText}>Mission progress</Text>
          <Text style={styles.progressValue}>{completedLevels.length}/{cardsData.length}</Text>
        </View>
        <View style={styles.bar}><View style={[styles.fill, { width: `${progress * 100}%` }]} /></View>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {cardsData.map((card, index) => {
          const locked = index > completedLevels.length;
          const completed = completedLevels.includes(card.id);
          return (
            <TouchableOpacity key={card.id} style={[styles.card, locked && styles.locked]} onPress={() => startLevel(index)}>
              <Text style={styles.emoji}>{locked ? '🔒' : card.emoji}</Text>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardStatus}>{completed ? 'Completed · Replay' : locked ? 'Locked' : 'Start mission'}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Modal visible={activeLevel !== null} animationType="slide" onRequestClose={closeLevel}>
        <View style={styles.modal}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <TouchableOpacity onPress={closeLevel} style={styles.closeButton}><Text style={styles.closeText}>Close</Text></TouchableOpacity>
            <Text style={styles.modalTitle}>{activeLevel === null ? '' : cardsData[activeLevel].title}</Text>
            <Text style={styles.counter}>Question {questionIndex + 1} of {currentQuestion ? cardsData[activeLevel].questions.length : 0}</Text>
            <Text style={styles.clue}>{currentQuestion?.clue}</Text>
            {currentQuestion?.choices.map((choice, index) => (
              <TouchableOpacity
                key={`${choice.text}-${index}`}
                style={[styles.choiceButton, selectedChoice === index && styles.selectedChoice]}
                onPress={() => chooseAnswer(index)}
              >
                <Text style={styles.choiceText}>{choice.text}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
              <Text style={styles.nextText}>{currentQuestion && questionIndex === cardsData[activeLevel].questions.length - 1 ? 'Complete mission' : 'Next question'}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#160D2B', paddingHorizontal: 18 },
  eyebrow: { color: '#FFD166', fontWeight: '800', fontSize: 12, letterSpacing: 2, marginTop: 18 },
  header: { color: '#FFFFFF', fontSize: 27, fontWeight: '800', marginTop: 6 },
  subtitle: { color: '#B9AED2', lineHeight: 20, marginTop: 8 },
  progressCard: { backgroundColor: '#251541', padding: 16, borderRadius: 16, marginVertical: 18 },
  progressLabels: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  progressText: { color: '#EAE4F5' },
  progressValue: { color: '#FFD166', fontWeight: '700' },
  bar: { height: 8, backgroundColor: '#42305F', borderRadius: 8, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: '#FFD166' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingBottom: 24 },
  card: { width: '48%', minHeight: 145, backgroundColor: '#30204E', borderRadius: 18, padding: 16, marginBottom: 14, justifyContent: 'center' },
  locked: { opacity: 0.5 },
  emoji: { fontSize: 36 },
  cardTitle: { color: '#FFFFFF', fontWeight: '700', fontSize: 16, marginTop: 10 },
  cardStatus: { color: '#B9AED2', fontSize: 11, marginTop: 5 },
  modal: { flex: 1, backgroundColor: '#160D2B' },
  modalContent: { padding: 24, paddingTop: 56 },
  closeButton: { alignSelf: 'flex-end' },
  closeText: { color: '#B9AED2', fontSize: 16 },
  modalTitle: { color: '#FFD166', fontSize: 28, fontWeight: '800', marginTop: 20 },
  counter: { color: '#B9AED2', marginTop: 8 },
  clue: { color: '#FFFFFF', fontSize: 21, fontWeight: '600', lineHeight: 29, marginVertical: 24 },
  choiceButton: { backgroundColor: '#2B1B47', padding: 15, borderRadius: 13, marginBottom: 10, borderWidth: 1, borderColor: '#3C2860' },
  selectedChoice: { borderColor: '#FFD166', backgroundColor: '#49325E' },
  choiceText: { color: '#F4F0FA', lineHeight: 20 },
  nextButton: { backgroundColor: '#FFD166', borderRadius: 13, padding: 16, marginTop: 12 },
  nextText: { color: '#251541', textAlign: 'center', fontWeight: '800' },
});
