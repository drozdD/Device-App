import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import Img from "./icon.jpg"

class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.view}>
                <View style={{ flex: 1 }}></View>
                <View style={styles.main}>
                    <Text style={styles.header}>Device App</Text>
                    <Image source={Img} style={styles.image} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 50,
        color: 'grey'
    },
    image: {
        borderRadius: 9999,
        width: 200,
        height: 200
    }
});

export default Screen1;
