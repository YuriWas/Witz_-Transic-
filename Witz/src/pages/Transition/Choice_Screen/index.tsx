import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, 
  SafeAreaView, 
  ScrollView 
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

// 1. Recebemos as propriedades do App.js para navegar entre as telas
export default function TelaPrincipal({ aoClicarEmNova, onTrocar }) {
  // Estado para controlar se o menu de ícones (overlay) está visível
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        {/* ... Aqui ficaria o seu código do Gradiente e da Lista de Transações ... */}
        <Text style={styles.titulo}>Minhas Transações</Text>
        
        {/* BOTÃO + NOVA: Agora ele abre o menu interno desta tela */}
        <TouchableOpacity 
          style={styles.buttonNova} 
          onPress={() => setMenuAberto(true)}
        >
          <Text style={styles.buttonText}>+ Nova</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* 2. MENU FLUTUANTE (O Modal que escurece o fundo) */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={menuAberto}
        onRequestClose={() => setMenuAberto(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.menuContainer}>
            
            {/* Linha de Ícones: Despesa, Receita e Cancelar */}
            <View style={styles.optionsRow}>
              
              {/* Opção Despesa */}
              <TouchableOpacity 
                style={styles.optionItem}
                onPress={() => {
                  setMenuAberto(false); // Fecha o menu
                  onTrocar('despesa'); // Vai para a tela de despesa
                }}
              >
                <View style={[styles.iconCircle, { backgroundColor: '#E74C3C' }]}>
                  <Ionicons name="trending-down" size={30} color="#FFF" />
                </View>
                <Text style={styles.optionText}>Despesa</Text>
              </TouchableOpacity>

              {/* Opção Receita */}
              <TouchableOpacity 
                style={styles.optionItem}
                onPress={() => {
                  setMenuAberto(false); // Fecha o menu
                  onTrocar('receita'); // Vai para a tela de receita
                }}
              >
                <View style={[styles.iconCircle, { backgroundColor: '#2D8C56' }]}>
                  <Ionicons name="trending-up" size={30} color="#FFF" />
                </View>
                <Text style={styles.optionText}>Receita</Text>
              </TouchableOpacity>

              {/* Opção Cancelar (X) */}
              <TouchableOpacity 
                style={styles.optionItem}
                onPress={() => setMenuAberto(false)}
              >
                <View style={[styles.iconCircle, { backgroundColor: '#F0F0F0' }]}>
                  <Ionicons name="close" size={30} color="#333" />
                </View>
                <Text style={[styles.optionText, {color: '#999'}]}>Cancelar</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

