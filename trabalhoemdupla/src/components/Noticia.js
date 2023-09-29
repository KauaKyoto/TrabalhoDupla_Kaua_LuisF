function Noticia(props) {
    return(
        <div> 
            <h2> Estudante de 14 anos esfaqueia cinco pessoas em escola na Espanha </h2>
            <p> Uma das vítimas terá que passar por cirurgia. Prefeita de Jerez de la Frontera, no sul do país, onde aconteceu ataque, 
                disse que alunos receberão apoio psicológico.
            </p>
            <p>
            Um estudante de 14 anos esfaqueou três professores e dois alunos, nesta quinta-feira (28), em uma escola de ensino médio em em Jerez de la Frontera, no sul da Espanha. O jovem foi detido e levado para a delegacia após o ataque.
            </p>
            <p>
            A responsável regional de Desenvolvimento Educacional, Patrícia del Pozo, afirmou que quatro dos cinco feridos foram enviados ao hospital, mas uma das professoras, que foi atingida na pálpebra, será submetida a cirurgia. As outras vítimas tiveram feridas de menor gravidade.
            </p>
            <p>
            Embora o agressor já tenha 14 anos, idade da maioridade penal na Espanha, poderá ser processado por um juizado de menores.
            </p>
            <p>
            Após saberem do ocorrido, os pais se aglomeraram na porta da escola, que tem quase 700 alunos.
            </p>
            <p>
            "Foi devastador", disse María José García-Pelayo, prefeita da cidade. "Foi dramático, porque todos os pais estavam do lado de fora da escola e, logicamente, queriam poder abraçar seus filhos e filhas."
            </p>
            <p>
            Ainda de acordo com a prefeita, os alunos terão acesso a apoio psicológico.
            </p>
            <div className="categoria">
                <br></br>
                <p> A categoria desta notícia é {props.Noticia} </p>
            </div>
        </div>
    );
}

export default Noticia