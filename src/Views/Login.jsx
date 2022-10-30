import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <h1 className=" green text-center my-5">Bem-vindo à sua próxima viagem!!!</h1>
            <div className="cards-form align-items-center my-5">

                <div className="col-md-6 col-lg-7">
                    <div className="card-body p-4 p-lg-5 text-black">

                        <form>
                            <div className="offset-md-6">
                                <div className="form-outline mb-4">
                                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                    <label className="form-label" for="form2Example17">Seu e-mail</label>
                                </div>




                                <div className="form-outline mb-4">
                                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                    <label className="form-label" for="form2Example27">Sua senha</label>
                                </div>

                                <div className="pt-1 mb-4">
                                    <button className="btn btn-procurar text-black" type="button"><Link to="/Home" className="text-black"
                                        style={{ textDecoration: "none" }}>
                                        Entrar</Link></button>
                                </div>

                                <Link className="small text-muted" to="/">Esqueceu sua senha?</Link>
                                <p className="mb-5 pb-lg-2">Não tem uma conta? <Link to="/Cadastro">Faça aqui o seu
                                    Cadastro</Link></p>
                                <Link to="/" className="small text-muted">Termos de uso</Link> <br />
                                <Link to="/" className="small text-muted">Privacidade</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
}