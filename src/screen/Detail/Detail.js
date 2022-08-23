import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params.id);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LinkingScreen')}
        onLongPress={() => navigation.canGoBack() && navigation.goBack()}
        style={{
          backgroundColor: 'green',
          width: 200,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
