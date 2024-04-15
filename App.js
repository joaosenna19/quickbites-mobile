import React from 'react';
import { PaperProvider } from 'react-native-paper';
import MainLayout from './app/components/MainLayout'; 

export default function App() {
  return (
    <PaperProvider>
      <MainLayout />
    </PaperProvider>
  );
}