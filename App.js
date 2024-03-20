import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nera</Text>
      <Image source={require('./assets/Icone.png')} style={styles.img}/>
      <StatusBar style="auto" />
    </View>
  );
}
