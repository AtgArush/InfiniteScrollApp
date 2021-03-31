import React, { Component } from 'react'
import { Text } from 'react-native'
import strings from "../../constants/lang/en"
export default class Empty extends Component {
    render() {
        return (
            <Text>{strings.EMPTY}</Text>
        )
    }
}
