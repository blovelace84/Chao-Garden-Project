import { View, Text, Pressable } from "react-native";

export default function GardenScreen() {
  return (
    <View className="flex-1 bg-green-200 items-center justify-center">
      <Text className="text-3xl font-bold mb-4">🌱 Chao Garden</Text>

      <View className="bg-white rounded-xl p-6 shadow">
        <Text className="text-xl font-semibold">🥚 Empty Egg</Text>
        <Text className="mt-2 text-gray-600">You don’t have a Chao yet.</Text>

        <Pressable className="mt-4 bg-yellow-400 px-4 py-2 rounded-lg">
          <Text className="font-bold text-center">Hatch Egg</Text>
        </Pressable>
      </View>
    </View>
  );
}
