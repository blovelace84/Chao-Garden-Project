import { View, Text } from "react-native";

export default function StatsPanel() {
  return (
    <View className="p-4 bg-white shadow-md">
      <Text className="text-lg font-bold">Chao Stats</Text>
      <Text>Hunger: 50</Text>
      <Text>Happiness: 70</Text>
      <Text>Energy: 80</Text>
    </View>
  );
}
