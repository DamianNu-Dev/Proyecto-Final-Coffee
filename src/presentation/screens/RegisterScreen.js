import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
  BackHandler, SafeAreaView, StatusBar, Dimensions, Image, ScrollView
} from 'react-native';
import { COLORS } from '../styles/global-styles';

const { width, height } = Dimensions.get('window');

export default function RegisterScreen({ onRegisterSuccess, onGoBack, onGoToLogin }) {
  const [username, setUsername] = useState('');
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

  const handleRegister = () => {
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      Alert.alert("Campos requeridos", "Por favor, completa todos los campos.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Contraseña débil", "La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    onRegisterSuccess({ username, email });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              
              {/* Sección Superior: Imagen con Corte Inclinado */}
              <View style={styles.headerSection}>
                <Image 
                  source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_1280.jpg' }} 
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
                  <Text style={styles.welcomeTitle}>Crear cuenta</Text>
                  <Text style={styles.subtitleText}>Únete a nuestra comunidad cafetera</Text>
                </View>

                <View style={styles.form}>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nombre de Usuario</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Tu nombre de usuario"
                      placeholderTextColor="#999"
                      value={username}
                      onChangeText={setUsername}
                      autoCapitalize="none"
                    />
                  </View>

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
                      placeholder="Mínimo 6 caracteres"
                      placeholderTextColor="#999"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                    />
                  </View>

                  <TouchableOpacity 
                    style={styles.registerBtn} 
                    onPress={handleRegister} 
                    activeOpacity={0.8}
                  >
                    <Text style={styles.registerBtnText}>Registrarme</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                  <Text style={styles.footerText}>¿Ya tienes una cuenta? </Text>
                  <TouchableOpacity onPress={onGoToLogin}>
                    <Text style={styles.loginText}>Inicia Sesión</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  scrollContent: {
    flexGrow: 1,
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
    paddingTop: 12,
    backgroundColor: COLORS.primary,
  },
  branding: {
    marginBottom: 18,
    alignItems: 'center',
  },
  brandTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: COLORS.secondary,
    letterSpacing: 4,
    marginBottom: 6,
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  subtitleText: {
    fontSize: 14,
    color: COLORS.muted,
    marginTop: 4,
    opacity: 0.8,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.muted,
    marginBottom: 7,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  input: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingHorizontal: 16,
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
  registerBtn: {
    backgroundColor: COLORS.secondary,
    height: 52,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
  },
  registerBtnText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 30,
    paddingTop: 16,
  },
  footerText: {
    color: COLORS.muted,
    fontSize: 14,
  },
  loginText: {
    color: COLORS.secondary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
