import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types';
import { styles } from './styles';


type Props = NativeStackScreenProps<RootStackParamList, 'PsychicServices'>;

const SERVICES = [
  'Tarot Card Reading',
  'Astrology Reading',
  'Numerology',
  'Intuitive Energy Reading',
  'Mediumship (Connecting with loved ones who have passed)',
  'Crystal Healing',
  'Dream Interpretation',
  'General Guidance (No specific preference)'
];

export const PsychicServicesScreen: React.FC<Props> = ({ route, navigation }) => {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSubmit = () => {
    navigation.navigate('Goals', {
      formData: route.params.formData,
      interests: route.params.interests,
      preferredService: selectedService
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Preferred Psychic Services</Text>
        <Text style={styles.subtitle}>What type of psychic service are you most interested in?</Text>

        {SERVICES.map((service) => (
          <TouchableOpacity
            key={service}
            style={[
              styles.serviceButton,
              selectedService === service && styles.selectedService
            ]}
            onPress={() => setSelectedService(service)}
          >
            <Text style={[
              styles.serviceText,
              selectedService === service && styles.selectedServiceText
            ]}>
              {service}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity 
          style={[styles.submitButton, !selectedService && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!selectedService}
        >
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

