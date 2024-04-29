import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';

export default function Bem_Vindo() {

    const navigation = useNavigation();
    useFonts({ 'Oswald': require('../assets/fonts/Oswald-VariableFont_wght.ttf') });

    return (
        <Animatable.View delay={100} animation='fadeInUp' style={styles.container}>
           
            <View style={styles.containerLogo}>
                <Animatable.Image
                    delay={610}
                    animation="fadeInDown"
                    source={require("../assets/logo_Senai.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>
                    Monitore e organize seus recursos didáticos de qualquer lugar!
                </Text>
                <Text style={styles.text}>
                    Faça o login para começar
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('entrada')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Acessar
                    </Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerLogo: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: "70%"

    },
    containerForm: {
        flex: 1,
        backgroundColor: '#880000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 28,
        marginTop: 20,
        marginBottom: 12,
        color: "#FFF",
        fontFamily: 'Oswald',
    },
    text: {
        color: '#a1a1a1',
        fontSize : 18,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '65%',
        alignSelf: 'center',
        bottom: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 22,
        color: '#880000',
        fontWeight: 'bold'
    }
})