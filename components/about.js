import React from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import {
    universalStyles
} from '../styling/universal';


export default function About () {
    return (
        <View style={universalStyles.container}>
            <Text style={universalStyles.titleText}>
                Kazi's Web
            </Text>
            <Text style={universalStyles.parag}>
                We act as a link between a customer and a supplier, find all your groceries and make an order for them to be delivered at your doorstep at an afordable price, for as low as k10, depending on delivery location.
            </Text>
            <Text></Text>
            <Text style={universalStyles.titleText}>
                Designed products and items.
            </Text>
            <Text style={universalStyles.parag}>
            We have been offering our services to customers and as well as the suppliers or the sellers, inorder to make buying and selling of groceries much easier for both parties that are involved. 
            </Text>
            <Text></Text>
            <Text style={universalStyles.titleText}>
                A large collection of grocery products such as Food, drinks, toiletries and many other products.
            </Text>
            <Text style={universalStyles.parag}>
               For delivery of products to areas in Lusaka, please call +260974318056 to talk to our agents for more information and guide on the delivery process.
            </Text>
        </View>
    )
}