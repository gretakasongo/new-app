import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button, Image} from 'react-native';

export default function App() {
  return (
    <View>
      <Image style={styles.mainImg}source={require("./images/VSCode.png")}  />
      <Text style={styles.welcomeTxt}> Welcome to my app!</Text>
      <Text style={styles.headingTxt}>Enter your name</Text>
      <TextInput style={styles.inputBoxTxt} placeholder="Greta" />
      <Text style={styles.headingTxt}>Enter your surname</Text>
      <TextInput style={styles.inputBoxTxt} placeholder="Kasongo" />
      <Button title="Add User" />
      <StatusBar style="auto" />
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
    width: 250,
    height: 250,

  }
 
});
