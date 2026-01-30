import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gradient-to-b from-blue-300 via-sky-200 to-emerald-100 items-center justify-center px-6">
      {/* Header Section */}
      <View className="absolute bottom-0 w-full h-40 bg-green-400 rounded-t-3xl mb-16 items-center">
        <Text className="text-5xl mb-4">🥚</Text>
        <Text className="text-3xl font-bold text-slate-800 mb-4">
          Chao Garden
        </Text>
        <Text className="text-lg text-slate-700 text-center leading-6">
          A peaceful place to raise your chao
        </Text>
      </View>

      {/* Enter Garden Button */}
      <Pressable
        className="bg-gradient-to-r from-amber-400 to-yellow-400 px-12 py-4 rounded-full shadow-2xl active:scale-95 mb-12 border-2 border-amber-500"
        onPress={() => console.log("Enter Garden")}
      >
        <Text className="text-white font-extrabold text-lg text-center">
          🌱 Enter Garden
        </Text>
      </Pressable>

      {/* Info Section */}
      <View className="bg-white/70 px-6 py-4 rounded-2xl shadow-md max-w-xs">
        <Text className="text-sm text-slate-600 text-center leading-5">
          Start your journey and nurture your very own Chao companion
        </Text>
      </View>
    </View>
  );
}
