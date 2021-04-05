import React, { useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {

  const [category, setCategory] =  useState();

  return <LoginScreen />;

}