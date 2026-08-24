import { StatusBar } from 'expo-status-bar';
import { useState,useRef,useEffect, ReactNode } from 'react';
import { StyleSheet, Text, View,TextInput, Button,TouchableOpacity, Image,SafeAreaView,ScrollView, Animated,ViewStyle,StyleProp, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RadioButton} from 'react-native-paper'
import {Easing} from 'react-native';



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
      
      <Image style={styles.mainImg} source={require('./assets/Images/SpiderEyes.jpg')} />

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
      <TouchableOpacity
      style={styles.customButton}
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
      }}
      >
        <Text style={styles.customButtonText}>Add User</Text>
      </TouchableOpacity>
      
    <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    </View>
    );
  }
  
  
function ViewDetails({ navigation,route }: ViewDetailsProps){
  
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;
  const [selectedValue, setSelectedValue] = useState('0');
  
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontWeight: "bold", fontSize: 30, textAlign: "center"}}>Welcome {NameGet} {SurnameGet}</Text>
        <Text> Please choose a language </Text>
      </View>

      <View style={styles.radioContainer}>
        <View style={styles.radioGroup}>
         
          <View style={styles.radioButton}>
            <RadioButton.IOS 
             value="1"
             status={selectedValue == "1" ? 'checked' : 'unchecked'}
             onPress={() => setSelectedValue("1")}
             color="#ffffff"
             
            />
            <Text style={styles.radioLabel} >React Native</Text>

          </View> 
           <View style={styles.radioButton}>
             <RadioButton.IOS 
               value="2"
               status={selectedValue == "2" ? 'checked' : 'unchecked'}
               onPress={() => setSelectedValue("2")}
               color="#ffffff"
              />
              <Text style={styles.radioLabel} >Kotlin</Text>
          </View> 
           <View style={styles.radioButton}>
              <RadioButton.IOS 
               value="3"
               status={selectedValue == "3" ? 'checked' : 'unchecked'}
               onPress={() => setSelectedValue("3")}
               color="#ffffff" 
              />
              <Text style={styles.radioLabel} >HTML & CSS</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

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
export function SlideIn({ children }: { children: ReactNode }) {
  const t = useRef(new Animated.Value(40)).current;
  const o = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(t, {
        toValue: 0,
        duration: 450,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true
      }),
      Animated.timing(o, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true
      })
    ]).start();
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateY: t }], opacity: o }}>
      {children}
    </Animated.View>
  );
};
export function SpringPop ({ children }: { children: ReactNode }) {
  const s = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(s, {
      toValue: 1,
      friction: 5,
      tension: 120,
      useNativeDriver: true
    }).start();
  }, []);
  return <Animated.View style={{ transform: [{ scale: s }] }}>{children}</Animated.View>;
  
}
// On feedback
export function PressScale({ children, onPress }: { children: ReactNode; onPress?: () => void }) {
  const s = useRef(new Animated.Value(1)).current;

  const down = () => Animated.spring(s, { toValue: 0.95, useNativeDriver: true }).start();
  const up = () => Animated.spring(s, { toValue: 1,friction: 6, useNativeDriver: true }).start();
  return (
    <Pressable onPressIn={down} onPressOut={up} onPress={onPress}>
      <Animated.View style={{ transform: [{ scale: s }] }}>{children}</Animated.View>
    </Pressable>
  );

}
const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 50,
    color: "#1a1a1a",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  headingTxt: {
    fontWeight: "bold",
  },
  inputBoxTxt: {
    borderWidth: 1,
    borderColor: "#1a1a1a",
    padding: 10,
    margin: 10,
  },
  mainImg: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
    alignSelf: "center",
    marginTop: 0,

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
  },

  radioContainer: {
   justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },

  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  radioLabel: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: "600",
    color: "#ffffff",
  },

  radioGroup: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#111111",
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  customButton: {
    backgroundColor: "#111111",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop:25,
    marginBottom: 30,
    alignSelf: "center",
    width: "70%",
    elevation:3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  customButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 1,
  },
});
