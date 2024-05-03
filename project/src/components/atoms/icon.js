import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import vanileIcon from "../assets/vanile.png";
import chocoIcon from "../assets/choco.png";

export default function Icon() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setIsHovered(!isHovered)}
      activeOpacity={1}
    >
      <View style={{ transform: [{ scale: isHovered ? 1.1 : 1 }] }}>
        <Image source={vanileIcon} style={{ width: 100, height: 100 }} />
      </View>
    </TouchableOpacity>
  );
}
