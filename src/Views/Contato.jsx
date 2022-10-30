import React from "react";

export default function Contato() {
    return (
        <>
            <h1 className=" green text-center my-5">Fale Conosco</h1>
            <div className="cards-form">
                <form className="align-items-center my-5">
                    <div className="offset-md-4">
                        <div className="row">
                            <div className="row">
                                <div className="col-3 col-sm-6">
                                    <label className="visually-hidden" for="autoSizingInput">Nome</label>
                                    <input type="text" className="form-control" id="autoSizingInput"
                                        placeholder="Seu nome completo" />
                                </div>
                                <br /><br /><br />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 col-sm-6">
                                <label className="visually-hidden" for="autoSizingInputGroup">Email</label>
                                <div className="input-group">
                                    <div className="input-group-text btn-procurar">@</div>
                                    <input type="text" className="form-control" id="autoSizingInputGroup"
                                        placeholder="Seu e-mail" />
                                </div>
                                <br />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-3 col-sm-6">
                                <label className="visually-hidden" for="autoSizingInputGroup">Telefone</label>
                                <div className="input-group">
                                    <div className="fa fa-phone input-group-text btn-procurar"></div>
                                    <input type="tel" class="form-control" id="autoSizingInputGroup"
                                        placeholder="Seu telefone" />
                                </div>
                                <br />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-3 col-sm-6">
                                <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                                <select className="form-select" id="autoSizingSelect">
                                    <option selected>Qual o motivo do seu contato?</option>
                                    <option value="1">Informações</option>
                                    <option value="2">Reclamações</option>
                                    <option value="3">Elogios</option>
                                </select>
                            </div>
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-3 col-sm-6">
                                <div className="mb-3">
                                    <label for="" className="form-label"></label>
                                    <textarea className="form-control" placeholder="Digite aqui sua mensagem" name="" id=""
                                        rows="5"></textarea>
                                </div>
                            </div>

                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-procurar">Enviar</button>
                        </div>
                    </div>
                </form>


            </div>
        </>
    );
}