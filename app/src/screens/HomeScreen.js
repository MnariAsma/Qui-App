import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { COLORS } from "../constants";

export default function HomeScreen({ navigation }) {
  const [nom, setNom] = useState("");
  const [categorie, setCategorie] = useState("");
  const [numberValue, setNumberValue] = useState(3);

  const handleNumberChange = (numericValue) => {
    if (numericValue >= 1 && numericValue <= 15) {
      setNumberValue(numericValue);
    } else {
      console.log("La valeur doit être comprise entre 1 et 15");
    }
  };

  const handleNomChange = (text) => {
    setNom(text);
  };
  const handleCategorieChange = (value) => {
    setCategorie(value);
  };

  const getAllData = async () => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${numberValue}&category=${categorie}`
      );
      const json = await response.json();
      console.log(
        "🚀 ~ file: QuizScreen.js:26 ~ allQuestions ~ json.results:",
        json.results
      );

      return json.results;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nom:</Text>
        <TextInput
          style={styles.input}
          value={nom}
          onChangeText={handleNomChange}
        />

        <Text style={styles.label}>Catégorie:</Text>
        <Picker
          style={styles.input}
          selectedValue={categorie}
          onValueChange={handleCategorieChange}
        >
          <Picker.Item label="Any Category" />
          <Picker.Item label="Sports" value="21" />
          <Picker.Item label="Art" value="25" />
          <Picker.Item label="Geography" value="22" />
          <Picker.Item label="Science:computers" value="18" />
          <Picker.Item label="Entertainmment:Music" value="12" />
          <Picker.Item label="Celebrities" value="26" />
        </Picker>

        <Text style={styles.label}>Nombre de questions:</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={numberValue}
          onChangeText={handleNumberChange}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            const questions = await getAllData();
            navigation.navigate("Quiz", { questions });
          }}
        >
          <Text
            style={{ fontSize: 20, textAlign: "center", color: COLORS.white }}
          >
            Let's start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    width: "95%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "gray",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.accent,
    width: "100%",
    padding: 20,
    borderRadius: 20,
  },
});
