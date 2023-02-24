import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, FlatList, View } from 'react-native';
import { Singular, SingularConfig } from 'singular-react-native';
import GoalInput from './components/GoalInput';

import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    console.log('click addGoalHandler')
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    console.log(courseGoals);
  }

  useEffect(() => {
    console.log('rendering is completed...');
    const config = new SingularConfig("se_team_9b3431b0","bcdee06e8490949422c071437da5c5ed")
    config.withLoggingEnabled();
    config.withLogLevel(3);
    config.withSingularLink(singularLinkParams => {
      this.deeplink = singularLinkParams.deeplink;
      this.passthrough = singularLinkParams.passthrough;
      this.isDeferred = singularLinkParams.isDeferred;
    });
    config.withSkAdNetworkEnabled(true);
    config.withCustomUserId("jasonnam9669");

    Singular.init(config);  
    
  }, []);
  
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }} alwaysBounceVertical={false}>
          {/* {courseGoals.map((goal, index) => (
            <Text style={styles.goalItem} key={index}>
              {goal}
            </Text>
          ))} */}
        </FlatList>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5,
  }
});
