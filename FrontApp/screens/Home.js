import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import MapsComponent from '../components/maps/MapsComponent';
import MapView from 'react-native-maps'

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>Welcome</Text>

                <Button
                    title="Add an Item"
                    onPress={() => this.props.navigation.navigate('AddItem')}
                />
                <Button
                    title="List of Items"
                    color="green"
                    onPress={() => this.props.navigation.navigate('List')}
                />
                <MapsComponent />
            </View>
        );
    }
}