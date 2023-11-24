import { StyleSheet, View, Animated } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";

const ProgressBar = ({ allQuestions,progress }) => {
  
  const progressAnim = progress.interpolate({
    //interpolation de la valeur de progress
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  return (
    <View
      style={{
        width: "100%",
        height: 20,
        backgroundColor: "#00000020",
        borderRadius: 20,
      }}
    >
      <Animated.View
        style={[{ height: 20, borderRadius: 20, backgroundColor: COLORS.accent },
        { width:progressAnim}]}
      ></Animated.View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({});
