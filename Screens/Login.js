import { View, Text, StyleSheet, TextInput, Alert,TouchableOpacity} from "react-native";
import React from "react";
import CheckBox  from "expo-checkbox"
import AppLoading from "expo-app-loading";
const Login = ({navigataion}) => {
  const [userName,setUserName]=("")
  const [password,setPassword]=("")
    const [agree,setAgree] =React.useState(false)

    const handleSubmit=()=>{
     <AppLoading/>
      return (userName==="" || password==="") ? Alert.alert("Invalid UserName | password"):navigataion.navigate("home",{name:`${userName}`})
    }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Here!!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput style={styles.inputStyle} value={userName} onChangeText={(data)=>setUserName(data)} autoCapitalize="none" autoCorrect={false}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Password</Text>
        <TextInput value={password} style={styles.inputStyle} onChangeText={(data)=>setPassword(data)} secureTextEntry={true} autoCapitalize="none" autoCorrect={false}/>
      </View>
<View >
<CheckBox value={agree} on onChange={()=>setAgree(!agree)} color={agree ? "#4630EB":undefined}/>
<Text> I agree</Text>
</View>
<TouchableOpacity style={{backgroundColor:agree? "#4630EB":"grey"}} disabled={!agree} onPress={handleSubmit}>
    <Text>Login</Text>
    </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingTop: 30,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: 500,
    paddingTop: 20,
    paddingBottom: 15,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor:"rgba(0,0,0,0.3)",
    paddingHorizontal:15,
    paddingVertical:7,
    borderRadius:1,
    fontSize:18
  },
});
