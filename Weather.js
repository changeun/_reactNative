import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({temp}) {
    return( 
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96}
                    name="weather-lightning-rainy" 
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>Press ? to show a list of all available commands</Text>
                <Text style={styles.subtitle}>Logs for your project will appear below. Press Ctrl+C to exit.</Text>
            </View>
        </View>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Dizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ])
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 36
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 34,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        fontSize: 24
    },
    textContainer : {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})