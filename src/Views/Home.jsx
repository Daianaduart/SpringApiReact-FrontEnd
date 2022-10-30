import React from "react";

export default function Home() {
    return (
        <>
            <div className="calen my-3">
                <form>
                    <div>
                        <label>Origem</label>
                        <input type="text" className="form-control mt-2" placeholder="Insira o local de origem" required />
                    </div>
                    <div>
                        <label>Destino</label>
                        <input type="text" className="form-control mt-2" placeholder="Insira o local de destino" required />
                    </div>
                    <div>
                        <label>Data de ida</label>
                        <input type="date" className="form-control mt-2" required />
                    </div>
                    <div>
                        <label>Data de volta</label>
                        <input type="date" className="form-control mt-2" required />
                    </div>
                    <button type="button" className="btn btn-procurar mt-4">Procurar</button>
                </form>
            </div>


            <div className="carrossel-img my-3">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./img/praia.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Os melhores destinos com os melhores preços</h5>
                                <p>Pacotes de viagem a partir de R$700,00 </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/capitolio.mg.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Destinos nacionais com as melhores ofertas</h5>
                                <p>Conheça os melhores lugares do Brasil com pacotes completos</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/foz-iguacu.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Destinos nacionais completos</h5>
                                <p>Pacotes com hospedagem e passagem aérea que cabem no seu BOLSO!!</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div className="cards mt-3 d-flex">
                <div className="card" style={{ width: "17rem" }}>
                    <img src="./img/niju_viagensgif1.gif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">A Niju Viagem leva aos seus clientes conforto, segurança e
                            qualidade em
                            nossos
                            roteiros.E tendo em mente que não precisamos estar de férias para viajar e conhecer diversos
                            destinos,
                            fazer
                            novas amizades, e
                            sair da rotina do dia a dia.
                        </p>
                    </div>
                </div>
                <div className="card" style={{ width: "17rem" }}>
                    <img src="./img/downloadpagamento.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Trabalhamos com diversas formas de pagamentos e parcelamentos para garantir que
                            você tenha a melhor experiência.</p>
                    </div>
                </div>
            </div>
        </>
    );
}