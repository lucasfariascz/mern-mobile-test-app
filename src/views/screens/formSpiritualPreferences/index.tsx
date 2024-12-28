import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'SpiritualPreferences'>;

const SPIRITUAL_PREFERENCES = [
  'Open to all types of spiritual guidance',
  'Focused on specific practices (e.g., astrology, energy work)',
  'Prefer practical, non-spiritual advice',
];

export const SpiritualPreferencesScreen: React.FC<Props> = ({ route, navigation }) => {
  const [selectedPreference, setSelectedPreference] = useState<string>('');
  const [otherPreference, setOtherPreference] = useState<string>('');

  const handleSubmit = () => {
    const finalPreference = otherPreference 
      ? `Other: ${otherPreference}` 
      : selectedPreference

      navigation.navigate('DeliveryMethod', {
        formData: route.params.formData,
        interests: route.params.interests,
        preferredService: route.params.preferredService,
        goals: route.params.goals,
        experienceLevel: route.params.experienceLevel,
        emotional: route.params.emotional,
        spiritualPreferences: finalPreference
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Spiritual Preferences</Text>
        <Text style={styles.subtitle}>How would you describe your spiritual preferences or beliefs?</Text>

        {SPIRITUAL_PREFERENCES.map((preference) => (
          <TouchableOpacity
            key={preference}
            style={[
              styles.levelButton,
              selectedPreference === preference && styles.selectedLevel
            ]}
            onPress={() => setSelectedPreference(preference)}
          >
            <Text style={[
              styles.levelText,
              selectedPreference === preference && styles.selectedLevelText
            ]}>
              {preference}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={styles.otherContainer}>
          <Text style={styles.label}>Other (please specify):</Text>
          <TextInput
            style={styles.input}
            value={otherPreference}
            onChangeText={setOtherPreference}
            placeholder="Enter other preference"
          />
        </View>

        <TouchableOpacity
          style={[styles.submitButton, !selectedPreference && !otherPreference && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!selectedPreference && !otherPreference}
        >
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};