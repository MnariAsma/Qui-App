import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";
const ScoreModal = ({
  score,
  allQuestions,
  SetShowNextButton,
  setCurrentQuestionIndex,
  setcurrentOptionSelected,
  setIsOptionsDisabled,
  setCorrectOption,
  SetShowScoreModal,
  setScore,
  ShowScoreModal,
  progress,
  currentQuestionIndex,
}) => {
  const RetryQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectOption("null");
    setIsOptionsDisabled(false);
    setcurrentOptionSelected("null");
    SetShowNextButton(false);
    SetShowScoreModal(false);
    setScore(0);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const navigation = useNavigation();
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={ShowScoreModal}>
        <View style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              {score > allQuestions.length/2 ? "Congratulations" : "oops!"}
            </Text>
            <View style={styles.scoreContainer}>
              <Text
                style={{
                  fontSize: 30,
                  color:
                    score > allQuestions.length / 2
                      ? COLORS.success
                      : COLORS.error,
                }}
              >
                {score}
              </Text>
              <Text style={styles.scoreNumber}>/{allQuestions.length}</Text>
            </View>
            {/* RetryS=QuizButton */}
            <View style={{flexDirection: "row"  }}>
              <TouchableOpacity
                style={styles.Button}
                onPress={RetryQuiz}
              >
                <Text style={styles.btText}>Retry</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.btText}>Restart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ScoreModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    backgroundColor: COLORS.white,
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 20,
    alignItems: "center",
  },
  Button: {
    backgroundColor: COLORS.accent,
    padding: 20,
    width: "50%",
    borderRadius: 20,
    marginLeft:5
  },
  btText: {
    fontSize: 20,
    color: COLORS.white,
    textAlign: "center",
  },
  resultText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  scoreNumber: {
    fontSize: 25,
    color: COLORS.black,
  },
});
