import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput} 
            placeholder="Your course goal!"
            onChangeText={goalInputHandler} />
            <Button title="Add Goal" onPress={addGoalHandler}/>
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1, 
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});