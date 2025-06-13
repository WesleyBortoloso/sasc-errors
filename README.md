# Simulador de analise sintatica em compiladores

- Esse é o repositório destinado ao TCC de Rogério Crestani.

- Documento do projeto:  [TCC-Simulador-Analise-Sintatica.pdf](https://github.com/user-attachments/files/17387550/TCC2_Rogerio_Crestani-.Corrigido-Versao.2.pdf)

Acesse o simulador por esse link: https://sasc.netlify.app/

# O atual repositório busca somente evoluir um código previamente desenvolvido por Rogério Crestani.

### O que foi implementado?
Tratamento de Erros Sintáticos:
 - Indicar visualmente as células da tabela de parsing que contêm erros de análise.
 - Células com o conteúdo "ERRO!" agora recebem a classe .inactive-cell por padrão.
 - A célula exata onde o erro ocorreu no parsing recebe as classes adicionais .error-cell e .destak.

Destaque Visual de Erros:
 - Todas as células com erro estavam com a mesma aparência, mesmo a célula crítica.
 > Aplicação de CSS com maior especificidade para garantir que a célula de erro principal fique em vermelho destacado

### 1- Foi útil? Fácil de usar? Sugestões de melhorias?
Muito útil, principalmente para estudos, ter um ambiente de testes dessa maneira auxilia no entendimento do funcionamento das regras,
a utilização do tutorial facilitou muito a utilização, como melhoria, seria legal aceitar o espaçamento da gramática inserida, prevenindo erros do usuário.

### 2- É interessante para o aprendizado? Faltou algo?
Muito interessante, atua como uma ferramenta auxiliar para o conteúdo repassado pelo professor.
Poderia ser mais explicativo, explicar por exemplo a função de cada tabela (ações, transições), para quem esta estudando é mais claro,
mas ajudaria aqueles que estão iniciando.

### 3- Onde mais caberia um TC assim no curso?
Seguindo o mesmo formato de tornar algoritmos mais visuais, acredito que em estruturas de dados seria muito bem visto uma ferramenta assim
