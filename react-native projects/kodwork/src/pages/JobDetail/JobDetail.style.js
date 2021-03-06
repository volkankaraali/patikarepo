import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    padding:10,
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    color:'#212121',
    marginBottom:3,
  },
  company_container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:3
  },
  company_title:{
    fontWeight:'bold',
    fontSize:18,
    color:'#FF9800',
  },
  created_date:{
    fontStyle:'italic'
  },
  category:{
    padding:4,
    color:'#FFFFFF',
    alignSelf:'flex-start',
    borderColor:'#FF9800',
    borderRadius:8,
    backgroundColor:'#FF9800',
    fontWeight:'bold',
    marginBottom:4,
  },
  level:{
    padding:4,
    color:'#FFFFFF',
    alignSelf:'flex-start',
    borderColor:'#FF9800',
    borderRadius:8,
    backgroundColor:'#FF9800',
    fontWeight:'bold',
    marginBottom:4,
  },
  location:{
    padding:4,
    color:'#FFFFFF',
    alignSelf:'flex-start',
    borderColor:'#FF9800',
    borderRadius:8,
    backgroundColor:'#FF9800',
    fontWeight:'bold',
    marginBottom:20,
  },
  button_container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:20,
    height:40
  },
  favorite_button:{
    width:180,
    backgroundColor:'#FF9800',
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  favorite_text:{
    color:'#ffff',
    fontWeight:'bold',
    fontSize:16
  },
  submit_button:{
    width:150,
    backgroundColor:'#FF9800',
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  submit_text:{
    color:'#ffff',
    fontWeight:'bold',
    fontSize:16
  }
  
});