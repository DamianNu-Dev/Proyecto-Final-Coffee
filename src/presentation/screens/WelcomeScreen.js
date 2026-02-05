import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Dimensions,
  StatusBar,
  SafeAreaView 
} from 'react-native';
import { COLORS, FONTS, GLOBAL_STYLES } from '../styles/global-styles';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ onGetStarted }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>☕</Text>
            <View style={styles.logoGlow} />
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          <Text style={styles.welcomeText}>Bienvenido a</Text>
          <Text style={styles.brandName}>Cuerno Negro</Text>
          <View style={styles.divider} />
          <Text style={styles.tagline}>Saborea. Sonríe. Crea.</Text>
          <Text style={styles.description}>
            Descubre la mejor experiencia de café hecha especialmente para ti
          </Text>
        </View>

        {/* Footer Section */}
        <View style={styles.footerSection}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={onGetStarted}
            activeOpacity={0.9}
          >
            <Text style={styles.buttonText}>Comenzar</Text>
          </TouchableOpacity>
          
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  headerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoIcon: {
    fontSize: 100,
    textAlign: 'center',
  },
  logoGlow: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    zIndex: -1,
  },
  contentSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: COLORS.white,
    opacity: 0.8,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  brandName: {
    fontSize: 44,
    fontWeight: 'bold',
    color: COLORS.white,
    fontFamily: FONTS.cursive,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: COLORS.accent,
    marginVertical: 20,
    borderRadius: 2,
  },
  tagline: {
    fontSize: 20,
    color: COLORS.accent,
    fontWeight: '600',
    marginBottom: 12,
    letterSpacing: 1,
  },
  description: {
    fontSize: 15,
    color: COLORS.white,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  footerSection: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    width: width * 0.85,
    height: 56,
    backgroundColor: COLORS.white,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    letterSpacing: 1,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  dotActive: {
    backgroundColor: COLORS.accent,
    width: 24,
  },
});