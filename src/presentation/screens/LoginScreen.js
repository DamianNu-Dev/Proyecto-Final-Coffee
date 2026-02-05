import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
  BackHandler, SafeAreaView, StatusBar
} from 'react-native';
import { COLORS, GLOBAL_STYLES } from '../styles/global-styles';

export default function LoginScreen({ onLoginSuccess, onGoBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Manejar el botón de retroceso del dispositivo
  useEffect(() => {
    const backAction = () => {
      if (onGoBack) {
        onGoBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [onGoBack]);

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }
    onLoginSuccess(email);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            {/* Botón de retroceso */}
            <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
              <Text style={styles.backButtonText}>← Volver</Text>
            </TouchableOpacity>

            <Text style={styles.logo}>☕</Text>
            <Text style={styles.title}>Cuerno Negro</Text>
            <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
            
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor={COLORS.muted}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor={COLORS.muted}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
              </TouchableOpacity>

              <View style={styles.registerContainer}>
                <Text style={styles.registerText}>¿No tienes cuenta? </Text>
                <TouchableOpacity>
                  <Text style={styles.registerLink}>Regístrate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: { 
    flex: 1,
    backgroundColor: COLORS.background,
  },
  inner: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 24, 
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    zIndex: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
  },
  logo: {
    fontSize: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.muted,
    marginBottom: 40,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 52,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 16,
    color: COLORS.text,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: '500',
  },
  button: { 
    width: '100%', 
    height: 52,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  registerText: {
    fontSize: 14,
    color: COLORS.muted,
  },
  registerLink: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});