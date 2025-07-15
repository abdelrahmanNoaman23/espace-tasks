import React, { useState } from 'react';
import { Input, SubmitButton, ErrorMessage, SuccessMessage } from '../../ui';
import { useForm } from '../../../hooks';
import { registrationSchema } from '../../../validation';
import { FORM_INITIAL_VALUES, FORM_MESSAGES } from '../../../constants';

const RegistrationForm = () => {
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(FORM_INITIAL_VALUES, registrationSchema);

  const onSubmit = async (formData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitMessage(FORM_MESSAGES.SUCCESS);
      setSubmitError('');
    } catch (error) {
      setSubmitError(FORM_MESSAGES.ERROR);
      setSubmitMessage('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(onSubmit);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Account</h2>
      
      <div>
        <ErrorMessage message={submitError} />
        <SuccessMessage message={submitMessage} />
        
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && errors.firstName}
            placeholder="Enter your first name"
          />
          <Input
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && errors.lastName}
            placeholder="Enter your last name"
          />
        </div>

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          placeholder="Enter your email address"
        />

        <Input
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phoneNumber && errors.phoneNumber}
          placeholder="Enter your phone number"
        />

        <Input
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.dateOfBirth && errors.dateOfBirth}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
          placeholder="Create a strong password"
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirmPassword && errors.confirmPassword}
          placeholder="Confirm your password"
        />

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={values.termsAccepted}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-blue-600 hover:text-blue-500">
                Terms and Conditions
              </a>
            </span>
          </label>
          {touched.termsAccepted && errors.termsAccepted && (
            <p className="mt-1 text-sm text-red-600">{errors.termsAccepted}</p>
          )}
        </div>

        <SubmitButton isSubmitting={isSubmitting} onClick={handleFormSubmit}>
          Create Account
        </SubmitButton>
      </div>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href="#" className="text-blue-600 hover:text-blue-500">
          Sign in
        </a>
      </p>
    </div>
  );
};

export default RegistrationForm;