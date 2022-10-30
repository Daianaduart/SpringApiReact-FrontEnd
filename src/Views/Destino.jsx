import React from "react";
import { Link } from "react-router-dom";

export default function Destino() {
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


            <div className="carrossel-img mb-3">
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
                            <img src="./img/praia.png" class="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Os melhores destinos com os melhores preços</h5>
                                <p>Pacotes com hospedagem a partir de R$700,00 </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/capitolio.mg.jpg" class="d-block w-100" alt="..." />
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



            <div className="cards-destino mt-3 d-flex">
                <div className="cards-destinos row d-flex flex-wrap justify-content-around">

                    <div className="card m-5 " style={{ width: "18rem" }}>
                        <img src="./img/florianopolis.sc.png" class="card-img-top" alt="Austrália" />
                        <div className="card-body center ">
                            <h5 className="card-title">Florianópolis-SC</h5>
                            <p className="card-text">Florianópolis é campeã de qualidade de vida entre as capitais do Brasil.
                                Deve ser por isso que quase 1 milhão de turistas visita a capital catarinense. Lembrada como
                                uma das mais descoladas do País, todo mundo se encaixa nessa cidade. Afinal, atrações
                                culturais e de entretenimento tem às sobras.</p>
                            <Link to="/Viagem-Create" className="btn btn-procurar text-black">Comprar</Link>
                        </div>
                    </div>
                    <div className="card m-5 " style={{ width: "18rem" }}>
                        <img src="./img/recife.jpg" className="card-img-top" alt="Peru" />
                        <div className="card-body center ">
                            <h5 className="card-title">Recife-PE</h5>
                            <p className="card-text">Recife é cheia de vida e de atrações, e como grande parte das cidades
                                nordestinas possui traços fortes e características marcantes. A diversidade encontrada na
                                cultura é surpreendente. Cenário marcante, as pontes que cortam os rios do local lhe
                                conferiram a fama de "Veneza brasileira".
                            </p><br />
                            <Link to="/Viagem-Create" className="btn btn-procurar text-black">Comprar</Link>
                        </div>
                    </div>
                    <div className="card m-5 " style={{ width: "18rem" }}>
                        <img src="./img/foz-iguacu.jpg" className="card-img-top" alt="..." />
                        <div className="card-body center ">
                            <h5 className="card-title">Foz de Iguaçu-PR</h5>
                            <p className="card-text">Foz do Iguaçu é um dos destinos mais visitados do mundo e apresenta uma
                                diversidade de atrações que encantam e apaixonam os turistas.
                            </p><br /><br /><br /><br /><br />
                            <Link to="/Viagem-Create" className="btn btn-procurar text-black align-items-end">Comprar</Link>
                        </div>
                    </div>
                    <div className="card m-5" style={{ width: "18rem" }}>
                        <img src="./img/capitolio.mg.jpg" class="card-img-top" alt="..." />
                        <div className="card-body center">
                            <h5 className="card-title">Capitóli-MG</h5>
                            <p className="card-text">As águas em tom de esmeralda nos arredores de Capitólio deram à região a
                                fama de "mar de Minas Gerais". E o título não é para menos!A verdade, no entanto, é que
                                Capitólio vai além-mar e há diversas outras atrações para curtir durante os dias de viagem.
                                Prepare-se para dias de intenso contato com a natureza e muito banho de cachoeira.</p>
                            <Link to="/Viagem-Create" className="btn btn-procurar text-black">Comprar</Link>
                        </div>
                    </div>
                    <div className="card m-5" style={{ width: "18rem" }}>
                        <img src="./img/cancun.jpg" class="card-img-top" alt="..." />
                        <div className="card-body center">
                            <h5 className="card-title">Cancún</h5>
                            <p className="card-text">Cancún é um dos destinos mais famosos do México e um dos mais completos do
                                Caribe, com opções de lazer e descanso para todas as idades. E motivos não faltam para isso:
                                são
                                inúmeras opções de diversão, cultura e badalação – isso sem falar no maravilhoso mar
                                caribenho.
                            </p><br /><br /><br />
                            <Link to="/Viagem-Create" className="btn btn-procurar text-black">Comprar</Link>
                        </div>
                    </div>
                    <div className="card m-5" style={{ width: "18rem" }}>
                        <img src="./img/orlando.jpg" className="card-img-top" alt="..." />
                        <div className="card-body center">
                            <h5 className="card-title">Orlando</h5>
                            <p className="card-text">São inegáveis a magia e a atração exercidas por Orlando, Flórida.E por que
                                Orlando é tão fascinante? É uma resposta fácil: porque Orlando tem a maior concentração de
                                parques temáticos do mundo, muitos passeios junto à natureza, um paraíso das compras nos
                                imensos Outlets, um cenário gastronômico incrível, turismo cultural pujante e muito mais!
                            </p>
                            <br />

                            <Link to="/Viagem-Create" className="btn btn-procurar text-black">Comprar</Link>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}