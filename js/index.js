const cursos = {
  // Recife
  medicina_recife: { corte: 78.74, campus: "Recife" },
  engenharia_comp_recife: { corte: 74.74, campus: "Recife" },
  direito_recife: { corte: 73.32, campus: "Recife" },
  odontologia_recife: { corte: 63.24, campus: "Recife" },
  ciencias_biologicas_recife: { corte: 59.91, campus: "Recife" },
  enfermagem_recife: { corte: 55.61, campus: "Recife" },
  saude_coletiva_recife: { corte: 46.84, campus: "Recife" },
  terapia_ocupacional_recife: { corte: 61.50, campus: "Recife" },
  educacao_fisica_recife: { corte: 47.79, campus: "Recife" },
  ciencias_sociais_recife: { corte: 55.30, campus: "Recife" },
  administracao_recife: { corte: 56.64, campus: "Recife" },
  engenharia_civil_recife: { corte: 53.99, campus: "Recife" },
  engenharia_automacao_controle_recife: { corte: 59.91, campus: "Recife" },
  engenharia_eletrica_eletrotecnica_recife: { corte: 50.64, campus: "Recife" },
  engenharia_telecom_recife: { corte: 32.91, campus: "Recife" },
  engenharia_eletrica_recife: { corte: 60.44, campus: "Recife" },
  engenharia_mecanica_recife: { corte: 63.50, campus: "Recife" },
  fisica_material_recife: { corte: 56.69, campus: "Recife" },

  // Caruaru
  sistemas_informacao_caruaru: { corte: 60.33, campus: "Caruaru" },
  administracao_caruaru: { corte: 49.29, campus: "Caruaru" },

  // Garanhuns
  medicina_garanhuns: { corte: 75.45, campus: "Garanhuns" },
  psicologia_garanhuns: { corte: 60.01, campus: "Garanhuns" },
  engenharia_software_garanhuns: { corte: 64.96, campus: "Garanhuns" },
  computacao_garanhuns: { corte: 45.71, campus: "Garanhuns" },
  historia_garanhuns: { corte: 44.36, campus: "Garanhuns" },
  letras_portuguesa_garanhuns: { corte: 46.51, campus: "Garanhuns" },
  matematica_garanhuns: { corte: 47.89, campus: "Garanhuns" },
  pedagogia_garanhuns: { corte: 41.03, campus: "Garanhuns" },
  geografia_garanhuns: { corte: 31.77, campus: "Garanhuns" },
  ciencias_biologicas_l_garanhuns: { corte: 44.64, campus: "Garanhuns" },

  // Petrolina
  fisioterapia_petrolina: { corte: 54.24, campus: "Petrolina" },
  enfermagem_petrolina: { corte: 26.46, campus: "Petrolina" },
  ciencias_biologicas_l_petrolina: { corte: 44.34, campus: "Petrolina" },
  nutricao_petrolina: { corte: 52.86, campus: "Petrolina" },
  pedagogia_petrolina: { corte: 35.59, campus: "Petrolina" },
  historia_petrolina: { corte: 27.10, campus: "Petrolina" },
  geografia_petrolina: { corte: 30.52, campus: "Petrolina" },
  letras_port_espanhol_petrolina: { corte: 32.53, campus: "Petrolina" },
  letras_port_ingles_petrolina: { corte: 42.53, campus: "Petrolina" },
  matematica_petrolina: { corte: 47.82, campus: "Petrolina" },

  // Arcoverde
  direito_arcoverde: { corte: 61.04, campus: "Arcoverde" },
  odontologia_arcoverde: { corte: 61.04, campus: "Arcoverde" },

  // Serra talhada
  medicina_serratalhada: { corte: 74.09, campus: "Serratalhada" },

  // Surubim
  engenharia_software_surubim: { corte: 57.06, campus: "Surubim" },
  sistemas_informacao_surubim: { corte: 48.11, campus: "Surubim" },

  // Nazaré da Mata 
  ciencia_computacao_nazare: { corte: 57.41, campus: "Nazré da Mata" },
  ciencias_biologicas_nazare: { corte: 43.84, campus: "Nazré da Mata" },
  geografia_nazare: { corte: 37.17, campus: "Nazré da Mata" },
  historia_nazare: { corte: 48.25, campus: "Nazré da Mata" },
  letras_port_ing_nazare: { corte: 50.42, campus: "Nazré da Mata" },
  letras_port_esp_nazare: { corte: 38.44, campus: "Nazré da Mata" },
  tecnologia_logistica_nazare: { corte: 38.37, campus: "Nazré da Mata" },
  matematica_nazare: { corte: 48.39, campus: "Nazré da Mata" },
  pedagogia_nazare: { corte: 42.03, campus: "Nazré da Mata" },

  // Palmares
  administracao_palmares: { corte: 28.76, campus: "Palmares" },
  servico_social_palmares: { corte: 27.31, campus: "Palmares" },

  // Ouricuri
  enfermagem_ouricuri: { corte: 45.66, campus: "Ouricuri" },
  
  // Salgueiro
  administracao_salgueiro: { corte: 40.24, campus: "Salgueiro" }
};


