import { View, Text } from "react-native";
import GardenScene from "../components/GardenScene";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <GardenScene />

      {/* UI Overlay */}
      <View className="absolute top-16 w-full items-center">
        <Text className="text-4xl font-bold text-white">Chao Garden</Text>
      </View>
    </View>
  );
}
