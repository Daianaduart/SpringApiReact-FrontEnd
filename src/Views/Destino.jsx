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
                                <h5>Os melhores destinos com os melhores pre??os</h5>
                                <p>Pacotes com hospedagem a partir de R$700,00 </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/capitolio.mg.jpg" class="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Destinos nacionais com as melhores ofertas</h5>
                                <p>Conhe??a os melhores lugares do Brasil com pacotes completos</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/foz-iguacu.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Destinos nacionais completos</h5>
                                <p>Pacotes com hospedagem e passagem a??rea que cabem no seu BOLSO!!</p>
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
                        <img src="./img/florianopolis.sc.png" class="card-img-top" alt="Austr??lia" />
                        <div className="card-body center ">
                            <h5 className="card-title">Florian??polis-SC</h5>
                            <p className="card-text">Florian??polis ?? campe?? de qualidade de vida entre as capitais do Brasil.
                                Deve ser por isso que quase 1 milh??o de turistas visita a capital catarinense. Lembrada como
                                uma das mais descoladas do Pa??s, todo mundo se encaixa nessa cidade. Afinal, atra????es
                                culturais e de entretenimento tem ??s sobras.</p>
                            <Link to="/Viagem-Create" className="btn btn-procurar text-black">Comprar</Link>
                        </div>
                    </div>
                    <div className="card m-5 " style={{ width: "18rem" }}>
                        <img src="./img/recife.jpg" className="card-img-top" alt="Peru" />
                        <div className="card-body center ">
                            <h5 className="card-title">Recife-PE</h5>
                            <p className="card-text">Recife ?? cheia de vida e de atra????es, e como grande parte das cidades
                                nordestinas possui tra??os fortes e caracter??sticas marcantes. A diversidade encontrada na
                                cultura ?? surpreendente. Cen??rio marcante, as pontes que cortam os rios do local lhe
                                conferiram a fama de "Veneza brasileira".
                            </p><br />
                            <Link to="/Viagem-Create" className="btn btn-procurar text-black">Comprar</Link>
                        </div>
                    </div>
                    <div className="card m-5 " style={{ width: "18rem" }}>
                        <img src="./img/foz-iguacu.jpg" className="card-img-top" alt="..." />
                        <div className="card-body center ">
                            <h5 className="card-title">Foz de Igua??u-PR</h5>
                            <p className="card-text">Foz do Igua??u ?? um dos destinos mais visitados do mundo e apresenta uma
                                diversidade de atra????es que encantam e apaixonam os turistas.
                            </p><br /><br /><br /><br /><br />
                            <Link to="/Viagem-Create" className="btn btn-procurar text-black align-items-end">Comprar</Link>
                        </div>
                    </div>
                    <div className="card m-5" style={{ width: "18rem" }}>
                        <img src="./img/capitolio.mg.jpg" class="card-img-top" alt="..." />
                        <div className="card-body center">
                            <h5 className="card-title">Capit??li-MG</h5>
                            <p className="card-text">As ??guas em tom de esmeralda nos arredores de Capit??lio deram ?? regi??o a
                                fama de "mar de Minas Gerais". E o t??tulo n??o ?? para menos!A verdade, no entanto, ?? que
                                Capit??lio vai al??m-mar e h?? diversas outras atra????es para curtir durante os dias de viagem.
                                Prepare-se para dias de intenso contato com a natureza e muito banho de cachoeira.</p>
                            <Link to="/Viagem-Create" className="btn btn-procurar text-black">Comprar</Link>
                        </div>
                    </div>
                    <div className="card m-5" style={{ width: "18rem" }}>
                        <img src="./img/cancun.jpg" class="card-img-top" alt="..." />
                        <div className="card-body center">
                            <h5 className="card-title">Canc??n</h5>
                            <p className="card-text">Canc??n ?? um dos destinos mais famosos do M??xico e um dos mais completos do
                                Caribe, com op????es de lazer e descanso para todas as idades. E motivos n??o faltam para isso:
                                s??o
                                in??meras op????es de divers??o, cultura e badala????o ??? isso sem falar no maravilhoso mar
                                caribenho.
                            </p><br /><br /><br />
                            <Link to="/Viagem-Create" className="btn btn-procurar text-black">Comprar</Link>
                        </div>
                    </div>
                    <div className="card m-5" style={{ width: "18rem" }}>
                        <img src="./img/orlando.jpg" className="card-img-top" alt="..." />
                        <div className="card-body center">
                            <h5 className="card-title">Orlando</h5>
                            <p className="card-text">S??o ineg??veis a magia e a atra????o exercidas por Orlando, Fl??rida.E por que
                                Orlando ?? t??o fascinante? ?? uma resposta f??cil: porque Orlando tem a maior concentra????o de
                                parques tem??ticos do mundo, muitos passeios junto ?? natureza, um para??so das compras nos
                                imensos Outlets, um cen??rio gastron??mico incr??vel, turismo cultural pujante e muito mais!
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