function calcularNota3() {
  const nota1Input = document.getElementById("nota1");
  const nota2Input = document.getElementById("nota2");
  const notaRedacaoInput = document.getElementById("notaRedacao");
  const nota3Input = document.getElementById("nota3");
  const cursoSelecionado = document.getElementById("curso").value;
  const resultadoDiv = document.getElementById("resultado");

  const nota1 = parseFloat(nota1Input.value) || 0;
  const nota2 = parseFloat(nota2Input.value) || 0;
  const notaRedacao = parseFloat(notaRedacaoInput.value) || 0;

  if (cursos.hasOwnProperty(cursoSelecionado)) {
      const { corte, campus } = cursos[cursoSelecionado];
      const notaMinima = corte;

      const N1 = notaMinima * 10;
      const N2 = nota1 + nota2;
      const N3 = 3 * N2;
      const N4 = N1 - N3;
      const N5 = N4 - notaRedacao;
      const nota3Necessaria = N5 / 3;

      const mediaFinal = (nota3Necessaria * 0.75) + (notaRedacao * 0.25);
      nota3Input.value = nota3Necessaria.toFixed(2);

      // Calcular questões necessárias
      // Fórmula: teto(nota3Necessaria / 1.053)
      let questoes = Math.ceil(nota3Necessaria / 1.053);
      if (questoes < 0) questoes = 0;

      if (nota3Necessaria > 100) {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Nota necessária no SSA-3: ' + nota3Necessaria.toFixed(2);
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)"; 
      } else if (nota3Necessaria < 0) {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Você já passou!';
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)"; 
      } else {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Nota necessária no SSA-3: ' + nota3Necessaria.toFixed(2);
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)";
      }

      resultadoDiv.style.display = "block";

      mostrarDetalhes(nota1, nota2, notaRedacao, parseFloat(nota3Input.value), notaMinima, mediaFinal, campus, questoes);
  } else {
      resultadoDiv.innerHTML = "Curso não encontrado.";
      nota3Input.value = "";
      resultadoDiv.style.display = "block";
  }
}

function mostrarDetalhes(nota1, nota2, notaRedacao, nota3, notaCorte, mediaFinal, campus, questoes) {
  const detalhesDiv = document.getElementById("detalhes");
  
  // Cálculo da nota final para exibição
  const notaFinalExibida = ((nota1 + nota2 + notaRedacao + nota3) / 4).toFixed(2);
  
  let htmlContent = `
    <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="font-size: 2em; color: #333;">Você precisa acertar <strong>${questoes}</strong> questões no SSA-3</h2>
    </div>
    <hr style="margin: 20px 0; border: 1px solid #ccc;">
    <h3>DETALHAMENTO DE NOTAS</h3>
    <p>Nota da prova objetiva (SSA-3): <span id="nota3Detalhe">${nota3.toFixed(2)}</span></p>
    <p>Média Final no SSA-3: <span id="notaFinal">${notaFinalExibida}</span></p>
    <p>Nota de corte do curso: <span id="notaCorteCurso">${notaCorte.toFixed(2)}</span></p>
    <p>Classificação: <span id="classificacao">${nota3 > 100 ? "Reprovado (Impossível passar, nota necessária > 100)" : "Aprovado!"}</span></p>
  `;

  detalhesDiv.innerHTML = htmlContent;
  detalhesDiv.style.display = "block";
}

function limparTudo() {
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("notaRedacao").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado").style.display = "none";
  document.getElementById("detalhes").style.display = "none";
}
