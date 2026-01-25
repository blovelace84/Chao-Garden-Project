import { View, ImageBackground } from "react-native";
import Chao from "./Chao";

export default function Garden() {
  return (
    <ImageBackground
      source={require("../../../assets/images/garden-bg.jpg")}
      resizeMode="cover"
      className="flex-1"
    >
      {/* Play area */}
      <View className="flex-1 items-center justify-center">
        <Chao chaoId="chao-1" />
      </View>

      {/* Bottom action bar */}
      <View className="flex-row justify-around bg-white/80 p-4">
        {/* Buttons will go here */}
      </View>
    </ImageBackground>
  );
}
