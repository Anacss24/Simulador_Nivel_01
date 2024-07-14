const dadosGoverno = JSON.parse("[{\"orgao\":\"MEC\",\"data\":\"01/01/2024\",\"valor\":500.00,\"status\":\"sucesso\"},{\"orgao\":\"Ministério da Saúde\",\"data\":\"03/01/2024\",\"valor\":750.00,\"status\":\"sucesso\"},{\"orgao\":\"MEC\",\"data\":\"05/01/2024\",\"valor\":1000.00,\"status\":\"falha\",\"motivo\":\"falta de documentação\"},{\"orgao\":\"Ministério da Educação\",\"data\":\"08/01/2024\",\"valor\":600.00,\"status\":\"sucesso\"},{\"orgao\":\"Ministério da Saúde\",\"data\":\"10/01/2024\",\"valor\":900.00,\"status\":\"sucesso\"},{\"orgao\":\"Ministério da Educação\",\"data\":\"12/01/2024\",\"valor\":300.00,\"status\":\"falha\",\"motivo\":\"dados inválidos\"},{\"orgao\":\"Ministério da Saúde\",\"data\":\"15/01/2024\",\"valor\":1200.00,\"status\":\"sucesso\"},{\"orgao\":\"MEC\",\"data\":\"17/01/2024\",\"valor\":800.00,\"status\":\"sucesso\"},{\"orgao\":\"Ministério da Educação\",\"data\":\"20/01/2024\",\"valor\":400.00,\"status\":\"sucesso\"},{\"orgao\":\"MEC\",\"data\":\"22/01/2024\",\"valor\":1100.00,\"status\":\"falha\"}]")

// 1 - A quantidade total de repasses
console.log("Total de repasses processados: " + dadosGoverno.length)


// 2 - Análise de Transações por status
console.log("\n***************** Quantidade total Repasses bem sucedidos *****************\n")
const quantidadesSucedidos = dadosGoverno.filter(elemento => elemento.status === 'sucesso')
console.log(`Quantidade total de repasses bem sucedidos: ${quantidadesSucedidos.length}`)

const quantidadeSucedidosOrgaoMec = quantidadesSucedidos.filter(elemento => elemento.orgao === 'MEC')
console.log(`Quantidade total de repasses bem sucedidos do orgão MEC: ${quantidadeSucedidosOrgaoMec.length}`)

const quantidadeSucedidosOrgaoME = quantidadesSucedidos.filter(elemento => elemento.orgao === 'Ministério da Educação')
console.log(`Quantidade total de repasses bem sucedidos do orgão Ministério da Educação: ${quantidadeSucedidosOrgaoME.length}`)

const quantidadeSucedidosOrgaoMS = quantidadesSucedidos.filter(elemento => elemento.orgao === 'Ministério da Saúde')
console.log(`Quantidade total de repasses bem sucedidos do orgão Ministério da Saúde: ${quantidadeSucedidosOrgaoMS.length}`)
console.log("\n***************** Valor total de repasses bem sucedidos *****************\n")
const valorTotalSucedidos = dadosGoverno
.filter(elemento => elemento.status === 'sucesso')
.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
console.log(`Valor total de repasses Sucedidos: ${valorTotalSucedidos.toFixed(2)}`)

const valorTotalSucedidosOrgaoMEC = dadosGoverno
.filter(elemento => elemento.status === 'sucesso' && elemento.orgao === 'MEC')
.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
console.log(`Valor total de repasses Sucedidos do orgão MEC: ${valorTotalSucedidosOrgaoMEC.toFixed(2)}`)

const valorTotalSucedidosOrgaoME = dadosGoverno
.filter(elemento => elemento.status === 'sucesso' && elemento.orgao === 'Ministério da Educação')
.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
console.log(`Valor total de repasses Sucedidos do orgão Ministério da Educação: ${valorTotalSucedidosOrgaoME.toFixed(2)}`)

