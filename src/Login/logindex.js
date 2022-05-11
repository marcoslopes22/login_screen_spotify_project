import React from 'react';
import './login.css';

import facebooklogo from './img/facebooklogo.png';
import applelogo from './img/applelogo.png';
import googlelogo from './img/googlelogo.png';

function Login(){

    const loginFacebookButton = (valor) => {
        console.log(valor.target.value);
    }
    const loginSenhaButton = (valor) => {
        console.log(valor.target.value);
    }
    const loginAppleButton = () => console.log("Login com a Apple.");
    const loginGoogleButton = () => console.log("Login com o Google.");
    const loginTelefoneButton = () => console.log("Login com o número de telefone.");
    
    const executarLogin = () => console.log("Entrar com a conta do Spotify.");

    const criarConta = () => console.log("Redicionar para a tela de cadastro.");

    return (
        <div className="login-screen">
            <div className="login">

                <div className="topside-buttons">

                    <div className="top-text">
                        <h3>Para continuar, inicie uma seção no Spotify</h3>
                    </div>

                    <div className="login-facebook">
                        <button type="submit" onClick={loginFacebookButton}>
                            <p className="facebook-button-attributes">
                                <img src={facebooklogo}/>
                                <strong>CONTINUAR COM O FACEBOOK</strong>
                            </p>
                        </button>
                    </div>
                    <div className="login-apple" onClick={loginAppleButton}>
                        <button type="submit">
                            <p className="apple-button-attributes">
                                <img src={applelogo}/>
                                <strong>CONTINUAR COM A APPLE</strong>
                            </p>
                        </button>
                    </div>
                    <div className="login-google" onClick={loginGoogleButton}>
                        <button type="submit">
                            <p className="google-button-attributes">
                                <img src={googlelogo}/>
                                <strong>CONTINUAR COM O GOOGLE</strong>
                            </p>
                        </button>
                    </div>
                    <div className="login-telefone" onClick={loginTelefoneButton}>
                        <button type="submit">
                            <p className="telefone-button-attributes">
                                <strong>CONTINUAR COM O NÚMERO DE TELEFONE</strong>
                            </p>
                        </button>
                    </div>
                </div>

                <div className="mid-division">
                    <hr className="src-mid"></hr>
                        <h3>OU</h3>
                    <hr className="src-mid"></hr>
                </div>

                <div className="mid">
                    <div className="loginInputEmail">
                        <h1>Endereço de e-mail ou nome de usuário</h1>
                        <input
                        className="text"
                        placeholder="Endereço de e-mail ou nome de usuário"
                        onChange={loginFacebookButton}
                        ></input>
                    </div>
                    <div className="loginInputPassword">
                        <h1>Senha</h1>
                        <input
                        className="text"
                        placeholder="Senha"
                        type="password"
                        onChange={loginSenhaButton}
                        ></input>
                    </div>
                    <div className="missingPassword">
                        <text>Esqueceu sua senha?</text>
                    </div>
                    <div className="login-button">
                        <input className="check" id="caixinha" type="checkbox"></input>
                        <label for="caixinha">Lembrar de mim</label>
                        <button type="submit" onClick={executarLogin}>
                            <strong>ENTRAR</strong>
                        </button>
                    </div>
                </div>

                <div className="broke-line-bottom">
                    <hr className="src-two"></hr>
                </div>

                <div className="botside">
                    <h1>Não tem uma conta?</h1>
                    <button type="submit" onClick={criarConta}>
                        <strong>INSCREVER-SE NO SPOTIFY</strong>
                    </button>
                </div>
                <div className="credits">
                    <p>
                        Desenvolvido por Marcos Aurélio Lopes de Araújo.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;