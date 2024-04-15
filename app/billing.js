import { Text, StyleSheet, View } from "react-native";
import MainLayout from "../components/MainLayout";

const Billing = () => {
  return (
    <MainLayout activePage={"billing"}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Select a Table to close its bill!
        </Text>
      </View>
    </MainLayout>
  );
};

export default Billing;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Regular",
    fontSize: 40,
    color: "white",
  },
  container: {
    height: "100%",
    width:"100%"
  },
});
