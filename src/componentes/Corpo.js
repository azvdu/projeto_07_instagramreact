import Stories from "./Stories.js"
import Posts from "./Posts.js"
import Sidebar from "./Sidebar.js"

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />

            <div className="posts">
                <Posts />
            </div>
            </div>

            <div className="sidebar">
                <Sidebar />
            </div>
        </div>
    )
}


