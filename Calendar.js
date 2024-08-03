/*import React ,  {useState}from "react";
import { View, Text, TouchableOpacity, StyleSheet , Modal} from 'react-native'; 
import { Calendar } from "react-native-calendars";

const Calender = () =>{
  const[ShowModal,setShowModal] = useState(true);
  return(
    <View>
      
      <Modal visible={ShowModal} animationType="fade">
        <Calendar style={{ borderRadius:10,elevation:4,margin:40}} 
        onDayPress={date =>{console.log(date)
        setShowModal(true)
        }}
        />
      </Modal>
      <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
           
          >
            <Text >{'< Back'}</Text>
          </TouchableOpacity>

    </View>
  );
};
const style = StyleSheet.create({});
export default Calender;*/


import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';


const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');
  
    return (
      <View style={{ flex: 1 }}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{ [selectedDate]: { selected: true } }}
        />
      </View>
    );
  };
  export default CalendarScreen;