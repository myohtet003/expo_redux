import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import {
  increment,
  decrement,
  incrementByAmount,
  countUsers
} from "@/features/redux/counterSlice";

export default function HomeScreen() {
  const count = useAppSelector((state) => state.counter.value);
  const adultUsersLength = useAppSelector(countUsers);
  // const counterValue = useAppSelector(counter);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Counter : {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Increment by 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />

      <Text>
        Users: <Text>{adultUsersLength}</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
