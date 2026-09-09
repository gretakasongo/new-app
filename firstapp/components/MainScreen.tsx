import { useState } from 'react';
import {Text,View,TextInput, TouchableOpacity,Image,SafeAreaView,ScrollView,} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../components/Styles';
import FadeInView from '../components/FadeinView';


function isEmpty(value: any) {
  return (
    value === null ||
    (value.hasOwnProperty('length') && value.length === 0) ||
    (value.constructor === Object &&
      Object.keys(value).length === 0)
  );
}

type MainScreenProps = {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
};

function MainScreen({ navigation }: MainScreenProps) {


  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Error, setError] = useState(false);

  console.log("App works");

  return (
    <View>

      <SafeAreaView>

        <ScrollView>

          <Image
            style={styles.mainImg}
            source={require('../assets/Images/SpiderEyes.jpg')}
          />

          <Text style={styles.welcomeTxt}>
            Welcome to my app!
          </Text>

          <FadeInView>

            <Text
              style={
                Error
                  ? styles.redTxt
                  : styles.Blank
              }
            >
              {Error
                ? "Please enter your info"
                : ""}
            </Text>

            <View style={styles.inputFlex}>

              <Text style={styles.headingTxt}>
                Enter your name
              </Text>

              <TextInput
                style={styles.inputBoxTxt}
                placeholder="Greta"
                onChangeText={newText =>
                  setName(newText)
                }
              />

              <Text style={styles.headingTxt}>
                Enter your surname
              </Text>

              <TextInput
                style={styles.inputBoxTxt}
                placeholder="Kasongo"
                onChangeText={newText =>
                  setSurname(newText)
                }
              />

            </View>

          </FadeInView>

          <TouchableOpacity
            style={styles.customButton}
            onPress={() => {

              if (
                isEmpty(Name) === false &&
                isEmpty(Surname) === false
              ) {

                navigation.navigate(
                  'ViewDetails',
                  {
                    NameSend: Name,
                    SurnameSend: Surname,
                  }
                );

                setError(false);

              } else {

                setError(true);

              }

            }}
          >

            <Text style={styles.customButtonText}>
              Add User
            </Text>

          </TouchableOpacity>

          <StatusBar style="auto" />

        </ScrollView>

      </SafeAreaView>

    </View>
  );
}
export default MainScreen;