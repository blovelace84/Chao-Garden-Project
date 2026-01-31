import { View, Image } from "react-native";
import RoamingChao from "./RoamingChao";

export default function GardenScene() {
  return (
    <View className="flex-1">
      {/* Sky */}
      <Image
        source={require("../../../assets/images/sky_paint_1.png")}
        className="absolute w-full h-full"
        resizeMode="cover"
      />

      {/* Garden */}
      <Image
        source={require("../../../assets/images/springflower_bunch.png")}
        className="absolute w-full h-full"
        resizeMode="cover"
      />
      {/* Roaming Chao */}
      <View className="absolute bottom-0 w-full h-[40%]">
        <RoamingChao />
        <RoamingChao />
      </View>
    </View>
  );
}
