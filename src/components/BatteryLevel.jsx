export default class App extends React.Component {
    state = {
        batteryLevel: null,
    };

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    async _subscribe() {
        const batteryLevel = await Battery.getBatteryLevelAsync();
        this.setState({ batteryLevel });
        this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
            this.setState({ batteryLevel });
            console.log('batteryLevel changed!', batteryLevel);
        });
    }

    _unsubscribe() {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Current Battery Level: {this.state.batteryLevel}</Text>
            </View>
        );
    }
}

//test