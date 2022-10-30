import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (


        <nav className="navbar  navbar-light navbar-expand-lg rounded">
            <div className="container-fluid">
                <Link className="navbar-brand fs-2" to="/Home" style={{ color: "#00c2cb" }}>
                    <img src="./img/niju_viagens1.png" alt="" width="300" height="200"
                        className="d-inline-block align-text-center" />
                    Niju Viagens
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Destino" className="nav-link fs-5 ">
                                    Destinos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Promocao" className="nav-link fs-5 ">
                                    Promoções
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Viagem" className="nav-link fs-5 ">
                                    Viagem
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Cliente" className="nav-link fs-5 ">
                                    Cliente
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contato" className="nav-link fs-5 ">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="login">
                    <Link className="nav-link  fs-5" to="/Login" >Login</Link>
                    <Link className="nav-link  fs-5" to="/Cadastro" >Cadastra-se</Link>

                </div>
            </div>
        </nav>


    );
}