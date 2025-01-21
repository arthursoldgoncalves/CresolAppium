import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import LoginPage from '../pages/login.page';

Then(/^clico no botão de 'Acesse sua conta'$/, async function(){
    //const botaoLogar = await driver.$('//android.widget.Button[@text="Acesse sua conta"]');
    await LoginPage.botaoLogar.waitForDisplayed();
    await LoginPage.botaoLogar.click();
});

Then(/^preencho os campos de cadastro$/, async function(){
    await LoginPage.inputCadastro.addValue(" "); // Criar uma logíca para identificar o dado o campo está pedindo atraves do visible text e responder corretamente com os dados da massa
    await LoginPage.inputNomeDispositivo.addValue("automatizados");
});

Then(/^seleciono o periodo de liberação de acesso$/, async function(){
    await LoginPage.tempoIndefinido.click();
});

Given(/^que o Usuário abriu o aplicativo Cresol$/, async function(){
    await LoginPage.abaPf.waitForDisplayed();
    await LoginPage.abaPj.waitForDisplayed();
    await LoginPage.abaGf.waitForDisplayed();
    await expect(LoginPage.abaPf).toBeDisplayed();
});

When(/^apresentou a tela "Bem-vindo"$/, async function() {
    await expect(LoginPage.bemvindoLogin).toBeDisplayed(); // se apresentar a mensagem de bem-vindo o step é dado como sucesso
});

When(/^clicou no campo "CPF"$/, async function() {
    await LoginPage.inputCpf.waitForDisplayed();
    await LoginPage.inputCpf.click();
});

When(/^preencheu o campo "CPF"$/, async function() {
    await LoginPage.inputCpf.setValue(""); 
});

When(/^clicou no campo "Senha"$/, async function() {
    await LoginPage.inputSenha.click();
});

When(/^preencheu o campo "Senha"$/, async function() {
    await LoginPage.inputSenha.setValue("teste123");
});

When(/^clicou no ícone "olho com um risco"$/, async function(){
    await LoginPage.escondeSenha.click();
});

When(/^apresentou os caracteres do campo senha$/, async function(){
    await expect(inputSenha).toHaveText('teste123');
});

When(/^desmarcou o campo "Guardar meu CPF"$/, async function(){
    await LoginPage.guardarCpf.click();
    await expect(LoginPage.guardarCpf).not.toBeChecked();
});

When(/^clicou no botão "Acesse sua conta"$/, async function(){
    await LoginPage.botaoLogar.click();
});

When(/^clicou no botão "Não" da modal "Deseja habilitar o TouchID"$/, async function(){
    
});

When(/^apresentou a Home do app$/, async function(){
    
});

When(/^clicar no menu "hamburguer > Sair do app"$/, async function(){
    
});

When(/^clicar no botão "Sair" modal "Deseja sair"$/, async function(){
    
});

Then(/^deve apresentar a tela "Bem-vindo" com o campo "CPF" vazio$/, async function(){
    
});