import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-sky-200 items-center justify-center">
      <Text className="text-lg text-white/90 mt-2 mb-12">
        A peaceful place to raise your chao
      </Text>

      {/* Button */}
      <Pressable
        className="bg-yellow-400 px-10 py-4 rounded-full shadow-lg active:scale-95"
        onPress={() => console.log("Enter Garden")}
      >
        <Text className="text-white font-bold text-lg">Enter Garden</Text>
      </Pressable>
    </View>
  );
}
