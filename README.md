# ParkingControl -- Controle de estacionamento

https://github.com/user-attachments/assets/f2d17cf7-ebf3-48bb-a682-57fa8da794f7

Tecnologias utilizadas no desenvolvimento WEB: Angular, TypeScript, RxJS, ngx-mask, SCSS e Angular Material

Desenvolvido um aplicativo para controle de estacionamento onde o usuário poderá registrar a entrada e saída dos veículos. 

Os valores praticados pelo estacionamento foram parametrizados em uma tabela de preços com controle vigência. Exemplo: Valores válidos para o período de 01/01/2024 até 31/12/2024.

Utilizado a data de entrada do veículo como referência para buscar a tabela de preços.

A tabela de preço contemplou o valor da hora inicial e valor para as horas adicionais.

Foi cobrado metade do valor da hora inicial quando o tempo total de permanência no estacionamento for igual ou inferior a 30 minutos.

O valor da hora adicional possui uma tolerância de 10 minutos para cada 1 hora. Exemplo: 30 minutos valor R$ 1,00 | 1 hora valor R$ 2,00 | 1 hora 10 minutos valor R$ 2,00 | 1 hora e 15 minutos valor R$ 3,00 | 2 horas e 5 minutos valor R$ 3,00 | 2 horas e 15 minutos valor R$ 4,00.

Utilizado a placa do veículo como chave de busca. 

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

- Node.js: https://nodejs.org/  --- (Versão minima 18.13) compatível com Angular 17.3.7
- Angular CLI: `npm install -g @angular/cli`

## Instalação

1. Clone o repositório: `git clone https://github.com/alinebarbosasilva/parking-control-web.git`
2. Navegue até o diretório do projeto: `cd parking-control-web`
3. Instale as dependências: `npm install`
4. Execute npm start no terminal
5. Para acessar entre na url: localhost:4200
