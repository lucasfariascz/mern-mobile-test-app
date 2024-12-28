import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'PersonalityMatch'>;

const PERSONALITY_TYPES = [
  'Direct and straightforward',
  'Warm and empathetic',
  'Mystical and spiritual',
  'Fun and lighthearted',
];

export const PersonalityMatchScreen: React.FC<Props> = ({ route, navigation }) => {
  const [selectedPersonality, setSelectedPersonality] = useState<string>('');
  const [otherPersonality, setOtherPersonality] = useState<string>('');

  const handleSubmit = () => {
    navigation.navigate('SchedulingPreferences', {
      formData: route.params.formData,
      interests: route.params.interests,
      preferredService: route.params.preferredService,
      goals: route.params.goals,
      experienceLevel: route.params.experienceLevel,
      emotional: route.params.emotional,
      spiritualPreferences: route.params.spiritualPreferences,
      deliveryMethod: route.params.deliveryMethod,
      personalityMatch: selectedPersonality || otherPersonality
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Personality Match</Text>
      <Text style={styles.subtitle}>What type of psychic personality do you feel most comfortable with?</Text>

      {PERSONALITY_TYPES.map((personality) => (
        <TouchableOpacity
          key={personality}
          style={[
            styles.personalityButton,
            selectedPersonality === personality && styles.selectedPersonality,
          ]}
          onPress={() => setSelectedPersonality(personality)}
        >
          <Text
            style={[
              styles.personalityText,
              selectedPersonality === personality && styles.selectedPersonalityText,
            ]}
          >
            {personality}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.otherContainer}>
        <Text style={styles.label}>Other (please specify):</Text>
        <TextInput
          style={styles.input}
          value={otherPersonality}
          onChangeText={setOtherPersonality}
          placeholder="Enter other personality"
        />
      </View>

      <TouchableOpacity
        style={[styles.submitButton, !(selectedPersonality || otherPersonality) && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!(selectedPersonality || otherPersonality)}
      >
        <Text style={styles.submitButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

