import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "react-router-dom";
import vanileIcon from "../assets/vanile.png";
import chocoIcon from "../assets/choco.png";
import waterIcon from "../assets/water.png";
import milkIcon from "../assets/milk.png";
import zinkIcon from "../assets/Zink.png";
import magIcon from "../assets/Magnesium.png";

export default function Icon({ flavourpic, name, path }) {
  const [isHovered, setIsHovered] = useState(false);

  const iconImages = {
    vanileIcon: vanileIcon,
    chocoIcon: chocoIcon,
    waterIcon: waterIcon,
    milkIcon: milkIcon,
    zinkIcon: zinkIcon,
    magIcon: magIcon,
  };

  const iconImage = iconImages[flavourpic];

  return (
    <Link to={path}>
      <TouchableOpacity
        onPress={() => setIsHovered(!isHovered)}
        activeOpacity={1}
      >
        <View
          style={[
            styles.iconContainer,
            { transform: [{ scale: isHovered ? 1.1 : 1 }] },
          ]}
        >
          <Image source={iconImage} style={styles.iconImage} />
          <p>{name}</p>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 100,
    height: 100,
  },
});
