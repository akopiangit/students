import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

function FirstScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Контакты</Text>
      <Button
        title="Коля"
        onPress={() => navigation.navigate('SecondScreen')}
      />
      <Button
        title="Вася"
        onPress={() => navigation.navigate('ThirdScreen')}
      />
    </View>
  );
}
function SecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Коля - +7 977 462 47 23 </Text>
      <Button title="Вернуться" onPress={() => navigation.goBack()} />
      <Image
      style={styles.tinyLogo}
        source={{
          uri: 'https://rs.img.com.ua/crop?v2=1&w=600&h=0&url=%2F%2Fv.img.com.ua%2Fb%2Forig%2Fb%2Fe8%2F09a1bc4d9e35c36cb1990dd5657cce8b.jpg',
        }}
      />
    </View>
  );
}

function ThirdScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Вася - +7 926 633 77 77</Text>
      <Button title="Вернуться" onPress={() => navigation.goBack()} />
      <Image
      style={styles.tinyLogo}
        source={{
          uri: 'https://vokrug-tv.ru/pic/person/a/5/c/7/a5c79e2932beab0f4590b6fa02b4090a.jpg',
        }}
      />
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen}/>
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
