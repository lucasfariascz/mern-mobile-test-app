import { makeAutoObservable } from 'mobx';
import { FormDataPerson } from 'models/types/formDataPerson';
import { FormErrors } from 'models/types/formErrors.types';
import * as Yup from 'yup';


export class FormViewModel {
  private data: FormDataPerson = {
    name: '',
    email: '',
    dateOfBirth: null
  };

  errors: FormErrors = {};

  constructor() {
    makeAutoObservable(this);
  }

  setField<K extends keyof FormDataPerson>(field: K, value: FormDataPerson[K]): void {
    this.data[field] = value;
    this.validateField(field);
  }

  getField<K extends keyof FormDataPerson>(field: K): FormDataPerson[K] {
    return this.data[field];
  }

  private validateField(field: keyof FormDataPerson): void {
    const schema = Yup.object().shape({
      name: Yup.string().required('Nome é obrigatório'),
      email: Yup.string().email('Email inválido').required('Email é obrigatório'),
      dateOfBirth: Yup.date().nullable()
    });

    try {
      schema.validateSyncAt(field, this.data);
      delete this.errors[field];
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        this.errors[field] = error.message;
      }
    }
  }

  isValid(): boolean {
    return Object.keys(this.errors).length === 0;
  }

  getFormDataPerson(): FormDataPerson {
    return { ...this.data };
  }
}