const valorTotalSucedidosOrgaoMS = dadosGoverno
.filter(elemento => elemento.status === 'sucesso' && elemento.orgao === 'Ministério da Saúde')
.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
console.log(`Valor total de repasses Sucedidos do orgão Ministério da Saúde: ${valorTotalSucedidosOrgaoMS.toFixed(2)}`)

console.log("\n***************** Quantidade total Repasses com falhas *****************\n")
const quantidadesFalhas = dadosGoverno.filter(elemento => elemento.status === 'falha')
console.log(`Quantidade total de repasses com falhas: ${quantidadesFalhas.length}`)

const quantidadeFalhasOrgaoMec = dadosGoverno.filter(elemento => elemento.status ==='falha' && elemento.orgao === 'MEC')
console.log(`Quantidade total de repasses com falhas do orgão MEC: ${quantidadeFalhasOrgaoMec.length}`)

const quantidadeFalhasOrgaoME = dadosGoverno.filter(elemento => elemento.status ==='falha' && elemento.orgao === 'Ministério da Educação')
console.log(`Quantidade total de repasses com falhas do orgão Ministério da Educação: ${quantidadeFalhasOrgaoME.length}`)

const quantidadeFalhasOrgaoMS = dadosGoverno.filter(elemento => elemento.status ==='falha' && elemento.orgao === 'Ministério da Saúde')
console.log(`Quantidade total de repasses com falhas do orgão Ministério da Saúde: ${quantidadeFalhasOrgaoMS.length}`)

const quantidadeFalhasMotivo = dadosGoverno.filter(elemento => elemento.status === 'falha' && elemento.motivo)
console.log(`Quantidade total de repasses com falhas e com motivo: ${quantidadeFalhasMotivo.length}`)

console.log("\n***************** Valor total de repasses com Falhas *****************\n")
const valorTotalFalhas = dadosGoverno
.filter(elemento => elemento.status === 'falha')
.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
console.log(`Valor total de repasses com falhas: ${valorTotalFalhas.toFixed(2)}`)

const valorTotalFalhasOrgaoMEC = dadosGoverno
.filter(elemento => elemento.status === 'falha' && elemento.orgao === 'MEC')
.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
console.log(`Valor total de repasses com falhas do orgão MEC: ${valorTotalFalhasOrgaoMEC.toFixed(2)}`)

const valorTotalFalhasOrgaoME = dadosGoverno
.filter(elemento => elemento.status === 'falha' && elemento.orgao === 'Ministério da Educação')
.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
console.log(`Valor total de repasses com falhas do orgão Ministério da Educação: ${valorTotalFalhasOrgaoME.toFixed(2)}`)

const valorTotalFalhasOrgaoMS = dadosGoverno
.filter(elemento => elemento.status === 'falha' && elemento.orgao === 'Ministério da Saúde')
.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
console.log(`Valor total de repasses com falhas do orgão Ministério da Saúde: ${valorTotalFalhasOrgaoMS.toFixed(2)}`)

const valorTotalFalhasMotivo = dadosGoverno
.filter(elemento => elemento.status === 'falha' && elemento.motivo)
.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
console.log(`Valor total de repasses com falhas e motivo: ${valorTotalFalhasMotivo.toFixed(2)}`)

// 3 - Estatísticas de Repasses por critérios

const repasseComMaiorValor =  dadosGoverno.sort((elementoA, elementoB) => elementoB.valor - elementoA.valor);
console.log("\nDetalhes do repasse com maior valor: ", repasseComMaiorValor[0])

const repasseComMenorValor =  dadosGoverno.sort((elementoA, elementoB) => elementoA.valor - elementoB.valor);
console.log("\nDetalhes do repasse com menor valor: ", repasseComMenorValor[0])

const frequenciaOrgaos = {};


