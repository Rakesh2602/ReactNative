import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import {
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default function App() {
  return (
    <View>
    <Text style={{marginTop:15,marginLeft:140}}>Contribution Graph</Text>
        <ContributionGraph
        values={[
          {date: '2022-01-02', count: 1},
          {date: '2022-01-03', count: 2},
          {date: '2022-01-04', count: 3},
          {date: '2022-01-05', count: 4},
          {date: '2022-01-06', count: 5},
          {date: '2022-01-30', count: 2},
          {date: '2022-01-31', count: 3},
          {date: '2022-03-01', count: 2},
          {date: '2022-04-02', count: 4},
          {date: '2022-03-05', count: 2},
          {date: '2022-02-30', count: 4},
        ]}
        endDate={new Date('2022-04-01')}
        numDays={105}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#F1220E',
          backgroundGradientTo: '#F1D50E',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
      <Text style={{marginTop:15,marginLeft:140}}>StackedBar Graph</Text>
      <StackedBarChart
        data={{
          labels: ['Test1', 'Test2', 'Test3'],
          legend: ['L1', 'L2', 'L3'],
          data: [
            [60, 60, 60],
            [30, 30, 60],
            [20,40,70]
          ],
          barColors: ['#F34D36', '#F3EB36', '#83F336'],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#0D0D0C',
          backgroundGradientFrom: '#49E1DD',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 15,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 15,
        }}
      />
    </View>
  )
}