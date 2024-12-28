import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types';
import { styles } from './styles';


type Props = NativeStackScreenProps<RootStackParamList, 'InterestSelection'>;

const INTERESTS = [
  'Love and Relationships',
  'Career and Finances',
  'Personal Growth and Spirituality',
  'Family and Friendships',
  'Health and Well-being',
  'Decision-Making'
];

export const InterestSelectionScreen: React.FC<Props> = ({ route, navigation }) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [otherInterest, setOtherInterest] = useState('');

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else if (selectedInterests.length < 3) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // Update InterestSelectionScreen handleSubmit
  const handleSubmit = () => {
    const finalInterests = otherInterest 
      ? [...selectedInterests, `Other: ${otherInterest}`]
      : selectedInterests;
    
    navigation.navigate('PsychicServices', {
      formData: route.params.formData,
      interests: finalInterests
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Areas of Interest</Text>
      <Text style={styles.subtitle}>What areas of your life are you seeking guidance on?</Text>
      <Text style={styles.hint}>(Select up to 3)</Text>

      {INTERESTS.map((interest) => (
        <TouchableOpacity
          key={interest}
          style={[
            styles.interestButton,
            selectedInterests.includes(interest) && styles.selectedInterest
          ]}
          onPress={() => toggleInterest(interest)}
        >
          <Text style={[
            styles.interestText,
            selectedInterests.includes(interest) && styles.selectedInterestText
          ]}>
            {interest}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.otherContainer}>
        <Text style={styles.label}>Other (please specify):</Text>
        <TextInput
          style={styles.input}
          value={otherInterest}
          onChangeText={setOtherInterest}
          placeholder="Enter other interest"
        />
      </View>

      <TouchableOpacity 
        style={[styles.submitButton, selectedInterests.length === 0 && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={selectedInterests.length === 0}
      >
        <Text style={styles.submitButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

