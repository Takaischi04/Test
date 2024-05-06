import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import vanileIcon from "../assets/vanile.png";
import chocoIcon from "../assets/choco.png";
import waterIcon from "../assets/water.png";

export default function Icon({ flavourpic, name }) {
  const [isHovered, setIsHovered] = useState(false);

  const iconImages = {
    vanilieIcon: vanileIcon,
    chocoIcon: chocoIcon,
    waterIcon: waterIcon,
  };

  const iconImage = iconImages[flavourpic];

  return (
    <TouchableOpacity
      onPress={() => setIsHovered(!isHovered)}
      activeOpacity={1}
    >
      <View style={{ transform: [{ scale: isHovered ? 1.1 : 1 }] }}>
        <Image source={iconImage} style={{ width: 100, height: 100 }} />
        <p>{name}</p>
      </View>
    </TouchableOpacity>
  );
}
