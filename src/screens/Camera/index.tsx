// CameraScreen.tsx
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function CameraScreen() {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
        })();
    }, []);

    const handleGoBack = () => {
        navigation.goBack();
    };

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>Acesso Negado!</Text>;
    }

    if(hasPermission === true){
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Camera style={{ flex: 1 }} type={CameraType.back} >
                    <TouchableOpacity 
                        onPress={handleGoBack}
                        style={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            zIndex: 1,
                          }}
                    >
                        <Feather name="home" size={26} color="white" />
                    </TouchableOpacity>
                </Camera>
            </SafeAreaView>
        );
    }
}
