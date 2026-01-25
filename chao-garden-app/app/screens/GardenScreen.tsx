import { View, Text } from "react-native";
import Chao from "../src/components/Chao";
import StatsPanel from "../src/components/StatsPanel";

export default function GardenScreen() {
  const chaoId = "chao-1";
  return (
    <View className="flex-1 bg-green-300">
      <Chao chaoId={chaoId} />
      <StatsPanel />
    </View>
  );
}
