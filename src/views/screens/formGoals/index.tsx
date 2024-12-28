import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types';
import { styles } from './styles';


type Props = NativeStackScreenProps<RootStackParamList, 'Goals'>;

export const GoalsScreen: React.FC<Props> = ({ route, navigation }) => {
  const [goals, setGoals] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Experience', {
      formData: route.params.formData,
      interests: route.params.interests,
      preferredService: route.params.preferredService,
      goals
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Goals and Expectations</Text>
        <Text style={styles.subtitle}>What do you hope to gain from your session?</Text>
        
        <View style={styles.examplesContainer}>
          <Text style={styles.examplesTitle}>Examples:</Text>
          <Text style={styles.example}>"Clarity on my career path"</Text>
          <Text style={styles.example}>"Reassurance about my current relationship"</Text>
          <Text style={styles.example}>"Insight into my personal growth journey"</Text>
        </View>

        <TextInput
          style={styles.input}
          value={goals}
          onChangeText={setGoals}
          placeholder="Share your goals..."
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />

        <TouchableOpacity 
          style={[styles.submitButton, !goals.trim() && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!goals.trim()}
        >
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};