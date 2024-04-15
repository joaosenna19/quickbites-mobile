import * as React from 'react';
import { StyleSheet, View } from 'react-native'
import { DataTable } from 'react-native-paper';
import LoginModal from './LoginModal';

const ReservationsTable = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([5]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [reservations] = React.useState([
    {
      key: 1,
      name: "John Doe",
      date: "01/15 : 10:30",
      partySize: 4,
      tableId: 3
    },
    {
      key: 2,
      name: "Jane Smith",
      date: "01/16 : 12:00",
      partySize: 2,
      tableId: 1
    },
    {
      key: 3,
      name: "Alice Johnson",
      date: "01/17 : 13:15",
      partySize: 6,
      tableId: 4
    },
    {
      key: 4,
      name: "Bob Brown",
      date: "01/18 : 14:45",
      partySize: 3,
      tableId: 2
    },
    {
      key: 5,
      name: "Emily Davis",
      date: "01/19 : 16:00",
      partySize: 5,
      tableId: 3
    },
    {
      key: 6,
      name: "Michael Wilson",
      date: "01/20 : 17:30",
      partySize: 7,
      tableId: 5
    },
    {
      key: 7,
      name: "Jessica Martinez",
      date: "01/21 : 18:45",
      partySize: 1,
      tableId: 2
    },
    {
      key: 8,
      name: "David Taylor",
      date: "01/22 : 20:00",
      partySize: 8,
      tableId: 6
    },
    {
      key: 9,
      name: "Sarah Anderson",
      date: "01/23 : 21:15",
      partySize: 3,
      tableId: 4
    },
    {
      key: 10,
      name: "Ryan Wilson",
      date: "01/24 : 09:00",
      partySize: 2,
      tableId: 3
    },
    {
      key: 11,
      name: "Michelle Clark",
      date: "01/25 : 10:30",
      partySize: 5,
      tableId: 1
    },
    {
      key: 12,
      name: "Daniel Lee",
      date: "01/26 : 12:00",
      partySize: 6,
      tableId: 5
    },
    {
      key: 13,
      name: "Emma Hall",
      date: "01/27 : 13:15",
      partySize: 4,
      tableId: 2
    },
    {
      key: 14,
      name: "Olivia Garcia",
      date: "01/28 : 14:45",
      partySize: 3,
      tableId: 6
    },
    {
      key: 15,
      name: "James Martinez",
      date: "01/29 : 16:00",
      partySize: 7,
      tableId: 4
    }
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, reservations.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View>
    <DataTable style={styles.tableContainer}>
      <DataTable.Header style={styles.text}>
        <DataTable.Title TextStyle={styles.text}>Name</DataTable.Title>
        <DataTable.Title numeric>Time</DataTable.Title>
        <DataTable.Title numeric>Size</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
      </DataTable.Header>

      {reservations.slice(from, to).map((reservations) => (
        <DataTable.Row key={reservations.key}>
          <DataTable.Cell>{reservations.name}</DataTable.Cell>
          <DataTable.Cell numeric>{reservations.date}</DataTable.Cell>
          <DataTable.Cell numeric>{reservations.partySize}</DataTable.Cell>
          <DataTable.Cell>table status</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(reservations.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${reservations.length}`}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
      />
    </DataTable>
    </View>
  );
};

const styles = StyleSheet.create ({
  text: {
    fontFamily: "Regular",
    fontSize: 30,
    color: "white",
  },
  tableContainer: {
    height:"auto",
    backgroundColor: "white",
    borderRadius: 20
  }
})

export default ReservationsTable;