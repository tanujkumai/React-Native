import { View } from "react-native";
import Input from "./input";

function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLenght: 10,
          onChangeText: () => {},
        }}
      />
      <Input label="Description" textInputConfig={{
        multiline: true, 
        autoCorrect: false,
      }} />
    </View>
  );
}

export default ExpenseForm;
