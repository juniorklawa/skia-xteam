import Slider from "@react-native-community/slider";
import {
  BackdropBlur,
  Canvas,
  Fill,
  Group,
  Image,
  rect,
  rrect,
  useFont,
  useImage,
  useValue,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, Text, View } from "react-native";

const ShapesScreen = () => {
  const { width, height } = Dimensions.get("window");

  const michael = useImage(require("../../assets/michael.jpg"));

  const blurClipPath = rrect(rect(22, 80, width - 48, 200), 12, 12);

  const cx = useValue(0);

  return (
    <View style={{ width: "100%" }}>
      <Text
        style={{
          fontWeight: "bold",
          paddingHorizontal: 16,
          fontSize: 32,
        }}
      >
        ShapesScreen Effect
      </Text>
      <Canvas style={{ height: 300 }}>
        <Group>
          {michael && (
            <Image
              x={0}
              y={-200}
              width={width}
              height={height}
              image={michael}
              fit={"fitWidth"}
            />
          )}
          <Group>
            <BackdropBlur blur={cx} clip={blurClipPath}>
              <Fill color={"rgba(122, 122, 122, 0.2)"} />
            </BackdropBlur>
          </Group>
        </Group>

        {/* <Group>
        <RoundedRect
          x={24}
          y={0}
          width={width - 48}
          height={200}
          color="#0000"
        />
        <BackdropBlur blur={cx} clip={blurClipPath}>
          <Fill color={"rgba(122, 122, 122, 0.2)"} />
        </BackdropBlur>
      </Group> */}
        {/* 
      <RoundedRect
        x={24}
        y={center.y + 230}
        width={width - 48}
        height={200}
        color="#add8e6"
      />

      <Box box={rrect(rect(128, 550, 128, 128), 24, 24)} color="#add8e6">
        <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" inner />
        <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" inner />
        <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" />
        <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" />
      </Box> */}
      </Canvas>
      <View style={{ alignSelf: "center" }}>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#039BE5"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => (cx.current = value)}
        />
      </View>
    </View>
  );
};

export default ShapesScreen;
