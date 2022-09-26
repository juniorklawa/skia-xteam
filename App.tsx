import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AnimationScreen from "./screens/AnimationScreen";
import GestureScreen from "./screens/GestureScreen";
import HomeScreen from "./screens/HomeScreen";
import ShapesScreen from "./screens/ShapesScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
        <Stack.Screen name="GestureScreen" component={GestureScreen} />
        <Stack.Screen name="ShapesScreen" component={ShapesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
