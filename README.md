# Projeto MeuNFT

## Objetivo do Projeto

Este projeto foi desenvolvido como parte de um desafio de programação para explorar o desenvolvimento de tokens não fungíveis (NFTs) utilizando contratos inteligentes na blockchain Ethereum. O objetivo principal foi implementar funcionalidades para mintar (criar) e transferir NFTs de forma segura e eficiente.

## Estrutura do Projeto

A estrutura do projeto inclui várias partes principais:

- `contracts/`: Contém os contratos inteligentes escritos em Solidity.
- `scripts/`: Scripts para deploy e interação com os contratos.
- `test/`: Contém os testes automatizados para os contratos utilizando Mocha e Chai.
- `artifacts/` e `cache/`: Diretórios gerados automaticamente pelo Hardhat para armazenar artefatos de compilação e dados de cache.

## Tecnologias e Ferramentas Utilizadas

- **Solidity**: Linguagem de programação para criar contratos inteligentes.
- **Hardhat**: Framework usado para desenvolvimento, teste e deploy de contratos.
- **Ethers.js**: Biblioteca para interagir com a Ethereum Blockchain.
- **Chai**: Biblioteca de asserção para testes.
- **Node.js**: Ambiente de execução para o desenvolvimento com JavaScript.

## Bibliotecas Instaladas

- `@nomiclabs/hardhat-ethers`: Plugin para integrar Ethers.js com Hardhat.
- `@nomiclabs/hardhat-waffle`: Utilitário para testes usando Waffle.
- `chai`: Usado para escrever testes de asserção.
- `ethereum-waffle`: Biblioteca para testar contratos inteligentes.

## Processo de Desenvolvimento

### Inicialização e Configuração

O projeto começou com a configuração do ambiente de desenvolvimento, incluindo a instalação do Node.js, Hardhat e outras dependências relevantes:

npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers chai ethereum-waffle

## Desenvolvimento dos Contratos

Os contratos foram desenvolvidos em Solidity, utilizando as melhores práticas de segurança e eficiência. O principal contrato, MeuNFT.sol, implementa a interface ERC-721 para NFTs.

## Testes

Os testes foram escritos usando Mocha e Chai para garantir que todos os aspectos do contrato funcionassem conforme esperado. Os testes incluem a verificação de mintagem de NFTs e transferências de propriedade.

## Deploy

O script de deploy foi usado para implantar os contratos na rede de teste local e na testnet Ethereum:

npx hardhat run scripts/deploy.js --network localhost
npx hardhat run scripts/deploy.js --network ropsten

## Compilação dos Contratos

![Compilação com Hardhat](./path/to/Hardhat_Compile.PNG)

## Deploy dos Contratos

![Deploy de Contratos](./path/to/Deploy.PNG)

## Dificuldades Encontradas

Durante o projeto, enfrentamos desafios relacionados à compatibilidade de módulos ES com algumas bibliotecas Node.js, em particular, a importação correta do Chai para testes. Foram necessárias várias tentativas e ajustes para configurar corretamente as importações e garantir que os testes fossem executados sem erros.

## Comandos Utilizados

    Compilar contratos: npx hardhat compile
    Executar testes: npx hardhat test
    Deploy de contratos: npx hardhat run scripts/deploy.js --network <network>

## Histórico do Projeto de Contrato Inteligente NFT

### Inicialização e Configuração do Projeto

O projeto começou com a criação de um ambiente de desenvolvimento local usando Hardhat, uma popular framework Ethereum para desenvolvimento de contratos inteligentes. O primeiro passo foi instalar o Hardhat no diretório do projeto, MeuNFT, usando o comando:

npm install --save-dev hardhat

Após a instalação, o projeto foi inicializado com npx hardhat, criando a estrutura básica de arquivos e diretórios. Foi escolhida a criação de um projeto JavaScript simples.

### Instalação de Dependências e Configuração do Compilador

Durante o desenvolvimento, foram necessárias várias bibliotecas adicionais. A primeira delas foi @openzeppelin/contracts para utilizar contratos padrão seguros para o token NFT ERC-721. A instalação foi realizada com:

npm install --save-dev @openzeppelin/contracts

Houve um desafio com a versão do compilador Solidity, pois o OpenZeppelin exigia a versão 0.8.20. O arquivo hardhat.config.js foi atualizado para corresponder à versão necessária, garantindo compatibilidade e evitando problemas de compilação.

### Desenvolvimento e Testes do Contrato

O contrato MeuNFT foi desenvolvido estendendo ERC721URIStorage e Ownable do OpenZeppelin, com funções para mintar tokens NFT de maneira segura. Durante os testes iniciais, encontrou-se um erro com o construtor Ownable, que foi resolvido passando o endereço do proprietário inicial explicitamente no deploy do contrato.

Testes automatizados foram escritos em meuNFT.test.js, utilizando a biblioteca chai para asserções. A instalação de chai e configuração do Hardhat para uso com Waffle (uma biblioteca de testes) foram realizadas com:

npm install --save-dev chai @nomiclabs/hardhat-waffle ethereum-waffle

### Deploy do Contrato

O deploy foi realizado na rede de teste Sepolia, utilizando as credenciais e a URL do Infura configuradas em hardhat.config.js. O processo revelou um problema com o deploy múltiplo não retornando o endereço do contrato, o que foi ajustado e corrigido.

### Desafios e Soluções

    Problemas de Versão do Compilador Solidity: Resolvido ajustando a configuração em hardhat.config.js para a versão específica exigida pelos contratos OpenZeppelin.
    Erro no Construtor Ownable: Corrigido ao modificar o construtor em MeuNFT.sol para aceitar um parâmetro de endereço.
    Dependências Faltantes para Testes: Solucionado instalando as bibliotecas necessárias e ajustando as configurações do Hardhat para integração com Waffle.

### Conclusão

O projeto concluiu com sucesso o desenvolvimento, testes e deploy de um contrato inteligente NFT, utilizando as melhores práticas e ferramentas disponíveis na comunidade Ethereum. A documentação detalhada de cada passo, as dificuldades encontradas e as soluções implementadas fornecem uma base sólida para futuras melhorias e manutenção do contrato.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.

Esse `README.md` oferece uma visão detalhada do projeto, incluindo como ele foi iniciado, as ferramentas usadas, os desafios enfrentados e como as funcionalidades foram testadas e implementadas. Ajuste conforme necessário para refletir qualquer detalhe adicional ou pessoal relevante ao seu projeto específico. Se precisar de mais ajuda ou tiver outras questões, estou aqui para ajudar!
