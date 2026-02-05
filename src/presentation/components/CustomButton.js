// Botón personalizado para Clean Architecture
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GLOBAL_STYLES } from '../styles/global-styles';

export default function CustomButton({ title, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={[GLOBAL_STYLES.button, style]} onPress={onPress}>
      <Text style={[GLOBAL_STYLES.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
