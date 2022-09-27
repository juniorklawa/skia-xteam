import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AnimationScreen from "./screens/AnimationScreen";
import GestureScreen from "./screens/GestureScreen";
import HomeScreen from "./screens/HomeScreen";
import MatrixScreen from "./screens/MatrixScreen";
import ShapesScreen from "./screens/ShapesScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
        <Stack.Screen name="GestureScreen" component={GestureScreen} />
        <Stack.Screen name="ShapesScreen" component={ShapesScreen} />
        <Stack.Screen name="MatrixScreen" component={MatrixScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
