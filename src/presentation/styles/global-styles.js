// Estilos globales para mantener el branding de la aplicación
import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  primary: '#4E342E', // Café oscuro
  secondary: '#7B3F00', // Café medio
  accent: '#FFD700', // Dorado/acento
  background: '#FFF8F0', // Fondo cálido
  text: '#3E2723', // Texto principal
  muted: '#A1887F', // Texto secundario
  inputBg: '#F5F5F5',
  border: '#E0E0E0',
  white: '#FFFFFF',
};

const FONTS = {
  regular: 'System',
  bold: 'System',
  cursive: Platform.OS === 'ios' ? 'Snell Roundhand' : 'serif',
};

const GLOBAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 16,
    fontFamily: FONTS.cursive,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.muted,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.inputBg,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 16,
    color: COLORS.text,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    fontSize: 64,
    marginBottom: 16,
    color: COLORS.primary,
  },
});

export { COLORS, FONTS, GLOBAL_STYLES };
