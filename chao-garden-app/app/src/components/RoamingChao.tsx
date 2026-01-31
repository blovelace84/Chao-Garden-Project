import { Animated, Text } from "react-native";
import { useEffect, useRef } from "react";

const decorativeChaos = [
  { id: "1", x: 40, emoji: "🥚" },
  { id: "2", x: 80, emoji: "🐣" },
  { id: "3", x: 120, emoji: "🐥" },
];
export default function RoamingChao() {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Horizontal wandering
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 40,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -40,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Gentle bobbing
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -6,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 6,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateX }, { translateY }],
      }}
    >
      {decorativeChaos.map((chao) => (
        <Text
          key={chao.id}
          style={{ fontSize: 48, position: "absolute", left: chao.x }}
        >
          {chao.emoji}
        </Text>
      ))}
    </Animated.View>
  );
}
