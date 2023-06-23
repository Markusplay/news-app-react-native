import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { FullPost } from "./screens/FullPost";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: "News" }}></Stack.Screen>
                <Stack.Screen name="FullPost" component={FullPost} options={{ title: "Full post" }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}