import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

const GoalInput = (props) => {
  const [goal, setGoal] = useState('')
  const changeHandler = (enteredText) => {
    setGoal(enteredText)
  }
  return (
    <Modal visible={props.isAdd} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textContainer}
          placeholder='Enter your goal'
          onChangeText={changeHandler}
          value={goal}
        />
        <View style={styles.button}>
          <View style={styles.btn}>
            <Button
              color='red'
              title='Cancel'
              onPress={() => {
                setGoal('')
                props.cancel()
              }}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title='Add'
              onPress={() => {
                props.add(goal)
                setGoal('')
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  btn: {
    width: '40%',
  },
})
export default GoalInput
