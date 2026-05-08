import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    content: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
        marginTop: -100, // Subida controlada
    },
    boxTop: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // Força um espaço de 40 pixels abaixo da logo
        paddingBottom: 40, 
    },
    logo: {
        width: 450, 
        height: 250,
    },
    boxMid: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // Força um espaço de 50 pixels entre o texto e o botão
        paddingBottom: 50, 
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: themas.colors.primary,
        textAlign: 'center',
        lineHeight: 34,
        // Espaço entre o título e a descrição
        marginBottom: 15, 
    },
    description: {
        fontSize: 16,
        color: themas.colors.gray,
        textAlign: 'center',
        lineHeight: 26,
    },
    boxBottom: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        maxWidth: 280,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    textButton: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: 'bold'
    },
});