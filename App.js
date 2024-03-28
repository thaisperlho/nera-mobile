import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nera</Text>
      <Image source={require('./assets/Icone.png')} style={styles.img}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.rosa,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
});
