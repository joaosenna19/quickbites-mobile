import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NavigationIcon from "./NavigationIcon";
import ProfileIcon from "./ProfileIcon";
import { useFonts } from "expo-font";

const MainLayout = ({ children, activePage }) => {
  const [fontsLoaded, fontError] = useFonts({
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    Light: require("../assets/fonts/Montserrat-Light.ttf"),
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  return (
      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
        <View style={styles.footer}>
          <NavigationIcon
            imageSource={require("../assets/images/calendar.png")}
            page={"reservations"}
            isActive={activePage === "reservations"}
          />
          <NavigationIcon
            imageSource={require("../assets/images/table.png")}
            page={"tables"}
            isActive={activePage === "tables"}
          />
          <NavigationIcon
            imageSource={require("../assets/images/bill.png")}
            page={"billing"}
            isActive={activePage === "billing"}
          />
          <NavigationIcon
            imageSource={require("../assets/images/man.png")}
            page={"profile"}
            isActive={activePage === "profile"}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#0F243B",
  },
  header: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "#7EA0B7",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#0F243B",
    margin: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 75,
    backgroundColor: "#7EA0B7",
  },
  text: {
    marginLeft: 20,
    fontFamily: "SemiBold",
    fontSize: 24,
    color: "white",
    marginRight: "auto",
  },
  profileIcon: {
    marginLeft: "auto",
  },
});

export default MainLayout;
