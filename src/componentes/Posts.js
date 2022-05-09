export default function Posts() {
    const posts = [
        {usuario: "meowed", imgUsuario: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida: "assets/img/respondeai.svg", perfilCurtida: "respondeai", qtdCurtidas: "101.523"},
        {usuario: "barked", imgUsuario: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtida: "assets/img/adorable_animals.svg", perfilCurtida: "adorable_animals", qtdCurtidas: "99.159"}
    ]
    return (
        <div className="posts">
            {posts.map((post) => <Post key = {post.conteudo} usuario = {post.usuario} imgUsuario = {post.imgUsuario} conteudo = {post.conteudo} curtida = {post.curtida} perfilCurtida = {post.perfilCurtida} qtdCurtidas = {post.qtdCurtidas} />)}
            
        </div>
    )
}

function Post({usuario, imgUsuario, conteudo, curtida, perfilCurtida, qtdCurtidas}) {
    return (
        <div className="post">
              <div className="topo">
                <div className="usuario">
                  <img src={imgUsuario} />
                  {usuario}
                </div>
                <div className="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div className="conteudo">
                <img src={conteudo} />
              </div>

              <div className="fundo">
                <div className="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div className="curtidas">
                  <img src={curtida} />
                  <div className="texto">
                    Curtido por <strong>{perfilCurtida}</strong> e <strong>outras {qtdCurtidas} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}