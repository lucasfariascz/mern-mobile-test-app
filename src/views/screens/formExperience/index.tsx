import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types';
import { styles } from './styles';


type Props = NativeStackScreenProps<RootStackParamList, 'Experience'>;

const EXPERIENCE_LEVELS = [
  'Yes, regularly',
  'Yes, occasionally',
  'No, this is my first time'
];

export const ExperienceScreen: React.FC<Props> = ({ route, navigation }) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  const handleSubmit = () => {
    navigation.navigate('EmotionalState', {
      formData: route.params.formData,
      interests: route.params.interests,
      preferredService: route.params.preferredService,
      goals: route.params.goals,
      experienceLevel: selectedLevel
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Experience Level</Text>
        <Text style={styles.subtitle}>Have you ever consulted a psychic or spiritual guide before?</Text>

        {EXPERIENCE_LEVELS.map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.levelButton,
              selectedLevel === level && styles.selectedLevel
            ]}
            onPress={() => setSelectedLevel(level)}
          >
            <Text style={[
              styles.levelText,
              selectedLevel === level && styles.selectedLevelText
            ]}>
              {level}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity 
          style={[styles.submitButton, !selectedLevel && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!selectedLevel}
        >
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
