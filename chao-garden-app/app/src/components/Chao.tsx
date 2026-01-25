import { View, Image, Text, TouchableOpacity } from "react-native";
import { useQuery, useMutation } from "convex/react";
import { makeFunctionReference } from "convex/server";

export default function Chao({ chaoId }: { chaoId: string }) {
  const chao = useQuery(makeFunctionReference<"query">("getChao"), chaoId);
  const feedChao = useMutation(makeFunctionReference<"mutation">("feedChao"));

  if (!chao) return <Text>Loading Chao...</Text>;

  return (
    <View className="items-center mt-6">
      <Image
        source={require("../../../assets/images/chao.jpg")}
        className="w-32 h-32"
      />
      <Text className="text-xl font-bold">{chao.name}</Text>
      <Text>Hunger: {chao.hunger}</Text>
      <Text>Happiness: {chao.happiness}</Text>
      <TouchableOpacity
        className="mt-4 bg-yellow-400 p-3 rounded-lg"
        onPress={() => feedChao(chaoId)}
      >
        <Text className="text-white text-center font-bold">Feed</Text>
      </TouchableOpacity>
    </View>
  );
}
