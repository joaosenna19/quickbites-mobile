import { Text, StyleSheet, View } from "react-native";
import MainLayout from "../components/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <View>
        <Text style={styles.text}>
          Enjoy your Shift!
        </Text>
      </View>
    </MainLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Regular",
    fontSize: 40,
    color: "white",
  },
});
