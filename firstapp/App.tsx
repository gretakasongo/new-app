import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';



  type RootStackParamList = {
    Home: undefined,
    View: {
      NameSend: string;
      SurnameSend: string;
    };
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  type MainSreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
  type ViewDetailsProps = NativeStackScreenProps<RootStackParamList, 'View'>;
  
  export default function App() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="View" component={ViewDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

function MainScreen() {
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState(''); 

  console.log("EBAA");


return(
   <View>
      <Image style={styles.mainImg} source={require('./assets/Images/VSCode.jpg')} />
      <Text style={styles.welcomeTxt}> Welcome to my app!</Text>
      <View style={styles.inputFlex}>
        <Text style={styles.headingTxt}>Enter your name</Text>
        <TextInput style={styles.inputBoxTxt} placeholder="Greta"
        onChangeText={newText => setName(newText)} />
        <Text style={styles.headingTxt}>Enter your surname</Text>
        <TextInput style={styles.inputBoxTxt} placeholder="Kasongo"
        onChangeText={newText => setSurname(newText)} />
      </View>
      <Button title="Add User"
       onPress={() => {
         console.log("Name:"+ Name +
         "Surname:"+ Surname);
         }} />
      <StatusBar style="auto" />
    </View>)}

function ViewDetails({ navigation,route }: ViewDetailsProps) {
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;
  
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name: {NameGet}</Text>
      <Text>Surname: {SurnameGet}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 50,
    color: "purple",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  headingTxt: {
    fontWeight: "bold",
  },
  inputBoxTxt: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
  mainImg: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,

  },
  inputFlex: {
    justifyContent: "space-evenly",
    marginTop: 20,
  }
 
});
