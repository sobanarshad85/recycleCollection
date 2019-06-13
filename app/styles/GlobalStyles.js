import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import GlobalConst from '../config/GlobalConst';

export default StyleSheet.create({
  container0:{
    flex: 0,
  },
  container:{
    flex: 1,
  },
  container1_5:{
    flex: 1.5,
  },
  container2:{
    flex: 2,
  },
  container3:{
    flex: 3,
  },
  container4:{
    flex: 4,
  },
  scrollviewContainer:{
    flexGrow: 1
  },
  mapContainer:{
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  TextFieldContainer:{
    flex: 0.5,
    margin: 5
  },
  searchContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 5,
  },
  textInput: {
    textAlign: 'center',
    height: 50,
    width: '90%',
    fontSize: 18,
  },
  footerButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button:{
    width:'90%',
    backgroundColor: GlobalConst.COLOR.LIGHTGREY,
    color: GlobalConst.COLOR.WHITE
  },
  textCenter:{
    textAlign: 'center'
  },
  bigText:{
    fontSize: 27,
    fontFamily: 'TTSupermolot-Regular'
  },
  bigTextBold:{
    fontSize: 27,
    color: GlobalConst.COLOR.BLACK,
    fontFamily: 'TTSupermolot-Bold'
  },
  normalText:{
    fontSize: 18,
    color: GlobalConst.COLOR.BLACK,
    fontFamily: 'TTSupermolot-Regular'
  },
  normalTextBold:{
    fontSize: 18,
    fontFamily: 'TTSupermolot-Bold'
  },
  smallText:{
    fontSize: 13,
    fontFamily: 'TTSupermolot-Regular'
  },
  black:{
    color: GlobalConst.COLOR.BLACK,
  },
  grey:{
    color: GlobalConst.COLOR.GREY,
  },
  darkGrey:{
    color: GlobalConst.COLOR.DARKGREY,
  },
  border:{
    borderWidth: 1,
    borderColor: GlobalConst.COLOR.LIGHTGREY,
  },
  borderRounded:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor: GlobalConst.COLOR.LIGHTGREY,
  },
  borderVertical:{
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: GlobalConst.COLOR.LIGHTGREY,
    borderRightColor: GlobalConst.COLOR.WHITE,
    borderLeftColor: GlobalConst.COLOR.WHITE,
  },
  borderBottom:{
    borderBottomWidth: 1,
    borderBottomColor: GlobalConst.COLOR.LIGHTGREY,
  },
  borderLeft:{
    borderLeftWidth: 1,
    borderLeftColor: GlobalConst.COLOR.LIGHTGREY,
  },
  margin10: {
    margin: 10
  },
  marginLeft10: {
    marginLeft: 10
  },
  marginTop10: {
    marginTop: 10
  },
  marginTop20: {
    marginTop: 20
  },
  marginBottom10: {
    marginBottom: 10
  },
  marginBottom20: {
    marginBottom: 20
  },
  padding10: {
    padding: 10
  },
  padding20: {
    padding: 20
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  selfCenter:{
    alignSelf: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alingCenter: {
    alignItems: 'center',
  },
  alingEnd: {
    alignItems: 'flex-end',
  },
  justifyFlexEnd:{
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  row:{
    flexDirection: 'row',
  },
});

export function container(number){
  return {
    flex: number
  }
}

export function margin(number){
  return {
    margin: number
  }
}

export function marginVertical(number){
  return {
    marginVertical: number
  }
}

export function marginHorizontal(number){
  return {
    marginHorizontal: number
  }
}

export function marginTop(number){
  return {
    marginTop: number
  }
}

export function marginRight(number){
  return {
    marginRight: number
  }
}

export function marginLeft(number){
  return {
    marginLeft: number
  }
}

export function marginBottom(number){
  return {
    marginBottom: number
  }
}

export function padding(number){
  return {
    padding: number
  }
}

export function paddingVertical(number){
  return {
    paddingVertical: number
  }
}

export function paddingHorizontal(number){
  return {
    paddingHorizontal: number
  }
}


export function background(number){
  return {
    backgroundColor: number
  }
}

export function fontStyle(size, weight, color){
  return {
    fontFamily: weight == 'bold' ? 'TTSupermolot-Regular' : 'TTSupermolot-Bold',
    fontSize: size,
    fontWeight: weight,
    color: color
  }
}

export function RadioButton(props) {
  return (
      <View style={[{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }, props.style]}>
        {
          props.selected ?
            <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#000',
            }}/>
            : null
        }
      </View>
  );
}
