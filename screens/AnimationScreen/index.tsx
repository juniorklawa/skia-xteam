import React, { useEffect } from "react";
import { Easing, useWindowDimensions, View } from "react-native";

import {
  Canvas,
  Group,
  LinearGradient,
  Path,
  runTiming,
  Skia,
  useComputedValue,
  useValue,
  vec,
} from "@shopify/react-native-skia";
import { curveLines, getCoordinates } from "./Math";

export default function AnimationScreen() {
  const COLORS = ["#12c2e9", "#c471ed", "#f64f59", ].map(Skia.Color);

  const buildGraph = () => {
    const coords = getCoordinates();

    const path = curveLines(coords as any, 1, "bezier");

    return {
      path,
    };
  };

  const window = useWindowDimensions();
  const { width } = window;
  const transition = useValue(0);
  const state = useValue({
    next: buildGraph(),
    current: buildGraph(),
  });
  // path to display
  const path = useComputedValue(() => {
    const { current, next } = state.current;
    const start = current.path;
    const end = next.path;
    return end.interpolate(start, transition.current)!;
  }, [state, transition]);

  useEffect(() => {
    const h = setInterval(() => {
      changeBlob();
    }, 1000);
    changeBlob();
    return () => {
      clearTimeout(h);
    };
  }, []);

  const changeBlob = () => {
    state.current.current = state.current.next;
    state.current.next = buildGraph();

    transition.current = 0;
    runTiming(transition, 1, {
      duration: 750,
      easing: Easing.inOut(Easing.exp),
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Group>
          <Path
            style="fill"
            path={path}
            strokeWidth={4}
            strokeJoin="round"
            strokeCap="round"
          >
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, 0)}
              colors={COLORS}
            />
          </Path>
        </Group>
      </Canvas>
    </View>
  );
}
