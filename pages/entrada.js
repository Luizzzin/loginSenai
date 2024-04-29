import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';

export default function Acesso() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
     
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Animatable.View animation="fadeInUp" delay={200} style={styles.container}>
          <Animatable.View animation="fadeInLeft" delay={610} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-vindo(a)</Text>
          </Animatable.View>
          <View style={styles.containerForm}>
            <Text style={styles.title}>
              E-mail
            </Text>
            <TextInput
              placeholder='Digite um email...'
              style={styles.input}
            />
            <TextInput
              placeholder='Sua senha'
              style={styles.input}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Acessar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.registerText}>
                Não possui uma conta? Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#880000'
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 32,
    fontWeight: 'bold',
    color: "#FFF"
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%"
  },
  title: {
    fontSize: 22,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 15,
    fontSize: 16
  },
  button: {
    backgroundColor: '#880000',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: '#a1a1a1'
  }
})