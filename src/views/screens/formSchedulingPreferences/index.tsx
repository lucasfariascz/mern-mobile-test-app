import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types'; // Altere conforme sua estrutura de tipos
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'SchedulingPreferences'>;

const AVAILABILITY_OPTIONS = ['Mornings', 'Afternoons', 'Evenings', 'Weekends'];

export const SchedulingPreferencesScreen: React.FC<Props> = ({ route, navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  const handleSubmit = () => {
    navigation.navigate('AdditionalDetails', {
      formData: route.params.formData,
      interests: route.params.interests,
      preferredService: route.params.preferredService,
      goals: route.params.goals,
      experienceLevel: route.params.experienceLevel,
      emotional: route.params.emotional,
      spiritualPreferences: route.params.spiritualPreferences,
      deliveryMethod: route.params.deliveryMethod,
      personalityMatch: route.params.personalityMatch,
      schedulingPreferences: selectedOptions
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Scheduling Preferences</Text>
      <Text style={styles.subtitle}>
        When are you typically available for sessions? (Select all that apply)
      </Text>

      {AVAILABILITY_OPTIONS.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            selectedOptions.includes(option) && styles.selectedOption,
          ]}
          onPress={() => toggleOption(option)}
        >
          <Text
            style={[
              styles.optionText,
              selectedOptions.includes(option) && styles.selectedOptionText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.submitButton, selectedOptions.length === 0 && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={selectedOptions.length === 0}
      >
        <Text style={styles.submitButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
