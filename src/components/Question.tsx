import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

interface Option {
  label: string;
  value: string;
  score: number;
}

interface QuestionProps {
  question: string;
  options: Option[];
  onSelect: (score: number) => void;
  onNext: () => void;
  onPrevious?: () => void;
  isLastQuestion: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  onSelect,
  onNext,
  onPrevious,
  isLastQuestion,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <Button
          key={index}
          title={option.label}
          onPress={() => onSelect(option.score)}
        />
      ))}
      <View style={styles.buttonContainer}>
        {onPrevious && <Button title="Previous" onPress={onPrevious} />}
        <Button title={isLastQuestion ? 'Finish' : 'Next'} onPress={onNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    margin: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Question;
