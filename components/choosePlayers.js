import React, { useState, useEffect } from 'react';
import {
    View, Text, TextInput, StyleSheet,
    Button
} from 'react-native';

import { Picker } from '@react-native-community/picker';


    const ChoosePlayers = ({ route, navigation }) => {
    const [players, setPlayers] = useState([{
        name: null,
        color: null,
        score: 0
    }]);
    const [selectedValue, setSelectedValue] = useState("blue");



    const setColor = (value, i) => {
        let tempPlayers = [...players];
        tempPlayers[i].color = value;
        setPlayers(tempPlayers);
    };

    const playerName = (value, i) => {
        let tempPlayers = [...players];
        tempPlayers[i].name = value;
        setPlayers(tempPlayers);
    };


    useEffect(() => {
        let tempPlayers = [];
        for (let i = 0; i < route.params.value; i++) {
            tempPlayers.push({
                name: null,
                color: null,
                score: 0
            });
        }
        setPlayers(tempPlayers);
    }, []);

    return (
        <View>
            {players.map((m, i) => {
                return (
                    <View key={i} style={styles.container}>
                        <Text style={styles.headlinePlayer}>Player {i + 1}</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputContainer_headline}>Name:</Text>
                            <TextInput style={styles.textInput}
                                onChangeText={(value) => playerName(value, i)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputContainer_headline}>Color:</Text>
                            <Picker
                                selectedValue={players[i].color}
                                style={styles.colorPicker}
                                onValueChange={(itemValue, itemIndex) => setColor(itemValue, i)}
                            >
                                <Picker.Item label="Blue" value="blue" />
                                <Picker.Item label="Pink" value="pink" />
                                <Picker.Item label="Green" value="green" />
                                <Picker.Item label="Black" value="black" />
                            </Picker>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                            }}
                        />
                    </View>
                );
            })}
            <Button style={styles.go_to_game_btn} onPress={() => navigation.navigate('GamePage', { players })}
                title="go to game" color="#841584" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    headlinePlayer: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10
    },
    inputContainer: {
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 15,
    },
    inputContainer_headline: {
        color: 'black',
        marginTop: 4,
        marginRight: 5,
        fontSize: 15
    },
    textInput: {
        height: 30,
        width: 120,
        color: "black",
        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingLeft: 5
    },
    colorPicker: {
        height: 30,
        width: 120,
        color: "black",
        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingLeft: 5
    }
});

export default ChoosePlayers;
