import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import TelaPrincipal from "./Tela_De/Transicao_principal";
import TelaDespesa from "./Tela_De/Despesa";
import TelaReceita from "./Tela_De/Receita";
import TelaEscolha from "./Tela_De/Escolha";

export default function App() {
  // Estado para saber qual tela mostrar: 'lista', 'despesa', 'receita' ou 'escolha'
  const [telaAtual, setTelaAtual] = useState("lista");

  // Função para navegar entre as telas
  const navegar = (nomeDaTela) => {
    setTelaAtual(nomeDaTela);
  };

  return (
    <View style={styles.container}>
      {/* 1. Tela da Lista de Transações */}
      {telaAtual === "lista" && (
        <TelaPrincipal
          onTrocar={navegar}
          aoClicarEmNova={() => navegar("escolha")}
        />
      )}

      {/* 2. Menu Flutuante (Overlay de Despesa/Receita/X) */}
      {telaAtual === "escolha" && (
        <TelaEscolha onTrocar={navegar} aoFechar={() => navegar("lista")} />
      )}

      {/* 3. Tela de Formulário de Despesa */}
      {telaAtual === "despesa" && (
        <TelaDespesa onTrocar={navegar} aoFechar={() => navegar("lista")} />
      )}

      {/* 4. Tela de Formulário de Receita */}
      {telaAtual === "receita" && (
        <TelaReceita onTrocar={navegar} aoFechar={() => navegar("lista")} />
      )}
    </View>
  );
}
