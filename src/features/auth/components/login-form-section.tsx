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
 * Login form section component
 * Provides user authentication form with email and password fields
 */
function LoginFormSection(): React.ReactElement {
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
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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
      console.log('Login form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle login submission here
      alert('Login successful! (This is a demo)');
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md p-8 mb-8 mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
      <header className="mb-8">
        <h1 className="font-heading tracking-tight text-4xl font-bold mb-4">Login</h1>
        <p className="text-gray-500">Welcome back! Please enter your details.</p>
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
          id="login-email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          required
          autoComplete="email"
        />

        <PasswordInput
          label="Password"
          id="login-password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          required
          className="mb-2"
        />

        <div className="text-right mb-8">
          <a
            className="inline-block text-sm font-semibold text-yellowGreen-700 hover:text-yellowGreen-600 focus:outline-none focus:underline"
            href="#"
            aria-label="Reset your password"
          >
            Forgot Password?
          </a>
        </div>

        <Button
          type="submit"
          fullWidth
          loading={loading}
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Login'}
        </Button>
      </form>
    </div>
  );
}

export default LoginFormSection;