function Produto(props) {
    return(
    <div>
        <h2> Perfume Avon </h2>
        <br></br>
        <h4> R$169,99 </h4>
        <br></br>
        <p>
            Perfume Avon gold platinum edition, maid in Palmital, São Paulo, Brazil
        </p>
        <div className="categoria">
            <p> A categoria deste perfume é {props.Produto} </p>
        </div>
    </div>
    );
}

export default Produto