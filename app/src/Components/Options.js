import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState,useEffect } from "react";
import { COLORS } from "../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { shuffle } from "lodash";

const Options = ({
  IsOptionsDisabled,
  setIsOptionsDisabled,
  currentQuestionIndex,
  allQuestions,
  SetShowNextButton,
  currentOptionSelected,
  setcurrentOptionSelected,
  correctOption,
  setCorrectOption,
  score,
  setScore
}) => {
 
  // const allOptions = shuffle([
  //   ...allQuestions[currentQuestionIndex].incorrect_answers,
  //   allQuestions[currentQuestionIndex].correct_answer,
  // ]);//the problem: shuffling the options every time the user interacts with an option

  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {

    
    const options = [
      ...allQuestions[currentQuestionIndex].incorrect_answers,
      allQuestions[currentQuestionIndex].correct_answer,
    ];
    const shuffled = shuffle(options);
    setShuffledOptions(shuffled);
  }, [currentQuestionIndex, allQuestions]);

  const validateAnswer = (selectedOption) => {
    let correctOption = allQuestions[currentQuestionIndex]["correct_answer"];
    setcurrentOptionSelected(selectedOption);
    setCorrectOption(correctOption);
    setIsOptionsDisabled(true);
    if (selectedOption === correctOption) setScore(score + 1);
    SetShowNextButton(true);
  };

  return (
    <View>
      {shuffledOptions.map((option) => (
        <TouchableOpacity
          key={option}
          style={{
            borderWidth: 3,
            borderColor:
              option == correctOption
                ? COLORS.success
                : option == currentOptionSelected
                ? COLORS.error
                : COLORS.secondary + "40",

            backgroundColor:
              option == correctOption
                ? COLORS.success + "20"
                : option == currentOptionSelected
                ? COLORS.error + "20"
                : COLORS.secondary + "20",
            height: 60,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
          onPress={() => validateAnswer(option)}
          disabled={IsOptionsDisabled}
        >
          <Text style={{ fontSize: 20, color: COLORS.white }}>{option}</Text>

          {/* show correct answer icon */}
          {option == correctOption ? (
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: COLORS.success,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="check"
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                }}
              />
            </View>
          ) : option == currentOptionSelected ? (
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: COLORS.error,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="close"
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                }}
              />
            </View>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({});
