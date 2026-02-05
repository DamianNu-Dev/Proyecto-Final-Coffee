import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
  BackHandler, StatusBar, Dimensions, Image, ScrollView
} from 'react-native';
import { COLORS } from '../styles/global-styles';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ onLoginSuccess, onGoBack, onGoToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const backAction = () => {
      if (onGoBack) {
        onGoBack();
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [onGoBack]);

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert("Campos requeridos", "Por favor, completa tu correo y contraseña.");
      return;
    }
    onLoginSuccess(email);
  };

  return (
    <ScrollView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            
            {/* Sección Superior: Imagen con Corte Inclinado */}
            <View style={styles.headerSection}>
              <Image 
                source={{ uri: 'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg' }} 
                style={styles.headerImage}
                resizeMode="cover"
              />
              <View style={styles.diagonalContainer}>
                <View style={styles.diagonalOverlay} />
              </View>
            </View>

            {/* Sección Inferior: Formulario sobre Fondo Crema */}
            <View style={styles.contentSection}>
              <View style={styles.branding}>
                <Text style={styles.brandTitle}>CUERNO NEGRO</Text>
                <Text style={styles.welcomeTitle}>Bienvenido de nuevo</Text>
              </View>

              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Correo Electrónico</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="tu@correo.com"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Contraseña</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="••••••••"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                  <TouchableOpacity style={styles.forgotPass}>
                    <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity 
                  style={styles.loginBtn} 
                  onPress={handleLogin} 
                  activeOpacity={0.8}
                >
                  <Text style={styles.loginBtnText}>Iniciar Sesión</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.footer}>
                <Text style={styles.footerText}>¿No tienes una cuenta? </Text>
                <TouchableOpacity onPress={onGoToRegister}>
                  <Text style={styles.signUpText}>Regístrate</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary, // Fondo Crema
  },
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  // --- CABECERA CON CORTE DIAGONAL ---
  headerSection: {
    height: height * 0.35,
    width: width,
    position: 'relative',
    backgroundColor: COLORS.secondary,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  diagonalContainer: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 50,
  },
  diagonalOverlay: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: width,
    borderRightWidth: 0,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.primary,
  },
  // --- CONTENIDO ---
  contentSection: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: COLORS.primary,
  },
  branding: {
    marginBottom: 25,
    alignItems: 'center',
  },
  brandTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: COLORS.secondary,
    letterSpacing: 5,
    marginBottom: 8,
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.muted,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  input: {
    height: 52,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 15,
    color: COLORS.text,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotText: {
    fontSize: 13,
    color: COLORS.secondary,
    fontWeight: '500',
  },
  loginBtn: {
    backgroundColor: COLORS.secondary,
    height: 54,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
  },
  loginBtnText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  footerText: {
    color: COLORS.muted,
    fontSize: 14,
  },
  signUpText: {
    color: COLORS.secondary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});