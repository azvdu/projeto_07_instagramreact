export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div className="texto">
                <strong>catanacomics</strong>
                Catana
                </div>
            </div>

            <Sugestoes />

            <div className="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div className="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
        </div>
    )
}

function Sugestoes() {
    const sugestoes = [
        {image: "assets/img/bad.vibes.memes.svg", usuario: "bad.vibes.memes", razao: "Segue você"},
        {image: "assets/img/chibirdart.svg", usuario: "chibirdart", razao: "Segue você"},
        {image: "assets/img/razoesparaacreditar.svg", usuario: "razoesparaacreditar", razao: "Novo no Instagram"},
        {image: "assets/img/adorable_animals.svg", usuario: "adorable_animals", razao: "Segue você"},
        {image: "assets/img/smallcutecats.svg", usuario: "smallcutecats", razao: "Segue você"},
    ]
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao) => <Sugestao key = {sugestao.image} image = {sugestao.image} usuario = {sugestao.usuario} razao = {sugestao.razao} />)}
        </div>
    )
}

function Sugestao({image, usuario, razao}) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={image} />
                <div className="texto">
                    <div className="nome">{usuario}</div>
                    <div className="razao">{razao}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}