dadosGoverno.forEach(repasse => {
  const orgao = repasse.orgao;
  if (!frequenciaOrgaos[orgao]) {
    frequenciaOrgaos[orgao] = 0;
  }
  frequenciaOrgaos[orgao]++;
});

let orgaoMaisFrequente = null;
let maxFrequencia = 0;

for (const orgao in frequenciaOrgaos) {
  if (frequenciaOrgaos[orgao] > maxFrequencia) {
    maxFrequencia = frequenciaOrgaos[orgao];
    orgaoMaisFrequente = orgao;
  }
}

console.log("\nOrgão com mais repasses: ", orgaoMaisFrequente)


const frequenciaOrgaosSucesso = {};

quantidadesSucedidos.forEach(repasse => {
  const orgao = repasse.orgao;
  if (!frequenciaOrgaosSucesso[orgao]) {
    frequenciaOrgaosSucesso[orgao] = 0;
  }
  frequenciaOrgaosSucesso[orgao]++;
});


let orgaoMaisRepassesSucesso = null;
let maxRepassesSucesso = 0;

for (const orgao in frequenciaOrgaosSucesso) {
  if (frequenciaOrgaosSucesso[orgao] > maxRepassesSucesso) {
    maxRepassesSucesso = frequenciaOrgaosSucesso[orgao];
    orgaoMaisRepassesSucesso = orgao;
  }
}

console.log("\nOrgão com mais repasses com sucesso: ", orgaoMaisRepassesSucesso )

const frequenciaOrgaosFalhas = {};

quantidadesFalhas.forEach(repasse => {
  const orgao = repasse.orgao;
  if (!frequenciaOrgaosFalhas[orgao]) {
    frequenciaOrgaosFalhas[orgao] = 0;
  }
  frequenciaOrgaosFalhas[orgao]++;
});


let orgaoMaisRepassesFalhas = null;
let maxRepassesFalhas = 0;

for (const orgao in frequenciaOrgaosFalhas) {
  if (frequenciaOrgaosFalhas[orgao] > maxRepassesFalhas) {
    maxRepassesFalhas = frequenciaOrgaosFalhas[orgao];
    orgaoMaisRepassesFalhas = orgao;
  }
}

console.log("\nOrgão com mais repasses com Falhas: ", orgaoMaisRepassesFalhas )

// 4 - Apresentanção Automática 
function buscarTransacoesPorOrgao(orgao) {
    
    const transacoesFiltradas = dadosGoverno.filter(elemento => elemento.orgao === orgao);
  
    if (transacoesFiltradas.length > 0) {
      console.log(`\nTransações encontradas para o órgão: ${orgao}`);
      transacoesFiltradas.forEach((elemento) => {
        console.log(`  Órgão: ${elemento.orgao}`);
        console.log(`  Status: ${elemento.status}`);
        console.log(`  Valor: ${elemento.valor}`);
        console.log(`  Data: ${elemento.data}`);
        if(elemento.status === 'falha'){
            console.log(`  Motivo: ${elemento.motivo}`);
        }
        console.log('-----------------------');
      });
    } else {
      console.log(`\nNenhuma transação encontrada para o órgão: ${orgao}`);
    }
  }
  
buscarTransacoesPorOrgao('Ministério da Educação');
  
// 5 - Tratamento de erros 
const transacoesSemMotivo = dadosGoverno.filter(elemento => elemento.status === 'falha' && !elemento.motivo )

if(transacoesSemMotivo.length > 0){
    console.log("\nTransação sem motivo da falha!");
    transacoesSemMotivo.forEach((elemento) => {
        console.log("- Detalhes da transação:");
        console.log(`  Orgão: ${elemento.orgao}`);
        console.log(`  Data: ${elemento.data}`);
        console.log(`  Valor: ${elemento.valor}`);
        console.log(`  Status: ${elemento.status}`);
        console.log("Erro: o motivo da falha de repasse não foi especificado.");
    });
} else {
    console.log("Não foram encontradas transações sem motivo da falha.");
};

