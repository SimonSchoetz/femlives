'use client';

import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const EmailSignUpForm = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong!');
      }

      setSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Submission failed. Please try again.');
      } else {
        setError('An unknown error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='bg-background text-foreground p-8 rounded-lg shadow-lg max-w-md mx-auto'>
      <h2 className='text-2xl font-semibold text-fl-primary mb-6 text-center'>
        Sign Up for Email Notifications
      </h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <Input />
        <Button buttonLabel='Sign Up' />
      </form>
    </div>
  );
};
export default EmailSignUpForm;
