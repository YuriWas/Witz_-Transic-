import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TelaDespesa({ onTrocar, aoFechar }) {
  const [valor, setValor] = useState("");
  const [data, setData] = useState("15/04/2026");
  const [humor, setHumor] = useState("Neutro");

  const mascaraData = (txt) => {
    let v = txt.replace(/\D/g, "");
    if (v.length > 2 && v.length <= 4) v = `${v.slice(0, 2)}/${v.slice(2)}`;
    else if (v.length > 4)
      v = `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4, 8)}`;
    setData(v);
  };

  const BotaoHumor = ({ nome, icone }) => {
    const ativo = humor === nome;
    return (
      <TouchableOpacity
        style={[
          styles.humorItem,
          ativo ? styles.humorAtivo : styles.humorInativo,
        ]}
        onPress={() => setHumor(nome)}
      >
        <Text style={styles.humorIcone}>{icone}</Text>
        <Text style={[styles.humorTexto, ativo && styles.humorTextoAtivo]}>
          {nome}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* CABEÇALHO */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Editar Transação</Text>
            <TouchableOpacity onPress={aoFechar}>
              <Ionicons name="close" size={26} color="#999" />
            </TouchableOpacity>
          </View>

          {/* SELETOR DESPESA / RECEITA */}
          <View style={styles.tabContainer}>
            {/* Aba Despesa (Ativa) */}
            <TouchableOpacity style={[styles.tabBtn, styles.tabDespesaAtiva]}>
              <Text style={styles.tabTxtDespesa}>↓ Despesa</Text>
            </TouchableOpacity>

            {/* Aba Receita (Inativa) */}
            <TouchableOpacity
              style={[styles.tabBtn, styles.tabInativa]}
              onPress={() => onTrocar("receita")}
            >
              <Text style={styles.tabTxtInativo}>↑ Receita</Text>
            </TouchableOpacity>
          </View>

          {/* CARD DE VALOR */}
          <View style={styles.cardValor}>
            <Text style={styles.labelCard}>Valor (R$)</Text>
            <TextInput
              style={styles.inputValor}
              placeholder="0,00"
              placeholderTextColor="#A3B5B0"
              keyboardType="numeric"
              value={valor}
              onChangeText={setValor}
              textAlign="center"
            />
          </View>

          {/* DESCRIÇÃO */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
              style={styles.inputFlat}
              placeholder="Ex: Almoço no restaurante"
              placeholderTextColor="#888"
            />
          </View>

          {/* DATA E CATEGORIA */}
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Data</Text>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.inputTextInner}
                  placeholder="DD/MM/AAAA"
                  keyboardType="numeric"
                  maxLength={10}
                  value={data}
                  onChangeText={mascaraData}
                />
                <Ionicons name="calendar-outline" size={20} color="#666" />
              </View>
            </View>
            <View style={{ width: 15 }} />
            <View style={styles.column}>
              <Text style={styles.label}>Categoria</Text>
              <View style={styles.inputWithIcon}>
                <Text style={{ color: "#888", fontSize: 15 }}>Selecione</Text>
                <Ionicons name="chevron-down" size={20} color="#666" />
              </View>
            </View>
          </View>

          {/* SEÇÃO DE HUMOR */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Como você se sentiu?</Text>
            <View style={styles.humorContainer}>
              <BotaoHumor nome="Planejado" icone="🎯" />
              <BotaoHumor nome="Feliz" icone="😊" />
              <BotaoHumor nome="Neutro" icone="😐" />
              <BotaoHumor nome="Impulsivo" icone="⚡" />
              <BotaoHumor nome="Arrependido" icone="😬" />
            </View>
          </View>

          {/* OBSERVAÇÕES */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Observações (opcional)</Text>
            <TextInput
              style={[
                styles.inputFlat,
                { height: 80, textAlignVertical: "top" },
              ]}
              placeholder="Alguma nota adicional..."
              placeholderTextColor="#888"
              multiline
            />
          </View>

          {/* BOTÃO SALVAR */}
          <TouchableOpacity style={styles.btnSalvar} onPress={aoFechar}>
            <Text style={styles.btnSalvarTxt}>Salvar Alterações</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
