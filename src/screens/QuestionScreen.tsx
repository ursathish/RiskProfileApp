import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addScore} from '../store/actions';
import Question from '../components/Question';

const questions = [
  {
    question: 'What is your investment experience?',
    options: [
      {label: 'Novice', score: 1},
      {label: 'Intermediate', score: 2},
      {label: 'Advanced', score: 3},
    ],
  },
  {
    question: 'How often do you invest?',
    options: [
      {label: 'Rarely', score: 1},
      {label: 'Sometimes', score: 2},
      {label: 'Frequently', score: 3},
    ],
  },
  {
    question: 'How do you feel about risk?',
    options: [
      {label: 'Very risk-averse', score: 1},
      {label: 'Somewhat risk-averse', score: 2},
      {label: 'Neutral', score: 3},
      {label: 'Somewhat risk-seeking', score: 4},
      {label: 'Very risk-seeking', score: 5},
    ],
  },
  {
    question: 'What is your investment goal?',
    options: [
      {label: 'Preservation of capital', score: 1},
      {label: 'Income generation', score: 2},
      {label: 'Growth', score: 3},
      {label: 'Speculation', score: 4},
      {label: 'Aggressive growth', score: 5},
    ],
  },
  {
    question: 'How long is your investment horizon?',
    options: [
      {label: 'Less than 1 year', score: 1},
      {label: '1-3 years', score: 2},
      {label: '3-5 years', score: 3},
      {label: '5-10 years', score: 4},
      {label: 'More than 10 years', score: 5},
    ],
  },
];

const QuestionScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSelect = score => {
    dispatch(addScore(score));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('ResultScreen');
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('ResultScreen');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <View>
      <Question
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        onSelect={handleSelect}
        onNext={handleNext}
        onPrevious={currentQuestionIndex > 0 ? handlePrevious : undefined}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
      />
    </View>
  );
};

export default QuestionScreen;
