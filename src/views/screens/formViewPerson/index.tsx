import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FormViewModel } from '../../../viewModels/forms/formViewModel';
import { styles } from './styles';

interface FormViewProps {
  viewModel: FormViewModel;
}

export const FormView: React.FC<FormViewProps> = observer(({ viewModel, navigation }: any) => {
  const [showDatePicker, setShowDatePicker] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome *</Text>
        <TextInput
          style={styles.input}
          value={viewModel.getField('name')}
          onChangeText={(value) => viewModel.setField('name', value)}
          placeholder="Enter your name"
        />
        {viewModel.errors.name && (
          <Text style={styles.error}>{viewModel.errors.name}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          value={viewModel.getField('email')}
          onChangeText={(value) => viewModel.setField('email', value)}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {viewModel.errors.email && (
          <Text style={styles.error}>{viewModel.errors.email}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity 
          style={styles.dateButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateButtonText}>
            {viewModel.getField('dateOfBirth')
              ? viewModel.getField('dateOfBirth')?.toLocaleDateString()
              : 'Selecionar data'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={viewModel.getField('dateOfBirth') || new Date()}
            mode="date"
            display="default"
            onChange={(event: any, selectedDate?: Date) => {
              setShowDatePicker(false);
              if (selectedDate) {
                viewModel.setField('dateOfBirth', selectedDate);
              }
            }}
          />
        )}
      </View>

      <TouchableOpacity 
        style={[styles.button, !viewModel.isValid() && styles.buttonDisabled]}
        disabled={!viewModel.isValid()}
        onPress={() => {
          if (viewModel.isValid()) {
            navigation.navigate('InterestSelection', {
              formData: viewModel.getFormDataPerson()
            });
          }
        }}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
});
