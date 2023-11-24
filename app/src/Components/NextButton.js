import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";

const NextButton = ({
  showNextButton,
  SetShowNextButton,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  allQuestions,
  setcurrentOptionSelected,
  setIsOptionsDisabled,
  setCorrectOption,
  SetShowScoreModal,
  progress,
}) => {
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      //last question
      //show score
      SetShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setcurrentOptionSelected(null);
      setIsOptionsDisabled(false);
      SetShowNextButton(false);
      setCorrectOption(null);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity onPress={handleNext} style={styles.NextButton}>
          <Text
            style={{ fontSize: 20, textAlign: "center", color: COLORS.white }}
          >
            Next
          </Text>
        </TouchableOpacity>
      );
    }
  };

  return <View>{renderNextButton()}</View>;
};

export default NextButton;

const styles = StyleSheet.create({
  NextButton: {
    marginTop: 20,
    backgroundColor: COLORS.accent,
    width: "100%",
    padding: 20,
    borderRadius: 20,
  },
});
