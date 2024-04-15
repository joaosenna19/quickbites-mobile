import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import MainLayout from "../components/MainLayout";

const Profile = () => {
  return (
    <MainLayout activePage={"profile"}>
      <View style={styles.container}>
        <Text style={styles.text}>Thank you for your work!</Text>
        <Button
          style={styles.buttonContainer}
          labelStyle={[styles.buttonLabel]}
          onPress={() => {
            console.log("Logged out");
          }}
        >
          Finish your Shift
        </Button>
      </View>
    </MainLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Regular",
    fontSize: 40,
    color: "white",
  },
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonLabel: {
    fontFamily:"Bold",
    fontSize:15,
    color:"white",
    borderRadius:20,
    height:40,
    padding:10,
    backgroundColor:"#A8C256"
  },
});
