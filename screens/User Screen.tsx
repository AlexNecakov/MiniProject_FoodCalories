//import * as React from 'react';
import React, {FC, useState, useEffect} from 'react';
import { StyleSheet, Button} from 'react-native';
import Tasks from '../components/Tasks'
import { Text, View } from '../components/Themed';
import firebase from 'firebase';
import db from '../db/firestore';

export default function UserScreen() {
/*firebase.firestore
  const storeFoodData = (userId, cal) => {
    //const userId: "123456@gmail.com"
    //const cal: 100
    firebase
      .database()
      .ref('users/' + userId)
      .set({
        FoodCalories: cal,
      });

      //return null

  }

  const submitData = () => {
    storeFoodData("123456@gmail", 100)
  }
*/


  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Tasks/>

    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
