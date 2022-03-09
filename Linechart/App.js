import { Text, View,Dimensions } from 'react-native'
import React, { Component } from 'react'
import {
  LineChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{paddingHorizontal:150,fontSize:20}}>Line Chart</Text>
        <LineChart
    data={{
      labels: ["week1", "week2", "week3", "week4", "week5", "week6"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} 
    height={200}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} 
    chartConfig={{
      backgroundColor: "#0D9FD2",
      backgroundGradientFrom: "#68D2F7",
      backgroundGradientTo: "#F7F983",
      decimalPlaces: 2, 
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#F1220E"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
   <ProgressChart
    data={{
      labels: ["Apple, Banana, Orange"],
      datasets: [
        {
          data: [
            0.2, 0.5, 0.8
          ]
        }
      ]
    }}

        data={data}
        width={ screenWidth - 15 }
        height={220}
        chartConfig={{
          backgroundColor: '#478438',
          backgroundGradientFrom: '#FFF8E1',
          backgroundGradientTo: '#FFF8E1',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        }}
        style= {{
          borderRadius: 15,
        }}
      />
      </View>
    )
  }
}

