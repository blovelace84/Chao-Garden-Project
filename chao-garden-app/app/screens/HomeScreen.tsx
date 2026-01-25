import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Garden: undefined;
  // add other screens here if needed
};

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 bg-gradient-to-b from-sky-200 to-green-200">
      <Text className="text-3xl font-bold mb-4">Welcome to Chao Garden!</Text>
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg"
        onPress={() => navigation.navigate("Garden")}
      >
        <Text className="text-white font-bold">Enter Garden</Text>
      </TouchableOpacity>
    </View>
  );
}
