import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


class RefreshButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={styles.refreshBtnDiv} onPress={this.props.refresh()}>
                <Text style={styles.refreshBtnTxt}>Refresh Info</Text>
            </TouchableOpacity>
        );
    }
}




const styles = StyleSheet.create({
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


export default RefreshButton;
