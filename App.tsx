import {
  Canvas,
  Fill,
  Image,
  RoundedRect,
  useFont,
  useImage,
  Text,
  Group,
  Circle,
  SweepGradient,
  BlurMask,
  Rect,
  vec,
  Paint,
  rect,
  rrect,
  Box,
  BoxShadow,
  BackdropBlur,
  mix,
  useLoop,
  useValue,
  useTouchHandler,
} from "@shopify/react-native-skia";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Blend from "./features/Blend";
import Glass from "./features/Glass";

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#ffffff", marginTop: 24 }}
    >
      <ScrollView>
        <Glass />
        <Blend />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
