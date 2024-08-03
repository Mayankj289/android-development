import {Linking,StyleSheet,Text,TouchableOpacity,View,Image} from "react-native";
  import React from "react";
  
  
  const About = () => {
    return (
      <View >
        <Text style={styles.mainHeader}> ABOUT US </Text>
        
  
        <Text style={styles.text}>"An Android Development Project by Students of CSE 4th Semester</Text>
        <Text style={styles.text}> on React Native"</Text>
        
        <View style={styles.aboutLayout}>
          <Text style={styles.text1}> Mayank Chhajed</Text>  
          <Image source={require('./mayank.jpg')} style={styles.imgStyle}/>
          <Text style={[styles.text2]}>Mayank Chhajed - Student of CSE 4th sem ,roll no: 303302221087 SSIPMT Raipur Contact:7489119018
          </Text>      
        </View>
       
        <View style={styles.aboutLayout}>
          <Text style={styles.text1}> Aviral Gokhale </Text>  
          <Image source={require('./aviral.jpg')} style={styles.imgStyle}/>
          <Text style={[styles.text2]}>Aviral Gokhale - Student of CSE 4th sem ,roll no: 303302221104 SSIPMT Raipur Contact:7225892002
          </Text>      
        </View>
  
        <View style={styles.aboutLayout}>
          <Text style={styles.text1}> Aditya Verma </Text>  
          <Image source={require('./adi.jpg')} style={styles.imgStyle}/>
          <Text style={[styles.text2]}>Aditya Verma - Student of CSE 4th sem ,roll no: 303302221080 SSIPMT Raipur Contact:8770118130
          </Text>      
        </View>
        <Text style={styles.text1}> Follow us on Social Network </Text>
  
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/_.goko/")
 }>
              <Image source={require('./insta.jpg')} style={styles.iconStyle} />
            <Text style={{fontSize:5}} > Aviral Gokhale </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/mayankj_982/")
            }>
              <Image source={require('./insta.jpg')} style={styles.iconStyle} />
            <Text style={{fontSize:5}} > Mayank Chhajed </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/aditya_____verma/")
            }>
              <Image source={require('./insta.jpg')} style={styles.iconStyle} />
            <Text style={{fontSize:5}}> Aditya Verma </Text>
          </TouchableOpacity>
          
        </View>
  
  
  
  
       
      </View>
    );
  };
  
  
  
  const styles = StyleSheet.create({


    imgStyle: {
      width: 50,
      height: 50,
      borderRadius: 100,
      alignSelf:'center',
    },
    mainHeader: {
      fontSize: 20,
      color: "#344055",
      textTransform: "uppercase",
      fontWeight: "500",
      marginBottom: 10,
      flex:1,
      textAlign:'center',
    },
  
    aboutLayout: {
      backgroundColor: "white",
      paddingHorizontal: 50,
      marginVertical: 10,
      borderRadius:40,
      borderColor:'black',
      borderWidth:1,
    },
  
    
    menuContainer: {
      width: "100%",
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
     
  
    iconStyle: {
      width: 15,
      height: 15,
      aspectRatio: 1,
      alignSelf:'center'
    
    },
    text:{
      fontSize:6,
      color:'black',
      alignSelf:'center',
    },
    text1:{
      fontSize:13,
      color:'black',
      alignSelf:'center',
    },
    text2:{
      fontSize:5,
      color:'black',
      alignSelf:'center',
    },
  });
  

  
  export default About;