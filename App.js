import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {
  const [totalGoal, setTotalGoal] = useState([])
  const [isAdd, setIsAdd] = useState(false)
  const onAddHandler = (data) => {
    setTotalGoal((prevState) => [
      ...prevState,
      { key: Math.random().toString(), value: data },
    ])
    setIsAdd(false)
  }

  const onDeleteHandler = (goalId) => {
    setTotalGoal((prevState) => {
      return prevState.filter((goal) => goal.key !== goalId)
    })
  }

  const cancleHandler = () => {
    setIsAdd(false)
  }
  return (
    <View style={styles.container}>
      <Button title='Add New Goal' onPress={() => setIsAdd(true)} />
      <GoalInput isAdd={isAdd} add={onAddHandler} cancel={cancleHandler} />
      <FlatList
        keyExtractor={(item) => item.key}
        data={totalGoal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            title={itemData.item.value}
            onDelete={onDeleteHandler}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
})
