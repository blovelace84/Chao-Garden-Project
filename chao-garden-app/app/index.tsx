import { View, Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-green-200">
      <Text className="text-2xl font-bold">🌱 Chao Garden 🌱</Text>
      <HomeScreen />
    </View>
  );
}
