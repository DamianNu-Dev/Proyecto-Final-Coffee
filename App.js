import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './src/presentation/screens/WelcomeScreen';
import LoginScreen from './src/presentation/screens/LoginScreen';
import RegisterScreen from './src/presentation/screens/RegisterScreen';

export default function App() {
  // El estado inicial es 'welcome' para que aparezca la imagen y el botón Get Started
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  // Esta función se ejecuta cuando presionas "Get Started"
  const handleGetStarted = () => {
    setCurrentScreen('login');
  };

  // Esta función se ejecuta cuando presionas "Crear cuenta"
  const handleGoToRegister = () => {
    setCurrentScreen('register');
  };

  // Esta función se ejecuta cuando presionas "Iniciar Sesión" desde registro
  const handleGoToLogin = () => {
    setCurrentScreen('login');
  };

  // Esta función se ejecuta cuando el login es exitoso
  const handleLoginSuccess = (email) => {
    setUserEmail(email);
    setCurrentScreen('home');
  };

  // Esta función se ejecuta cuando el registro es exitoso
  const handleRegisterSuccess = ({ username, email }) => {
    setUserName(username);
    setUserEmail(email);
    setCurrentScreen('home');
  };

  // Esta función permite regresar a la pantalla anterior
  const handleGoBack = () => {
    if (currentScreen === 'login' || currentScreen === 'register') {
      setCurrentScreen('welcome');
    } else if (currentScreen === 'home') {
      setCurrentScreen('login');
    }
  };

  return (
    <View style={styles.container}>
      {/* Mostramos una pantalla u otra dependiendo del estado */}
      
      {currentScreen === 'welcome' && (
        <WelcomeScreen onGetStarted={handleGetStarted} onCreateAccount={handleGoToRegister} />
      )}

      {currentScreen === 'login' && (
        <LoginScreen 
          onLoginSuccess={handleLoginSuccess} 
          onGoBack={handleGoBack}
          onGoToRegister={handleGoToRegister}
        />
      )}

      {currentScreen === 'register' && (
        <RegisterScreen 
          onRegisterSuccess={handleRegisterSuccess} 
          onGoBack={handleGoBack}
          onGoToLogin={handleGoToLogin}
        />
      )}

      {currentScreen === 'home' && (
        <View style={styles.homeCenter}>
          <Text style={styles.welcomeText}>¡Bienvenido, {userName || userEmail}! ☕</Text>
          <Text>Has ingresado correctamente a Cuerno Negro.</Text>
        </View>
      )}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E342E',
    marginBottom: 10
  }
});