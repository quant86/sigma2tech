import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add intersection observer polyfill for older browsers
const IntersectionObserverPolyfill = () => {
  if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported in this browser');
  }
};

// Call the polyfill
IntersectionObserverPolyfill();

// DOM Content Loaded event listener
document.addEventListener('DOMContentLoaded', () => {
  // Animate fade-in elements that are already visible
  setTimeout(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('appear');
      }
    });
  }, 100);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);