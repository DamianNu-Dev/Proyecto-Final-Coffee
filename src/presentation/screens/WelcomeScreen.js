import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Dimensions, 
  Image,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { COLORS } from '../styles/global-styles';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ onGetStarted, onCreateAccount }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
      
      <View style={styles.content}>
        {/* Branding Superior */}
        <View style={styles.header}>
          <Text style={styles.brandName}>CUERNO NEGRO</Text>
          <View style={styles.brandDot} />
        </View>

        {/* Imagen Central - Sustituimos emojis por un componente visual limpio */}
        <View style={styles.imageContainer}>
          <View style={styles.imageBackgroundCircle} />
          {/* Imagen de café de alta calidad */}
          <Image 
            source={{ uri: 'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg' }} 
            style={styles.mainImage}
            resizeMode="cover"
          />
        </View>

        {/* Mensaje de Bienvenida con UX Focus */}
        <View style={styles.textContainer}>
          <Text style={styles.mainTitle}> Tu dosis diaria de perfección </Text>
          <Text style={styles.subtitle}>
            Vive el arte del café desde la comodidad de tu hogar.
          </Text>
        </View>

        {/* Botones Profesionales */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.primaryButton} 
            onPress={onGetStarted}
            activeOpacity={0.9}
          >
            <Text style={styles.buttonText}>Comenzar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton} 
            onPress={onCreateAccount}
            activeOpacity={0.7}
          >
            <Text style={styles.secondaryButtonText}>Crear una cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary, // Fondo café global
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginTop: 30,
  },
  brandName: {
    marginTop: 30,
    fontSize: 26,
    fontWeight: '900',
    color: COLORS.secondary,
    letterSpacing: 5,
  },
  brandDot: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.accent,
    borderRadius: 3,
    marginLeft: 4,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.35,
  },
  imageBackgroundCircle: {
    position: 'absolute',
    width: width * 0.75,
    height: width * 0.75,
    backgroundColor: 'rgba(78, 52, 46, 0.08)',
    borderRadius: width * 0.375,
  },
  mainImage: {
    width: width * 0.8,
    height: width * 0.8,
  },
  textContainer: {
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.secondary,
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.muted, // Usamos muted del global-styles
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  footer: {
    width: '100%',
    gap: 15,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: COLORS.secondary,
    height: 58,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  secondaryButton: {
    height: 58,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.secondary,
    backgroundColor: 'transparent',
  },
  secondaryButtonText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});