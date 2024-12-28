import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'EmotionalState'>;

export const EmotionalStateScreen: React.FC<Props> = ({ route, navigation }) => {
  const [emotional, setEmotional] = useState<number>(3);

  const getEmotionalStateLabel = (value: number): string => {
    if (value === 1) return 'Very Stuck/Confused';
    if (value === 5) return 'Confident but Seeking Validation';
    return `Level ${value}`;
  };

 

  const handleSubmit = () => {
    navigation.navigate('SpiritualPreferences', {
      formData: route.params.formData,
      interests: route.params.interests,
      preferredService: route.params.preferredService,
      goals: route.params.goals,
      experienceLevel: route.params.experienceLevel,
      emotional: emotional
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Emotional State</Text>
        <Text style={styles.subtitle}>How are you feeling about the area you're seeking guidance in?</Text>

        <View style={styles.sliderContainer}>
          <Text style={styles.sliderValue}>
            {getEmotionalStateLabel(emotional)}
          </Text>
          
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={emotional}
            onValueChange={setEmotional}
            minimumTrackTintColor="#007AFF"
            maximumTrackTintColor="#ddd"
          />
          
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Very Stuck/Confused</Text>
            <Text style={styles.labelText}>Confident but Seeking Validation</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

