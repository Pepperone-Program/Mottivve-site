'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import FormField from '@/components/ui/form-field';
import PasswordInput from '@/components/ui/password-input';
import Button from '@/components/ui/button';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

/**
 * Registration form section component
 * Provides user registration form with email and password fields
 */
function RegisterFormSection(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      console.log('Register form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle registration submission here
      alert('Registration successful! (This is a demo)');
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ general: 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md p-8 mb-8 mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
      <header className="mb-8">
        <h1 className="font-heading tracking-tight text-4xl font-bold mb-4">Sign up</h1>
        <p className="text-gray-500">Create your account with your work email.</p>
      </header>

      <form onSubmit={handleSubmit} noValidate>
        {errors.general && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg" role="alert">
            <p className="text-sm text-red-600">{errors.general}</p>
          </div>
        )}

        <FormField
          label="Email"
          type="email"
          id="register-email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          required
          autoComplete="email"
          description="We'll use this for your account and important updates"
        />

        <PasswordInput
          label="Password"
          id="register-password"
          name="password"
          placeholder="Create a strong password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          required
          className="mb-8"
        />

        <Button
          type="submit"
          fullWidth
          loading={loading}
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Sign up'}
        </Button>
      </form>
    </div>
  );
}

export default RegisterFormSection;