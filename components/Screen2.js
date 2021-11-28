import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as Device from 'expo-device';
import ListItem from './ListItem';
import RefreshButton from './RefreshButton';

class Screen2 extends Component {
    constructor(props) {
        super(props);
        this.dane = [
            {
                key: 'brand',
                value: Device.brand,
                id: 1
            },
            {
                key: 'deviceName',
                value: Device.deviceName,
                id: 2
            },
            {
                key: 'manufacturer',
                value: Device.manufacturer,
                id: 3
            },
            {
                key: 'modelName',
                value: Device.modelName,
                id: 4
            },
            {
                key: 'osName',
                value: Device.osName,
                id: 5
            },
            {
                key: 'osVersion',
                value: Device.osVersion,
                id: 6
            },
            // {
            //     key: 'getDeviceTypeAsync',
            //     value: await Device.getDeviceTypeAsync();,
            // },
            {
                key: 'platformApiLevel',
                value: Device.platformApiLevel,
                id: 7
            },
            {
                key: 'totalMemory',
                value: Device.totalMemory,
                id: 8
            }
        ]
        this.state = {
            data: this.dane
        };
        this.refresh = this.refresh.bind(this)
    }

    deleteItemById = id => {
        var filteredData = this.state.data.filter(item => item.id !== id);
        this.setState({ data: filteredData });
    }

    refresh() {
        this.setState({ data: this.dane });
        console.log('huj')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.refreshBtnView}>
                    <RefreshButton testProp1="123" refresh={() => this.refresh}></RefreshButton>
                </View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <ListItem klucz={item.key} value={item.value} usun={() => this.deleteItemById(item.id)}></ListItem>}
                />
            </View>
        );
    }
}

RefreshButton.propTypes = {
    //testProp1: PropTypes.string.isRequired,
    testProp1: PropTypes.string.isRequired,
    refresh: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
    },
    refreshBtnView: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    },
    refreshBtnDiv: {
        backgroundColor: '#D4D4D4',
        borderRadius: 10,
        width: 150,
        padding: 10
    },
    refreshBtnTxt: {
        fontSize: 20,
        color: "#424242",
        textAlign: 'center'
    }
});

export default Screen2;
