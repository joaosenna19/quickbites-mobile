import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import MainLayout from "../components/MainLayout";
import ReservationsTable from "../components/ReservationsTable";
import SitTableModal from "../components/SitTableModal";
import MakeReservationModal from "../components/MakeReservationModal";
import CancelReservationModal from "../components/CancelReservationModal";

const Reservations = () => {
  const [isMakeReservationModalVisible, setMakeReservationModalVisible] =
    React.useState(false);
  const toggleMakeReservationModal = () =>
    setMakeReservationModalVisible(!isMakeReservationModalVisible);

  const [isCancelReservationModalVisible, setCancelReservationModalVisible] =
    React.useState(false);
  const toggleCancelReservationModal = () =>
    setCancelReservationModalVisible(!isCancelReservationModalVisible);

  return (
    <MainLayout activePage={"reservations"}>
      <View style={styles.pageContainer}>
        <Text style={styles.textContainer}>Upcoming Reservations</Text>
        <View style={styles.tableContainer}>
          <ReservationsTable />
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <Button
              style={styles.buttonContainer}
              labelStyle={[styles.buttonLabel, styles.makeReservationButton]}
              onPress={toggleMakeReservationModal}
            >
              Make Reservation
            </Button>
          </View>
          <MakeReservationModal
            visible={isMakeReservationModalVisible}
            hideModal={() => setMakeReservationModalVisible(false)}
          />
          <View>
            <Button
              style={styles.buttonContainer}
              labelStyle={[styles.buttonLabel, styles.cancelReservationButton]}
              onPress={toggleCancelReservationModal}
            >
              Cancel Reservation
            </Button>
            <CancelReservationModal
              visible={isCancelReservationModalVisible}
              hideModal={() => setCancelReservationModalVisible(false)}
            />
          </View>
        </View>
      </View>
    </MainLayout>
  );
};

export default Reservations;

const styles = StyleSheet.create({
  textContainer: {
    paddingTop: 0,
    fontFamily: "Regular",
    textAlign: "center",
    fontSize: 30,
    color: "white",
    margin: 20,
  },
  tableContainer: {
    height: "auto",
  },
  pageContainer: {
    height: "100%",
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonLabel: {
    fontFamily: "SemiBold",
    fontSize: 15,
    color: "white",
    height: 40,
    padding: 9,
    borderRadius: 20,
  },
  cancelReservationButton: {
    backgroundColor: "#DA4167",
  },
  makeReservationButton: {
    backgroundColor: "#A8C256",
  },
});
