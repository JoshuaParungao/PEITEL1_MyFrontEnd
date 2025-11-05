import axios from "axios";
import { useState } from "react";
import { View, Text, TextInput, Button, Alert, Platform } from "react-native";

export default function EditUserPage({route,navigation}) {
const API_BASE = "http://192.168.30.137:8081/registration/api/users/";
const { user } = route.params;

const [first_name, setFirstName] = useState(user.first_name);
const [last_name, setLastName] = useState(user.last_name);
const [email, setEmail] = useState(user.email);
const [gender, setGender] = useState(user.gender);
const [password, setPassword] = useState(user.password);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleUpdate = () => {
        if (!first_name || !last_name || !email || !gender) {
            if (Platform.OS === 'web') {
                window.alert("Please fill in all required fields");
            } else {
                Alert.alert("Error", "Please fill in all required fields");
            }
            return;
        }

        if (!isValidEmail(email)) {
            if (Platform.OS === 'web') {
                window.alert("Please Input Valid Email");
            } else {
                Alert.alert("Error", "Please Input Valid Email");
            }
            return;
        }

        axios
        .put(`${API_BASE}${user.id}/`, {
            first_name,
            last_name,
            email,
            gender,
            password
        })
        .then(() => {
            if (Platform.OS === 'web') {
                window.alert("User updated successfully");
                navigation.goBack();
            } else {
                Alert.alert("Success", "User updated successfully");
                navigation.goBack();
            }
        })
        .catch((error) => {
            console.error(error);
            if (Platform.OS === 'web') {
                window.alert("Please try again");
            } else {
                Alert.alert("Error", "Please try again");
            }
        });
    }


    return(
        <View>
            
            <TextInput
                value={first_name}
                onChangeText={setFirstName}
                placeholder="First Name"
            />

            <TextInput
                value={last_name}
                onChangeText={setLastName}
                placeholder="Last Name"
            />

            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
            />

            <TextInput
                value={gender}
                onChangeText={setGender}
                placeholder="Gender"
            />

            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
      
            <Button title="Update User"
            onPress={handleUpdate} />


        </View>
    )
}