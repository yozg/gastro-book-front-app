import { useRef, useState } from "react";
import {StyleSheet, TextInput, View} from "react-native";
import Draggable from 'react-native-draggable';
import {AddTable} from "./src/visual-components/AddTable";
import {Table} from "./src/visual-components/Table";
import {TableConstructorModal} from "./src/visual-components/TableConstructorModal";


export default function App() {
  const [tables, setTables] = useState([]);

    const addTable = (title) => {
      const newTable = {
          id: Date.now().toString(),
          title: title,
          moveX: 100,
          moveY: 100,
      };

      setTables((prevTables) => {
          return [
              ...prevTables,
              newTable,
          ]
      });
  }

  // const invokeModal = (table) => {
  //   setIndex(() => {
  //       console.log(tables.indexOf(table))
  //       return tables.indexOf(table);
  //   })
  //   setModalVisible(true);
  // }

  return (
    <View style={styles.container}>
        <TextInput />
        <AddTable onSubmit={addTable}/>

        <View>
            {tables.map(table =>
                (<Table
                    table={table}
                    key={table.id}
                />)
            )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
});
