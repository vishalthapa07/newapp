import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {number, object} from 'yup';
import {Formik} from 'formik';

const PasswordSchema = object().shape({
  passwordLength: number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});

const App = () => {
  const [password, setPasswprd] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPasswprd(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }

    return result;
  };

  const resetPasswordState = () => {
    setPasswprd('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formConatiner}>
          <Text style={styles.title}>
            <Formik
              initialValues={{passwordLength: ''}}
              validationSchema={PasswordSchema}
              onSubmit={values => {
                console.log('formik values...', values);
                generatePasswordString(+values.passwordLength);
              }}>
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleSubmit,
                handleReset,
                /* and other goodies */
              }) => (
                <>
                  <View style={styles.inputWrapper}></View>
                  <View style={styles.inputWrapper}></View>
                  <View style={styles.inputWrapper}></View>
                  <View style={styles.inputWrapper}></View>
                  <View style={styles.inputWrapper}></View>

                  <View style={styles.formActions}></View>
                </>
              )}
            </Formik>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default App;
