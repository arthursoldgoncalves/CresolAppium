import { Given, When, Then } from '@cucumber/cucumber';
import { expect, $ } from '@wdio/globals';

Given(/^Eu estou na tela de login$/, async () => {
    const abaPf = await driver.$('-android uiautomator:new UiSelector().resourceId("single-login__btn--tabPF")');
    const abaPj = await driver.$('-android uiautomator:new UiSelector().resourceId("single-login__btn--tabPJ")');
    const abaGf = await driver.$('-android uiautomator:new UiSelector().resourceId("single-login__btn--tabGF")');
    await expect(abaPf, abaPj, abaGf).toBeDisplayed();
});

When(/^Eu preencho os dados de Login no campo 'Pessoa Física'$/, async () => {
    const inputCpf = await driver.$('//android.webkit.WebView[@text="CresolApp"]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.EditText');
    await inputCpf.waitForDisplayed();
    await inputCpf.click();
    await inputCpf.setValue("02799760031"); 
    const inputSenha = await driver.$('//android.webkit.WebView[@text="CresolApp"]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.EditText');
    await inputSenha.click();
    await inputSenha.setValue("teste123");
});

Then(/^Clico no botão de Acesse sua conta$/, async () => {
    const botaoLogar = await driver.$('//android.widget.Button[@text="Acesse sua conta"]');
    await botaoLogar.click();
});
