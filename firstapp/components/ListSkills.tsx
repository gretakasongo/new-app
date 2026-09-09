import {Button, Text, TextInput, View, SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';
import { useState } from 'react';
import  styles  from '../components/Styles';

type ListSkillsProps = {
  navigation: any;
  route: any;
};

function ListSkills({navigation, route}: ListSkillsProps){
  const [txtSkill, setTxtSkill] = useState('');
  const [skills, setSkills] = useState<String[]>([]);

  const renderSkills = () => {
    const arrOutput = [];
    for (let i = 0; i < skills.length; i++) {
      arrOutput.push(
        <View key={i} style={styles.skillRow}>
          <Text style={styles.skillText}>
            {skills[i]}
          </Text>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => {
              const newSkills = skills.filter((_, index) => index !== i);
              setSkills(newSkills);
            }} 
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return arrOutput;
  };

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
              <Button 
               title="Add Skill" 
               onPress={() => {
                setSkills([...skills, txtSkill]);
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
export default ListSkills;