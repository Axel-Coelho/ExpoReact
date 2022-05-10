import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../style/Footer.style';

export default function Footer(props) {
    return (
        <View style={styles.wrapper}>
            <Text>{props.footer}</Text>
        </View>
    );
}
