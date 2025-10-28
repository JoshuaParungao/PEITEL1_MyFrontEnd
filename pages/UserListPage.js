import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, FlatList, Button } from 'react-native';
import { ActivityIndicator } from 'react-native-web';

export default function UserListPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#2b17a5" />
                <Text>Loading users...</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>Welcome to users list</Text>
            <FlatList 
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View>
                    <Text>{item.last_name} {item.first_name}</Text>
                    <Text>Password: {item.password}</Text>
                    <Text>Email: {item.email}</Text>
                    <Text>Gender: {item.gender}</Text>
                    <Text>-----------------------------</Text>
                    <Button title= "edit user"
                    color={"#841584"}/>
                    <Button title= "delete user"
                    color={"#ff0000"}/>
                    
                </View>
            )}/>
        </View>
    )

}

