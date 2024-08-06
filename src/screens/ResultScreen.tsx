import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setRiskProfile, resetScore} from '../store/actions'; // Ensure you have a resetScore action

const ResultScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const score = useSelector(state => state.score);
  const [riskProfile, setLocalRiskProfile] = useState('');

  useEffect(() => {
    let profile = '';
    if (score <= 7) {
      profile = 'Low';
    } else if (score <= 13) {
      profile = 'Medium';
    } else {
      profile = 'High';
    }
    setLocalRiskProfile(profile);
    dispatch(setRiskProfile(profile));
  }, [score, dispatch]);

  // Determine color based on risk profile
  const getColor = profile => {
    switch (profile) {
      case 'Low':
        return 'green';
      case 'Medium':
        return 'orange';
      case 'High':
        return 'red';
      default:
        return 'black'; // Default color if no profile matches
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Risk Profile Score: {score}</Text>
      <Text style={[styles.text, {color: getColor(riskProfile)}]}>
        Your Risk Profile Category: {riskProfile}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ResultScreen;
