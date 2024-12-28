import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types'; // Ajuste o caminho conforme sua estrutura de tipos
import { styles } from './styles';
import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParamList, 'SubscriptionPreferences'>;

const OPTIONS = ['Yes, daily', 'Yes, weekly', 'No, just my scheduled sessions'];

export const SubscriptionPreferencesScreen: React.FC<Props> = ({ route, navigation }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSubmit = async () => {
    /*console.log('NextScreen', {
      formData: route.params.formData,
      interests: route.params.interests,
      preferredService: route.params.preferredService,
      goals: route.params.goals,
      experienceLevel: route.params.experienceLevel,
      emotional: route.params.emotional,
      spiritualPreferences: route.params.spiritualPreferences,
      deliveryMethod: route.params.deliveryMethod,
      personalityMatch: route.params.personalityMatch,
      schedulingPreferences: route.params.schedulingPreferences,
      additionalDetails: route.params.additionalDetails,
      subscriptionPreference: selectedOption,
    });*/
    
    const payload = {
      formData: route.params.formData,
      interests: route.params.interests,
      preferredService: route.params.preferredService,
      goals: route.params.goals,
      experienceLevel: route.params.experienceLevel,
      emotional: route.params.emotional,
      spiritualPreferences: route.params.spiritualPreferences,
      deliveryMethod: route.params.deliveryMethod,
      personalityMatch: route.params.personalityMatch,
      schedulingPreferences: route.params.schedulingPreferences,
      additionalDetails: route.params.additionalDetails,
      subscriptionPreference: selectedOption,
    };

    try {
      const response = await axios.post('http://192.168.1.93:3000/question', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      console.log(response);
      // Se a resposta for bem-sucedida, `axios` já lança o conteúdo no corpo da resposta.
      Alert.alert('Sucesso', 'Dados enviados com sucesso!');
      console.log('Resposta da API:', response.data);
    
      // Navegar para outra tela, se necessário
      // navigation.navigate('NextScreen');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Subscription Preferences</Text>
      <Text style={styles.subtitle}>
        Would you like to receive daily or weekly insights, affirmations, or spiritual exercises?
      </Text>

      {OPTIONS.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption(option)}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === option && styles.selectedOptionText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.submitButton, !selectedOption && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!selectedOption}
      >
        <Text style={styles.submitButtonText}>Send</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

