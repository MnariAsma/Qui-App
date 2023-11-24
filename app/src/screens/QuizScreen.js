import { StatusBar, StyleSheet, View, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constants";
import Questions from "../Components/Questions";
import Options from "../Components/Options";
import NextButton from "../Components/NextButton";
import QuizData from "../data/QuizData.json";
import ScoreModal from "../Components/ScoreModal";
import ProgressBar from "../Components/ProgressBar";
import getAllData from './HomeScreen'
import { useRoute } from '@react-navigation/native';

const QuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextButton, SetShowNextButton] = useState(false);
  const [currentOptionSelected, setcurrentOptionSelected] = useState(null);
  const [IsOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);
  const [ShowScoreModal, SetShowScoreModal] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));
  // const allQuestions = QuizData;
  const route = useRoute();
  const  questions  = route.params.questions;

  // const [allQuestions, setAllQuestions] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const questions = await getAllData();
  //     setAllQuestions(questions);
  //   };

  //   fetchData();
  // }, []);
  
  
  // useEffect(()=>
  //   {
  //     getAllData()
  //   },
  //   []
  // );

  // const getAllData = async () => {
  //   try {
  //     const response = await fetch(`https://opentdb.com/api.php?amount=${10}`);
  //     const json = await response.json();
  //     console.log(
  //       "🚀 ~ file: QuizScreen.js:26 ~ allQuestions ~ json.results:",
  //       json.results
  //     );

  //     return json.results;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position: "relative",
        }}
      >
        {/* <HomeScreen/> */}

        <ProgressBar allQuestions={questions} progress={progress} />

     

        <Questions
          currentQuestionIndex={currentQuestionIndex}
          allQuestions={questions}
        />

   
        <Options
          currentQuestionIndex={currentQuestionIndex}
          allQuestions={questions}
          SetShowNextButton={SetShowNextButton}
          currentOptionSelected={currentOptionSelected}
          setcurrentOptionSelected={setcurrentOptionSelected}
          IsOptionsDisabled={IsOptionsDisabled}
          setIsOptionsDisabled={setIsOptionsDisabled}
          correctOption={correctOption}
          setCorrectOption={setCorrectOption}
          score={score}
          setScore={setScore}
        />


        <NextButton
          SetShowNextButton={SetShowNextButton}
          showNextButton={showNextButton}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          allQuestions={questions}
          setcurrentOptionSelected={setcurrentOptionSelected}
          setIsOptionsDisabled={setIsOptionsDisabled}
          setCorrectOption={setCorrectOption}
          SetShowScoreModal={SetShowScoreModal}
          progress={progress}
        />


        <ScoreModal
          score={score}
          allQuestions={questions}
          SetShowNextButton={SetShowNextButton}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          setcurrentOptionSelected={setcurrentOptionSelected}
          setIsOptionsDisabled={setIsOptionsDisabled}
          setCorrectOption={setCorrectOption}
          setScore={setScore}
          SetShowScoreModal={SetShowScoreModal}
          ShowScoreModal={ShowScoreModal}
          currentQuestionIndex={currentQuestionIndex}
          progress={progress}
        />

        {/* Background Image */}
      </View>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({});
