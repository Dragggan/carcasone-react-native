import React from 'react';

import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

export default function NumberOfPlayersModal({ navigation }) {

    const [value, onChangeValue] = React.useState(2);

    return (
        <View style={styles.container}>
            <Text style={styles.headline}>Enter the number of players</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={value => onChangeValue(value)}
                value={value}
            />
            <Button onPress={() => navigation.navigate('ChoosePlayers', { value: value })}
                title="next" color="#841584" />
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        display:"flex",
        alignItems:"center"
    },
    textInput: {
        height: 30,
        width: 40,
        color: "#841584",
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 25,
        marginTop: 25,
        textAlign:"center" 
    },
    headline:{
        fontSize:20,
        textAlign:'center',
        marginTop:20,

    }
});

