import { StatusBar } from 'expo-status-bar';
import { useState,useRef,useEffect, ReactNode } from 'react';
import { StyleSheet, Text, View,TextInput, Button, Image,SafeAreaView,ScrollView, Animated,ViewStyle,StyleProp} from 'react-native';
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

  type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
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

function MainScreen({ navigation }: MainScreenProps) {

  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Error, setError] = useState(false);

  console.log("App works");

  return(
   <View>
    <SafeAreaView>
      <ScrollView>
      
      <Image style={styles.mainImg} source={require('./assets/Images/VSCode.jpg')} />

      <Text style={styles.welcomeTxt}> Welcome to my app!</Text>
      
    <FadeInView>

      <Text style={Error? styles.redTxt: styles.Blank}>{Error?"Please enter your info":""}</Text>

      <View style={styles.inputFlex}>
        <Text style={styles.headingTxt}>Enter your name</Text>
        <TextInput style={styles.inputBoxTxt} placeholder="Greta"
        onChangeText={newText => setName(newText)} />

        <Text style={styles.headingTxt}>Enter your surname</Text>
        <TextInput style={styles.inputBoxTxt} placeholder="Kasongo"
        onChangeText={newText => setSurname(newText)} />
      </View>
    </FadeInView>  

      <Button title="Add User"
       onPress={() => {

        if(isEmpty(Name) ==(false) && isEmpty(Surname) ==(false)){
        navigation.navigate('View', {
          NameSend: Name,
          SurnameSend: Surname,
        });
        setError(false);
      }
      else{
        setError(true);
      }
      }}/>
      
    <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    </View>
    );
  }

function ViewDetails({ navigation,route }: ViewDetailsProps){
  
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;
  
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name: {NameGet}</Text>
      <Text>Surname: {SurnameGet}</Text>
    </View>
  );
};

function isEmpty(value: any){
  return(
    (value === null) ||
    (value.hasOwnProperty('length') && value.length === 0) ||
    (value.constructor === Object && Object.keys(value).length === 0)
  )
}

interface FadeInterviewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FadeInView = ({ children, style }: FadeInterviewProps) =>{
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  },[fadeAnim])

  return(
    <Animated.View style={[
      style,
      { opacity: fadeAnim },
    ]}>
      {children}
    </Animated.View>
  );
};


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
  },

  redTxt: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },

  Blank: {
    fontSize: 0,
  }
 
});
