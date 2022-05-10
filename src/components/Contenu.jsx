import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../style/Contenu.style';

export default function Contenu() {
    return (
        <View style={styles.wrapper}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}
