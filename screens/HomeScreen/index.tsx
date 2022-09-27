import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";

export default function App() {
  type NavType = {
    navigate: (screen: string) => void;
  };

  const navigation = useNavigation<NavType>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "80%" }}>
        <Button
          onPress={() => navigation.navigate("ShapesScreen")}
          title="Shapes"
        />
        <View style={{ height: 8 }} />
        <Button
          onPress={() => navigation.navigate("GestureScreen")}
          title="Gestures"
        />
        <View style={{ height: 8 }} />
        <Button
          onPress={() => navigation.navigate("AnimationScreen")}
          title="Animations"
        />
        <View style={{ height: 8 }} />
        <Button
          onPress={() => navigation.navigate("MatrixScreen")}
          title="Matrix"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
