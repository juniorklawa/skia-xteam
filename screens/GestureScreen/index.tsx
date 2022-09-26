import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import Slider from "@react-native-community/slider";

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import {
  BackdropBlur,
  Canvas,
  Fill,
  Group,
  Path,
  rect,
  rrect,
  useValue,
} from "@shopify/react-native-skia";

interface IPath {
  segments: String[];
  color?: string;
}

export default function Draw() {
  const [paths, setPaths] = useState<IPath[]>([]);

  const pan = Gesture.Pan()
    .onStart((g) => {
      const newPaths = [...paths];
      newPaths[paths.length] = {
        segments: [],
        color: "#039BE5",
      };
      newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`);
      setPaths(newPaths);
    })
    .onUpdate((g) => {
      const index = paths.length - 1;
      const newPaths = [...paths];
      if (newPaths?.[index]?.segments) {
        newPaths[index].segments.push(`L ${g.x} ${g.y}`);
        setPaths(newPaths);
      }
    })
    .minDistance(1);

  const { width } = Dimensions.get("window");
  const blurClipPath = rrect(rect(22, 80, width - 48, 200), 12, 12);

  const cx = useValue(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={pan}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <Canvas style={{ flex: 8 }}>
            {paths.map((p, index) => (
              <Path
                key={index}
                path={p.segments.join(" ")}
                strokeWidth={5}
                style="stroke"
                color={p.color}
              />
            ))}

            <Group>
              <BackdropBlur blur={cx} clip={blurClipPath}>
                <Fill color={"rgba(122, 122, 122, 0.2)"} />
              </BackdropBlur>
            </Group>
          </Canvas>
        </View>
      </GestureDetector>
      <View style={{ alignSelf: "center" }}>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={5}
          minimumTrackTintColor="#039BE5"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => (cx.current = value)}
        />
      </View>
    </GestureHandlerRootView>
  );
}
