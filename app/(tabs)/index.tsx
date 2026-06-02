import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#d9e7f1', dark: '#1c2831' }}
      headerImage={
        <View style={styles.banner}>
          <Image
            source={require('@/assets/images/kingdom.jpg')}
            style={styles.kingdomImage}
            contentFit="cover"
          />
          <View style={styles.bannerOverlay} />
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Cronicas de Kingdom</ThemedText>
        <ThemedText style={styles.emoji}>⚔️</ThemedText>
      </ThemedView>

      <ThemedText style={styles.intro}>
        Tras iniciar sesion, este es tu punto de partida para seguir la historia de Qin y el sueno de Shin.
      </ThemedText>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">El Estado de Qin 🦅</ThemedText>
        <ThemedText>
          Gobernado por el joven rey <ThemedText type="defaultSemiBold">Ei Sei</ThemedText>, su objetivo
          es lograr lo imposible: la unificacion total de China. Su fuerza militar esta
          respaldada por los legendarios Seis Grandes Generales y unidades independientes como la{' '}
          <ThemedText type="defaultSemiBold">Unidad Hi Shin</ThemedText>.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Los Estados Combatientes ⚔️</ThemedText>
        <ThemedText>
          Qin no esta solo. Para unificar China, debera derrotar a las otras seis superpotencias:
          Zhao (liderado por el genio Riboku), Chu (el estado mas grande), Wei, Han, Yan y Qi.
          Cada batalla definira el destino del continente.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">El Camino del Gran General 🐎</ThemedText>
        <ThemedText>
          Aqui seguiras los pasos de Shin, un huerfano de guerra que comienza como soldado raso
          y lucha en las batallas mas sangrientas para cumplir su promesa: convertirse en el
          Gran General bajo los Cielos mas fuerte de la historia.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  emoji: {
    lineHeight: 34,
  },
  intro: {
    marginBottom: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 10,
    borderRadius: 14,
    padding: 14,
    backgroundColor: 'rgba(127, 127, 127, 0.08)',
  },
  banner: {
    flex: 1,
    overflow: 'hidden',
  },
  kingdomImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(12, 18, 24, 0.25)',
  },
});
