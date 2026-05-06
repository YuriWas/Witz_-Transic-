import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { style } from "./style";
import Logo from '../../assets/Logo_desenho.png';

// @ts-ignore
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={Logo}
                        style={style.logo}
                        resizeMode="contain"
                    />
                    <Text style={style.text}>Bem vindo de volta!</Text>
                </View>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <MaterialIcons name='email' size={20} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <MaterialIcons name='remove-red-eye' size={20} color={themas.colors.gray} />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>

                {/* Texto de rodapé agora posicionado dentro do boxBottom */}
                <Text style={style.textBottom}>
                    Não tem conta? <Text style={{ color: themas.colors.primary }}>Crie agora!</Text>
                </Text>
            </View>
        </View>
    );
}