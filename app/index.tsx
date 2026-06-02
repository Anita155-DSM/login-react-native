import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { router } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const DEMO_EMAIL = 'demo@login.com';
const DEMO_PASSWORD = '123456';

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const isDark = colorScheme === 'dark';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError('Completa email y contraseña.');
      return;
    }

    if (normalizedEmail !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      setError('Credenciales inválidas.');
      return;
    }

    setError('');
    router.replace('/(tabs)');
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <View
        pointerEvents="none"
        style={[styles.glow, styles.glowTop, { backgroundColor: colors.tint, opacity: isDark ? 0.22 : 0.14 }]}
      />
      <View
        pointerEvents="none"
        style={[styles.glow, styles.glowBottom, { backgroundColor: isDark ? '#6f7cff' : '#0a7ea4', opacity: isDark ? 0.16 : 0.1 }]}
      />

      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined, default: 'padding' })}
        style={styles.flex}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <ThemedText type="title" style={styles.title}>
              Bienvenido
            </ThemedText>
            <ThemedText style={[styles.subtitle, { color: colors.icon }]}>Ingresa para continuar a la app.</ThemedText>
          </View>

          <View style={[styles.card, { backgroundColor: isDark ? '#1b1e20' : '#ffffff', borderColor: isDark ? '#2b3135' : '#dbe5ea' }]}>
            <View style={styles.fieldGroup}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Email
              </ThemedText>
              <TextInput
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="demo@login.com"
                placeholderTextColor={isDark ? '#8f9aa0' : '#72808a'}
                style={[
                  styles.input,
                  {
                    backgroundColor: isDark ? '#111416' : '#f5f8fa',
                    borderColor: isDark ? '#31383c' : '#d7e1e7',
                    color: colors.text,
                  },
                ]}
                value={email}
                onChangeText={(value) => {
                  setEmail(value);
                  if (error) {
                    setError('');
                  }
                }}
              />
            </View>

            <View style={styles.fieldGroup}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Contraseña
              </ThemedText>
              <TextInput
                autoComplete="password"
                placeholder="123456"
                placeholderTextColor={isDark ? '#8f9aa0' : '#72808a'}
                secureTextEntry
                style={[
                  styles.input,
                  {
                    backgroundColor: isDark ? '#111416' : '#f5f8fa',
                    borderColor: isDark ? '#31383c' : '#d7e1e7',
                    color: colors.text,
                  },
                ]}
                value={password}
                onChangeText={(value) => {
                  setPassword(value);
                  if (error) {
                    setError('');
                  }
                }}
              />
            </View>

            {error ? <ThemedText style={styles.error}>{error}</ThemedText> : null}

            <Pressable
              accessibilityRole="button"
              onPress={handleLogin}
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: colors.tint, opacity: pressed ? 0.85 : 1 },
              ]}
            >
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>
                Entrar
              </ThemedText>
            </Pressable>

            <View style={styles.hint}>
              <ThemedText style={[styles.hintLabel, { color: colors.icon }]}>Acceso de prueba</ThemedText>
              <ThemedText style={[styles.hintValue, { color: colors.text }]}>demo@login.com / 123456</ThemedText>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 24,
  },
  header: {
    gap: 10,
  },
  title: {
    letterSpacing: -0.6,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    borderRadius: 28,
    borderWidth: 1,
    padding: 20,
    gap: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 3,
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: Fonts.sans,
  },
  error: {
    color: '#d12f2f',
    fontSize: 14,
  },
  button: {
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
  hint: {
    gap: 2,
    paddingTop: 4,
  },
  hintLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  hintValue: {
    fontSize: 14,
  },
  glow: {
    position: 'absolute',
    borderRadius: 999,
  },
  glowTop: {
    width: 220,
    height: 220,
    top: -60,
    right: -60,
  },
  glowBottom: {
    width: 180,
    height: 180,
    bottom: 20,
    left: -50,
  },
});