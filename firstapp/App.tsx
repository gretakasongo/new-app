import { StatusBar } from 'expo-status-bar';
import { useState,useRef,useEffect, ReactNode } from 'react';
import { StyleSheet, Text, View,TextInput, Button,TouchableOpacity, Image,SafeAreaView,ScrollView, Animated,ViewStyle,StyleProp, Pressable, 
  ImageSourcePropType} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import {RadioButton} from 'react-native-paper'
import {Easing} from 'react-native';
  

type TabParamList = {
  Home: undefined;
  ViewDetails: {
    NameSend: string;
    SurnameSend: string;
  };
  ListSkills: undefined;
  };

  const Tab= createMaterialTopTabNavigator<TabParamList>();

  type MainScreenProps = MaterialTopTabScreenProps<TabParamList, 'Home'>;
  type ViewDetailsProps = MaterialTopTabScreenProps<TabParamList, 'ViewDetails'>;
  type ListSkillsProps = MaterialTopTabScreenProps<TabParamList, 'ListSkills'>;

  /*type RootStackParamList = {
    Home: undefined,
    View: {
      NameSend: string;
      SurnameSend: string;
    };
    ListSkills: undefined;
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
  type ViewDetailsProps = NativeStackScreenProps<RootStackParamList, 'View'>;
  type ListSkillsProps = NativeStackScreenProps<RootStackParamList, 'ListSkills'>; */
  
  export default function App() {
    return(
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarStyle: { marginTop: 30,},}}>
          <Tab.Screen name="Home" component={MainScreen} />
          <Tab.Screen name="ViewDetails" component={ViewDetails} />
          <Tab.Screen name="ListSkills" component={ListSkills} />
        </Tab.Navigator>
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
        navigation.navigate('ViewDetails', {
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
  
  //const NameGet = route.params.NameSend;
  //const SurnameGet = route.params.SurnameSend;
  const NameGet = route.params?.NameSend;
  const SurnameGet = route.params?.SurnameSend;

  // const [selectedValue, setSelectedValue] = useState('0');
  // const [ImageBlock,setImage] = useState<ImageSourcePropType | undefined>(undefined);
  const [selectedValue, setSelectedValue] = useState('0');
  const [iSelected, setInValue] = useState(0);
  const [ImageBlock,setImage] = useState<ImageSourcePropType | undefined>(undefined);
  const [blockArray] = useState<ImageSourcePropType[]>([
    undefined,
    require('./assets/Images/react-native.png'),
    require('./assets/Images/kotlin.png'),
    require('./assets/Images/html-css.png'),
  ]);

  
  
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
      <View style = {{flex:1}}>
        <Text style = {{fontWeight: 'bold', flex: 0, padding:30,
          justifyContent: "center",textAlign: "center", alignItems: "center"}}>
            Generate Chosen Language Image 
        </Text>
        <Button title = "Generate"
          onPress={() => {
            setInValue(Number(selectedValue));

          /*switch(selectedValue){
            case "1":
              setImage(require('./assets/Images/react-native.png'));
              break;
            case "2":
              setImage(require('./assets/Images/kotlin.png'));
              break;
            case "3":
              setImage(require('./assets/Images/html-css.png'));
              break;
            default:
              setImage(undefined);
              
          }*/
          }}/>
        <View style = {styles.container}>
          <Image source={blockArray[iSelected]} style={styles.viewImage} />
        </View>
      </View>
    </View>
  );
};
function ListSkills({navigation, route}: ListSkillsProps){
  const [txtSkill, setTxtSkill] = useState('');
  const [skills] = useState<String[]>([]);

  const renderSkills = () => {
    const arrOutput = [];
    for (let i = 0; i < skills.length; i++) {
      arrOutput.push(
        <Text key={i} style={styles.skillText} >
          {skills[i]}
        </Text>
      );
    }
    return arrOutput;
  }

  return(
    <View style={styles.appContainer}>
      <View>
       <SafeAreaView>
         <ScrollView>
           <View style={styles.mainImg}>
             <Image style={styles.bannerImg} 
             source={require('./assets/Images/Banner.jpg')} />
            </View>
            <Text style={styles.welcomeTxt}>List Your Skills</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.textInput}
                placeholder="Enter your skills"
                onChangeText={(newText: string) => setTxtSkill(newText)}
              />
              <Button title="Add Skill" 
               onPress={() => {
                skills.push(txtSkill);
                 setTxtSkill("");
               }}
              />

            </View>
            <View style={styles.skillContainer}>
              {renderSkills()}
            </View>
          </ScrollView>
       </SafeAreaView>
      </View>
    </View>
  )
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
export function PressScale({ children, onPress }: { children: ReactNode; onPress: () => void }) {
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
  viewImage: {
    width: 350,
    height: 350,
    alignContent:"center"
  },
  container: {
    flex:0,
    justifyContent: 'center',
    alignItems: "center"
  },
  bannerImg: {
    height: 350,
    alignContent: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#7d7d7d',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#7d7d7d',
    width: '70%',
    margin: 7,
    padding: 5,
  },
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 15,
  },
  skillContainer: {
    flex: 5,
  },
  skillText: {
    fontSize: 15,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#7d7d7d',
    paddingBottom: 5,
  },

});
