'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import toast from 'react-hot-toast';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Show user-friendly error message
    toast.error('Something went wrong. Please refresh the page and try again.');

    // In production, you might want to send this to an error reporting service
    // like Sentry, LogRocket, etc.
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/80">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="text-6xl mb-4">😵</div>
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-muted mb-6">
              We encountered an unexpected error. Please refresh the page and
              try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
