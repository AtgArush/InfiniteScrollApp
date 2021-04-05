import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {AreaChart, Grid, BarChart, PieChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
// import {Header} from 'react-native/Libraries/NewAppScreen';
import Header from '../../Components/Header';
export default class Charts extends Component {
  render() {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];
    const bar = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      null,
      85,
      undefined,
      0,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];
    const pieChart = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];

    randomColor = () => {
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
      let opacity = Math.random();
      console.log(`rgb(${red}, ${green}, ${blue}, ${opacity})`);
      return `rgb(${red}, ${green}, ${blue}, ${opacity})`;
    };

    const pieData = pieChart
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
      }));

    return (
      <View style={{flex: 1}}>
        <Header title="Charts" />
        <ScrollView style={{padding: 15}}>
          <Text>Area Chart</Text>
          <AreaChart
            animate={true}
            style={{height: 200}}
            data={data}
            contentInset={{top: 30, bottom: 30}}
            curve={shape.curveNatural}
            svg={{fill: randomColor()}}>
            <Grid />
          </AreaChart>
          <Text>Bar Chart</Text>
          <BarChart
            style={{height: 200}}
            data={bar}
            svg={{fill: randomColor()}}
            contentInset={{top: 30, bottom: 30}}>
            <Grid />
          </BarChart>
          <Text>Pie Chart</Text>

          <PieChart style={{height: 200}} data={pieData} />
        </ScrollView>
      </View>
    );
  }
}
