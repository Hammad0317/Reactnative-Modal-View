import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Modal,
    TouchableHighlight,
    Image,
    Alert,
    StatusBar,
    backgroundColor,
    ImageBackground,
    TouchableOpacity,
    onPress,
    setIsVisible,
    

   
  } from 'react-native';
  import DateTimePickerModal from "react-native-modal-datetime-picker";

  import React,{useState, useEffect, useRef} from 'react';
  
  
  export default App=()=> {
  const [isVisible,  setIsVisible,] = useState(false)
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   console.warn("A date has been picked: ", date);
  //   hideDatePicker();
  // };
    
      return (
        <View style={styles.container} >
          
          <ImageBackground  source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20200621/pngtree-abstract-modern-neon-frame-background-image_339537.jpg'}}
                    style={{height:'92%', width:'100%'}}  />
          <View style={{width:150,height:190,alignSelf:'center'}}>
         <Button title='Open Modal' color={"pink"} onPress={()=> setIsVisible(true)} />
         </View>

         <Modal visible={isVisible}
         animationType='slide'
         transparent
         >
           <View style={styles.mainModalView}>
                <View style={styles.mainModal}>
                    <Text style={{fontWeight:"bold",fontSize:22,color:'#0c0d0e'}}> WELCOME </Text>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlT_mFm8-Vjbx8Wq3sx1GZfegaH1CpwB5-1OPM8AEslpNXvIpyghLgPzOqDP5fVFjOpPw&usqp=CAU'}}
                    style={{height:200, width:300,marginTop:10,borderRadius:20}}  />
                    <View style={{marginTop:15}}>
                      
                    <TouchableOpacity onPress={()=>{ setIsVisible(false)}} style={styles.buttons}>
                    <Text style={styles.buttonText}>BAND KR AB</Text>
                    </TouchableOpacity>
                    </View>

                </View>

            </View>

{/* <View>
      
<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />    
      </View> */}
            

         </Modal> 
        
    </View>
        
          
      );
  
  };
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
   mainModalView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

   },
   mainModal:{
    backgroundColor:'white',
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:20,
    borderRadius:16,
   },
   buttons: {
    backgroundColor: "#f2aa4c",
    padding: 7,
    borderRadius: 5,
    height:40,
    width: 120,
    elevation:5,
},
buttonText: {
    color:"#000",
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    
    
},

  });
  