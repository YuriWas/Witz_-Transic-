import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function TelaPrincipal({ onTrocar }) {
  const [menuAberto, setMenuAberto] = useState(false);

  // 1. ADICIONAMOS O CAMPO 'tipo' EM CADA TRANSAÇÃO
  const transacoes = [
    {
      id: "1",
      titulo: "Roupas novas",
      categoria: "Compras",
      data: "21 mar",
      valor: "- R$ 520,00",
      cor: "#E74C3C",
      tipo: "despesa",
    },
    {
      id: "2",
      titulo: "Farmácia",
      categoria: "Saúde",
      data: "19 mar",
      valor: "- R$ 95,00",
      cor: "#E74C3C",
      tipo: "despesa",
    },
    {
      id: "3",
      titulo: "Freelance design",
      categoria: "Freelance",
      data: "11 mar",
      valor: "+ R$ 2.200,00",
      cor: "#2D8C56",
      tipo: "receita",
    },
  ];

  // 2. TRANSFORMAMOS O CARD EM UM BOTÃO
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onTrocar(item.tipo)} // Aqui ele lê se é despesa ou receita e abre a tela
    >
      <View style={styles.iconPlaceholder} />
      <View style={styles.infoContainer}>
        <Text style={styles.itemTitulo}>{item.titulo}</Text>
        <Text style={styles.itemSub}>
          {item.categoria} • {item.data}
        </Text>
      </View>
      <Text style={[styles.itemValor, { color: item.cor }]}>{item.valor}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <View>
          <Text style={styles.tituloApp}>Transações</Text>
          <Text style={styles.subtituloApp}>12 transações registradas</Text>
        </View>

        {/* BOTÃO + NOVA COM DEGRADÊ */}
        <TouchableOpacity
          style={styles.btnNovaTouch}
          onPress={() => setMenuAberto(true)}
        >
          <LinearGradient
            colors={["#4A90E2", "#A855F7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.btnNovaGradient}
          >
            <Text style={styles.btnNovaText}>+ Nova</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* BUSCA */}
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar transação..."
          placeholderTextColor="#999"
        />
      </View>

      {/* LISTA */}
      <FlatList
        data={transacoes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* MENU FLUTUANTE */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={menuAberto}
        onRequestClose={() => setMenuAberto(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.menuContainer}>
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => {
                  setMenuAberto(false);
                  onTrocar("despesa");
                }}
              >
                <View
                  style={[styles.iconCircle, { backgroundColor: "#FF5252" }]}
                >
                  <Ionicons name="trending-down" size={30} color="#FFF" />
                </View>
                <Text style={styles.optionText}>Despesa</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => {
                  setMenuAberto(false);
                  onTrocar("receita");
                }}
              >
                <View
                  style={[styles.iconCircle, { backgroundColor: "#2D8C56" }]}
                >
                  <Ionicons name="trending-up" size={30} color="#FFF" />
                </View>
                <Text style={styles.optionText}>Receita</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => setMenuAberto(false)}
              >
                <View
                  style={[styles.iconCircle, { backgroundColor: "#F0F0F0" }]}
                >
                  <Ionicons name="close" size={30} color="#333" />
                </View>
                <Text style={[styles.optionText, { color: "#999" }]}>
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
