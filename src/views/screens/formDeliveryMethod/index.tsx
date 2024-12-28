import React, { useState } from 'react';
import { RootStackParamList } from 'models/types/navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './styles';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'DeliveryMethod'>;

const DELIVERY_METHODS = [
  'Live Video/Phone Call',
  'Recorded Reading (Delivered via email)',
  'Written Report or Reading',
  'Chat-based Guidance (Text only)',
];

export const DeliveryMethodScreen: React.FC<Props> = ({ route, navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');

  const handleSubmit = () => {
    navigation.navigate('PersonalityMatch', {
      formData: route.params.formData,
      interests: route.params.interests,
      preferredService: route.params.preferredService,
      goals: route.params.goals,
      experienceLevel: route.params.experienceLevel,
      emotional: route.params.emotional,
      spiritualPreferences: route.params.spiritualPreferences,
      deliveryMethod: selectedMethod
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>How would you like your session to be delivered?</Text>

      {DELIVERY_METHODS.map((method) => (
        <TouchableOpacity
          key={method}
          style={[
            styles.methodButton,
            selectedMethod === method && styles.selectedMethod,
          ]}
          onPress={() => setSelectedMethod(method)}
        >
          <Text
            style={[
              styles.methodText,
              selectedMethod === method && styles.selectedMethodText,
            ]}
          >
            {method}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.submitButton, !selectedMethod && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!selectedMethod}
      >
        <Text style={styles.submitButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}