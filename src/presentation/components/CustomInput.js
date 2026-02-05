// Componente de entrada personalizado para Clean Architecture
import React from 'react';
import { TextInput } from 'react-native';
import { COLORS, GLOBAL_STYLES } from '../styles/global-styles';

export default function CustomInput({ value, onChangeText, placeholder, secureTextEntry, keyboardType, style }) {
  return (
    <TextInput
      style={[GLOBAL_STYLES.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={COLORS.muted}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize="none"
    />
  );
}
