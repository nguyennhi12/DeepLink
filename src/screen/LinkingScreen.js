import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LinkingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onLongPress={() => navigation.goBack()}
        style={{
          backgroundColor: 'yellow',
          width: 200,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>LinkingScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkingScreen;

const styles = StyleSheet.create({});
