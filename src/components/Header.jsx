import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../style/Header.style';

export default function Header(props) {
    return (
        <View style={styles.wrapper}>
            <Text>{props.title}</Text>
        </View>
    );
}
