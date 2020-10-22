import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function GamePage(props) {

    const [players, setPlayersData] = useState(props.route.params.players);

    const onChangeValue = ({ score }, i) => {
        let tempPlayers = [...players];
        tempPlayers[i].score += Number(score);
        setPlayersData(tempPlayers);
    };

    useEffect(() => {
        setPlayersData(props.route.params.players);
    }, []);

    return (
        <View style={styles.container}>
            {players.map((m, i) => {
                return <Formik key={i}
                    initialValues={{ score: '' }}
                    onSubmit={(values) => onChangeValue(values, i)}
                >
                    {({ handleChange, handleSubmit }) => (
                        <View>
                            <Text style={{
                                fontSize: 20,
                                marginTop: 20,
                                marginBottom: 20,
                                textAlign: 'center',
                                color: `${players[i].color}`
                            }} >{m.name}</Text>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 25,
                                textAlign: 'center',
                                color: `${players[i].color}`
                            }}>{m.score}</Text>
                            <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                maxLength={3}
                                onChangeText={handleChange('score')}
                                clearTextOnFocus
                            />
                            <Button onPress={handleSubmit} title="Submit" color="#841584" />
                        </View>
                    )}
                </Formik>;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    headline: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'

    },
    score: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: 'center'
    },
    textInput: {
        height: 30,
        color: "black",
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 25,
        marginTop: 50,
        textAlign: 'center',
        fontSize: 20
    },
});
