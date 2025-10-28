import * as React from 'react'
import { View, Text, Button } from 'react-native';
import styles from "../styles"; 
export default function Homepage({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to my App</Text>
            <View style={styles.ButtonContainer}>
                <Button
                    title='Register'
                    onPress={() => navigation.navigate('Registration')} />
                
                
            </View>
            <View style={styles.ButtonContainer}>
                <Button
                    title='View all users'
                    onPress={() => navigation.navigate('UserList')} />
            </View>
        
        </View>
    )
}