import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types'; // Altere conforme sua estrutura de tipos
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'AdditionalDetails'>;

export const AdditionalDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const [details, setDetails] = useState<string>('');

  const handleSubmit = () => {
    navigation.navigate('SubscriptionPreferences', {
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
      additionalDetails: details,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Additional Details</Text>
      <Text style={styles.subtitle}>
        Is there anything specific you’d like your psychic to know before the session?
      </Text>
      <Text style={styles.example}>
        Example: “I recently ended a long-term relationship” or “I’ve been feeling uncertain about my job.”
      </Text>

      <TextInput
        style={styles.textBox}
        multiline
        placeholder="Type your details here..."
        value={details}
        onChangeText={setDetails}
      />

      <TouchableOpacity
        style={[styles.submitButton, !details && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!details}
      >
        <Text style={styles.submitButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

