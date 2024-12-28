import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'models/types/navigation/types';
import { FormViewModel } from 'viewModels/forms/formViewModel';
import { FormView } from 'views/screens/formViewPerson';
import { InterestSelectionScreen } from 'views/screens/formViewInterest';
import { PsychicServicesScreen } from 'views/screens/formPsychicServices';
import { GoalsScreen } from 'views/screens/formGoals';
import { ExperienceScreen } from 'views/screens/formExperience';
import { EmotionalStateScreen } from 'views/screens/formEmotionalState';
import { SpiritualPreferencesScreen } from 'views/screens/formSpiritualPreferences';
import { DeliveryMethodScreen } from 'views/screens/formDeliveryMethod';
import { PersonalityMatchScreen } from 'views/screens/formPersonalityMatch';
import { SchedulingPreferencesScreen } from 'views/screens/formSchedulingPreferences';
import { AdditionalDetailsScreen } from 'views/screens/formAdditionalDetails';
import { SubscriptionPreferencesScreen } from 'views/screens/formSubscriptionPreferences';


const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const formViewModel = new FormViewModel();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="InitialForm" 
          options={{ title: 'Personal Information' }}
        >
          {(props) => <FormView {...props} viewModel={formViewModel} />}
        </Stack.Screen>
        <Stack.Screen 
          name="InterestSelection" 
          component={InterestSelectionScreen}
          options={{ title: 'Areas of Interest' }}
        />
        <Stack.Screen 
          name="PsychicServices" 
          component={PsychicServicesScreen}
          options={{ title: 'Psychic Services' }}
        />
        <Stack.Screen 
          name="Goals" 
          component={GoalsScreen}
          options={{ title: 'Goals' }}
        />
        <Stack.Screen 
          name="Experience" 
          component={ExperienceScreen}
          options={{ title: 'Experience Level' }}
        />
        <Stack.Screen 
          name="EmotionalState" 
          component={EmotionalStateScreen}
          options={{ title: 'Emotional State' }}
        />
        <Stack.Screen 
          name="SpiritualPreferences" 
          component={SpiritualPreferencesScreen}
          options={{ title: 'Spiritual Preferences' }}
        />
        <Stack.Screen 
          name="DeliveryMethod" 
          component={DeliveryMethodScreen} 
          options={{ title: 'Delivery Method' }}
        />
        <Stack.Screen 
          name="PersonalityMatch" 
          component={PersonalityMatchScreen}
          options={{ title: 'Personality Match' }}
        />
        <Stack.Screen 
          name="SchedulingPreferences" 
          component={SchedulingPreferencesScreen}
          options={{ title: 'Scheduling Preferences' }}
        />
        <Stack.Screen 
          name="AdditionalDetails" 
          component={AdditionalDetailsScreen} 
          options={{ title: 'Additional Details' }}
        />
        <Stack.Screen 
          name="SubscriptionPreferences" 
          component={SubscriptionPreferencesScreen}
          options={{ title: 'Subscription Preferences' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;