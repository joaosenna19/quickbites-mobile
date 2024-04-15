import * as React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import SitTableModal from "./SitTableModal";
import TakeTableOrderModal from "./TakeTableOrderModal";


const Table = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);

  return (
    <View>
      <Button
        style={styles.table}
        labelStyle={styles.buttonLabel}
        onPress={toggleModal}
      >
        Table
      </Button>
      <SitTableModal
        visible={isModalVisible}
        hideModal={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    height: "80%",
    alignSelf: "center",
    marginTop: "10%",
    borderRadius: 20,
  },
  table: {
    height: 40,
    width: 40,
    margin: 5,
    padding:3,
    backgroundColor: "white",
  },
  buttonLabel: {
    fontSize:10,
    fontFamily: "Regular",
    color: "black",
  },
});

export default Table;
