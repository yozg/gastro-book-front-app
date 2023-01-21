import Draggable from "react-native-draggable";
import {useState} from "react";
import {TableConstructorModal} from "./TableConstructorModal";
import {View} from "react-native";


export const Table = ({ table }) => {
    const [modalVisible, setModalVisible] = useState(false);


    const afterDragRelease = (gesture, bounds) => {
        Object.assign(table, gesture, bounds);
    }

    return (
        <View>
        <Draggable
            x={100}
            y={100}
            renderSize={60}
            imageSource={require('../../resources/icons/table-default.png')}
            onShortPressRelease={() => setModalVisible(true)}
            onDragRelease={afterDragRelease}
        />
        {
            modalVisible && (
            <TableConstructorModal table={table} setModalVisible={setModalVisible} modalVisible={modalVisible}/>
            )
        }
        </View>
);
}