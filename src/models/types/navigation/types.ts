import { string } from "yup";

export type RootStackParamList = {
  InitialForm: undefined;
  InterestSelection: { formData: FormData };
  PsychicServices: { formData: FormData; interests: string[] };
  Goals: { 
    formData: FormData; 
    interests: string[];
    preferredService: string;
  };
  Experience: {
    formData: FormData;
    interests: string[];
    preferredService: string;
    goals: string;
  };
  EmotionalState: { 
    formData: FormData; 
    interests: string[]; 
    preferredService: string; 
    goals: string; 
    experienceLevel: string 
  };

  SpiritualPreferences: {
    formData: FormData; 
    interests: string[]; 
    preferredService: string; 
    goals: string; 
    experienceLevel: string
    emotional: number;
  };

  DeliveryMethod: {
    formData: FormData; 
    interests: string[]; 
    preferredService: string; 
    goals: string; 
    experienceLevel: string
    emotional: number;
    spiritualPreferences: string
  }

  PersonalityMatch: {
    formData: FormData; 
    interests: string[]; 
    preferredService: string; 
    goals: string; 
    experienceLevel: string
    emotional: number;
    spiritualPreferences: string
    deliveryMethod: string
  }

  SchedulingPreferences: {
    formData: FormData; 
    interests: string[]; 
    preferredService: string; 
    goals: string; 
    experienceLevel: string
    emotional: number;
    spiritualPreferences: string
    deliveryMethod: string
    personalityMatch: string
  }

  AdditionalDetails: {
    formData: FormData; 
    interests: string[]; 
    preferredService: string; 
    goals: string; 
    experienceLevel: string
    emotional: number;
    spiritualPreferences: string
    deliveryMethod: string
    personalityMatch: string
    schedulingPreferences: string[]
  }

  SubscriptionPreferences: {
    formData: FormData; 
    interests: string[]; 
    preferredService: string; 
    goals: string; 
    experienceLevel: string
    emotional: number;
    spiritualPreferences: string
    deliveryMethod: string
    personalityMatch: string
    schedulingPreferences: string[]
    additionalDetails: string
  }
  
};