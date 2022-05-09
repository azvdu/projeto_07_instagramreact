export default function Stories() {
    const stories = [
        {usuario: "9gag", image:"assets/img/9gag.svg"}, 
        {usuario: "meowed", image:"assets/img/meowed.svg"}, 
        {usuario: "barked", image:"assets/img/barked.svg"}, 
        {usuario: "9gnathanwpylestrangeplanetag", image:"assets/img/nathanwpylestrangeplanet.svg"}, 
        {usuario: "wawawicomics", image:"assets/img/wawawicomics.svg"}, 
        {usuario: "respondeai", image:"assets/img/respondeai.svg"}, 
        {usuario: "filomoderna", image:"assets/img/filomoderna.svg"}, 
        {usuario: "memeriagourmet", image:"assets/img/memeriagourmet.svg"}
    ]
    return (
        <div className="stories">
            {stories.map((story) => <Story key = {story.image} imagem = {story.image} usuario = {story.usuario} />)}

            <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story({imagem, usuario}){
    return (
        <div className="story">
            <div className="imagem">
                <img src={imagem}/>
            </div>
            <div className="usuario">
                {usuario}
            </div>
        </div>
    )
}