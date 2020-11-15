import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {
    universalStyles
} from '../styling/universal';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function Appointment () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <View style={universalStyles.container}>
            <Text style={universalStyles.titleText}>
                Please enter your name :
            </Text>
            <TextInput 
                style={universalStyles.nameInput}
                placeholder='e.g. Paul Pogba'
                onChangeText={(val) => setName(val)}
            />
            <Text style={universalStyles.titleText}>
                Please enter your email :
            </Text>
            <TextInput 
                style={universalStyles.nameInput}
                placeholder='e.g. paul@gmail.com'
                onChangeText={(val) => setName(val)}
            />
            <TouchableOpacity
                onPress={() => {
                    alert("Order Delivery has been reserved, Please check your email for more details or Call +260974318056")
                }}
            >
                <Text style={universalStyles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
}
