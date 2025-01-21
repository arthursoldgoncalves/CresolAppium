#language:pt
Funcionalidade: Login
testar o login do aplicativo cresol

  Cenario: Logar no APP com CPF não cadastrando registro
    Dado que o Usuário abriu o aplicativo Cresol
    E apresentou a tela "Bem-vindo"
    E clicou no campo "CPF"
    E preencheu o campo "CPF"
    E clicou no campo "Senha"
    E preencheu o campo "Senha"
    E clicou no ícone "olho com um risco"
    E apresentou os caracteres do campo senha
    E desmarcou o campo "Guardar meu CPF"
    E clicou no botão "Acesse sua conta"
    E clicou no botão "Não" da modal "Deseja habilitar o TouchID"
    E apresentou a Home do app
    Quando clicar no menu "hamburguer > Sair do app"
    E clicar no botão "Sair" modal "Deseja sair"
    Entao deve apresentar a tela "Bem-vindo" com o campo "CPF" vazio
  
  Cenario: Logar no APP com CPF cadastrando registro

  Cenario: Logar no APP com Chave Multicanal não cadastrada

  Cenario: Logar no APP com Chave Multicanal já cadastrada

  Cenario: Logar com CPF/Chave multicanal com mais de uma conta e validar a alternância entre as mesmas

  Cenario: Habilitar função Touch ID pela tela de Configurações

  Cenario: Desabilitar função touch ID