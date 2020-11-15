import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button,
    ScrollView,
    Image,
} from 'react-native';

import {
    universalStyles
} from '../styling/universal';


export default function Home ({ navigation }) {

    
    const pressHandler = () => {
        navigation.navigate('Appointment')
    }

    return (
        <View style={universalStyles.container}>
            <ScrollView>
                <Text style={universalStyles.headerText}>
                    Take a look at some offered products.
                    </Text>
                <View style={universalStyles.img}>
                    <Image
                        source={require('../assets/1.jpg')}
                    />
                    <Text style={universalStyles.parag}>
                    A wide variety of food stuffs to choose from.
                    </Text>
                    <Text></Text>
                </View>
                <View style={universalStyles.img}>
                    <Image
                        source={require('../assets/2.jpg')}
                    />
                    <Text style={universalStyles.parag}>
                    A wide variety of soft drinks to choose from.
                    </Text>
                    <Text></Text>
                </View>
                <View style={universalStyles.img}>
                    <Image
                        source={require('../assets/3.jpg')}
                    />
                    <Text style={universalStyles.parag}>
                    Toiletries too? the sellers have it all.
                    </Text>
                    <Text></Text>
                </View>
                <View style={universalStyles.img}>
                    <Image
                        source={require('../assets/4.jpg')}
                    />
                    <Text style={universalStyles.parag}>
                    Fresh and well packaged vegetables to choose from as well.
                    </Text>
                    <Text></Text>
                </View>
                <View style={universalStyles.img}>
                    <Image
                        source={require('../assets/5.jpg')}
                    />
                    <Text style={universalStyles.parag}>
                    Once you choose the products that you need and contact us, we will delivery as soon as the order is placed. 
                    </Text>
                    <Text></Text>
                </View>
                <View>
                    <Text style={universalStyles.parag}>
                    Call us, Order and We deliver! 
                    </Text>
                    <Button title='go to Appointment' onPress={ pressHandler } />
                </View>
            </ScrollView>
        </View>
    )
}