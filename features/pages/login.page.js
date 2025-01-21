class LoginPage{

    //Componentes tela de login
    get inputCpf() {
        return $('-android uiautomator:new UiSelector().resourceId(\"ui-input__input--input-with-mask\").instance(0)')
    }

    get inputSenha() {
        return $('-android uiautomator:new UiSelector().resourceId("ui-input__input--input-with-mask").instance(1)')
    }

    get bemvindoLogin(){
        return $("-android uiautomator:new UiSelector().text(\"Bem-vindo\")")
    }

    get escondeSenha(){
        return $("-android uiautomator:new UiSelector().resourceId(\"ui-icon__img--icon-eye-visible\")")
    }

    get botaoLogar(){
        return $('//android.widget.Button[@text="Acesse sua conta"]')
    }

    get guardarCpf(){
        return $("-android uiautomator:new UiSelector().className(\"android.widget.Button\").instance(3)")
    }

    get escondeSenha(){
        return $("-android uiautomator:new UiSelector().resourceId(\"ui-icon__img--icon-eye-visible\")")
    }

    get abaPf(){
        return $('-android uiautomator:new UiSelector().resourceId("single-login__btn--tabPF")');
    }

    get abaPj(){
        return $('-android uiautomator:new UiSelector().resourceId("single-login__btn--tabPJ")');
    }

    get abaGf(){
        return $('-android uiautomator:new UiSelector().resourceId("single-login__btn--tabGF")');
    }

    //Componentes da modal de cadastro de dispositivo

    get tempoIndefinido(){
        return $("-android uiautomator:new UiSelector().resourceId(\"new-device__input--no-expire\")")
    }

    get inputCadastro(){
        return $("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(2)")
    }

    get inputNomeDispositivo(){
        return $("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(3)")
    }

}

export default new LoginPage()
