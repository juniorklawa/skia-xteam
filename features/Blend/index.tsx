import {
  BlurMask,
  Canvas,
  Circle,
  Fill,
  Group,
  RoundedRect,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";
import { useState } from "react";
import { Dimensions, StyleSheet, View, Text, Button } from "react-native";

export default function Blend() {
  const window = Dimensions.get("window");

  const cardWidth = window.width - 48;

  const cardHeight = 184;
  const { width, height } = Dimensions.get("window");

  const center = vec(width / 2 - 50, height / 2 - 100);

  const [selectedBlendMode, setSelectedBlendMode] = useState("hardLight");

  const getRandomBlendMode = () => {
    const blendModes = [
      "src",
      "dst",
      "srcOver",
      "dstOver",
      "srcIn",
      "dstIn",
      "srcOut",
      "dstOut",
      "srcATop",
      "dstATop",
      "xor",
      "plus",
      "modulate",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "colorDodge",
      "colorBurn",
      "hardLight",
      "softLight",
      "difference",
      "exclusion",
      "multiply",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ];

    const randomIndex = Math.floor(Math.random() * blendModes.length);
    setSelectedBlendMode(blendModes[randomIndex]);
  };

  return (
    <View style={{ width: "100%" }}>
      <Text
        style={{
          fontWeight: "bold",
          paddingHorizontal: 16,
          fontSize: 32,
        }}
      >
        Blend Mode
      </Text>

      <Canvas style={{ height: 250 }}>
        <Fill color="#121212" />

        <RoundedRect
          width={cardWidth}
          height={cardHeight}
          x={24}
          y={40}
          r={16}
          color="#1565C0"
        ></RoundedRect>

        <Group blendMode={selectedBlendMode}>
          <Circle c={{ x: 110 + 56, y: 140 }} r={50} color="#ff9a01" />
          <Circle c={{ x: 110 + 120, y: 140 }} r={50} color="#f10108" />
        </Group>
      </Canvas>

      <Button title="Random blend mode" onPress={getRandomBlendMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
