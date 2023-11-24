import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";

const Questions = (props) => {
  // if (!props.allQuestions || props.allQuestions.length === 0) {
  //   return null; //
  // }

  
  return (
    <View>
      {/* Question Counter */}
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={styles.NumberText}>{props.currentQuestionIndex + 1}</Text>
        <Text style={styles.NumberText}>/{props.allQuestions.length}</Text>
      </View>
      {/* Question */}
      
      <Text style={styles.question}>
        {props.allQuestions[props.currentQuestionIndex].question }
      </Text>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  NumberText: {
    color: COLORS.white,
    fontSize: 20,
    opacity: 0.6,
    marginRight: 2,
  },
  question: {
    color: COLORS.white,
    fontSize: 22,
    marginTop: 10,
    marginBottom:15
  },
});
