import { Text, StyleSheet, View } from "react-native";
import Table from "../components/Table";
import MainLayout from "../components/MainLayout";

const Tables = () => {

  return (
    <MainLayout activePage={"tables"}>
      <View>
        <Text style={[styles.headerContainer, styles.headerFont]}>
          Floor Map
        </Text>
      </View>
      <Text style={styles.text}> Upper Floor </Text>
      <View style={styles.tableContainer}>
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </View>
      <Text style={styles.text}> Lower Floor </Text>
      <View style={styles.tableContainer}>
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </View>

      <Text style={styles.text}> Bar </Text>
      <View style={styles.barContainer}>
        <Table />
        <Table />
        <Table />
        <Table />
      </View>
    </MainLayout>
  );
};

export default Tables;

const styles = StyleSheet.create({
  headerContainer: {
    fontSize: 30,
    textAlign: "center",
  },
  headerFont: {
    fontFamily: "Bold",
    fontSize: 20,
    color: "white",
  },
  textContainer: {
    paddingTop: 0,
    fontSize: 30,
    margin: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontFamily: "Regular",
  },
  tableContainer: {
    flex:4,
    flexDirection: "row",
    flexWrap:"wrap",
    backgroundColor: "#7EA0B7",
    margin: 10,
    padding:5,
    height: "auto",
  },
  barContainer: {
    flex: 2,
    backgroundColor: "#7EA0B7",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    height: 80,
  },
});
