"use client";

import { useState } from 'react';
import toast from 'react-hot-toast';

// This component is for development testing only
// Remove this component in production

export function ErrorTest() {
  const [showError, setShowError] = useState(false);

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const triggerError = () => {
    throw new Error('This is a test error for development purposes');
  };

  const triggerToastError = () => {
    toast.error('This is a test error notification');
  };

  const triggerToastSuccess = () => {
    toast.success('This is a test success notification');
  };

  const triggerToastLoading = () => {
    const toastId = toast.loading('This is a test loading notification');
    setTimeout(() => {
      toast.success('Loading completed!', { id: toastId });
    }, 2000);
  };

  if (showError) {
    triggerError();
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-md border border-red-200 rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-red-600">Error Testing Tools</h4>
        <button
          onClick={() => setShowError(true)}
          className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Trigger Error
        </button>
      </div>
      <div className="space-y-2">
        <button
          onClick={triggerToastError}
          className="block w-full text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
        >
          Test Error Toast
        </button>
        <button
          onClick={triggerToastSuccess}
          className="block w-full text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200"
        >
          Test Success Toast
        </button>
        <button
          onClick={triggerToastLoading}
          className="block w-full text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
        >
          Test Loading Toast
        </button>
      </div>
    </div>
  );
}