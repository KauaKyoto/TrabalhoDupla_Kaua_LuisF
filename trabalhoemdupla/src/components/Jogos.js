function Jogos(props) {
    return(
    <div>
        <h2> Among Us </h2>
        <br></br>
        <h4> R$49,99 </h4>
        <br></br>
        <p>
            Jogo de estratégia e detetive, onde você tem que descobrir os impostores e retirá-los da nave.
        </p>
        <div className="categoria">
            <p> A categoria deste jogo é {props.Jogos} </p>
        </div>
    </div>
    );
}

export default Jogos