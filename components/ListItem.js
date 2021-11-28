import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Img from "./icon.jpg"

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={Img} style={styles.image} />
                <View style={styles.discrition}>
                    <Text style={styles.h1}>{this.props.klucz}</Text>
                    <Text style={styles.h2}>{this.props.value}</Text>
                </View>
                <View style={styles.deleteBtnView}>
                    <TouchableOpacity style={styles.deleteBtnDiv} onPress={() => this.props.usun()}>
                        <Text style={styles.deleteBtnTxt}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 9999,
    },
    discrition: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        flex: 1,
        fontSize: 20
    },
    h2: {
        flex: 1,
        color: 'grey'
    },
    deleteBtnView: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        padding: 10
    },
    deleteBtnDiv: {
        backgroundColor: '#D4D4D4',
        borderRadius: 10,
        width: 100,
        padding: 10
    },
    deleteBtnTxt: {
        fontSize: 20,
        color: "#424242",
        textAlign: 'center'
    }
});

export default ListItem;
