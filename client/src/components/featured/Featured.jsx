import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="comedy">Comedy</option>
                    <option value="adventure">Adventure</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="Action">Action</option>
                </select>
            </div>
        )}
      <img src="https://img.freepik.com/free-vector/gradient-abstract-colorful-background_23-2149120346.jpg?w=740&t=st=1668854722~exp=1668855322~hmac=b018a3f3ec0f1cfd3dc626bff987057cfad28fbfc05ddb8d6e9a78cff298d8d9" 
      alt=""/>
      <div className="info">
        <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?auto=format&h=200" 
          alt=""/>
         <span className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nisi fuga libero maiores tempore, velit ut temporibus obcaecati nihil quo quasi vero similique molestias porro aspernatur facilis, quisquam necessitatibus in.
         </span>
         <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>More</span>
            </button>
         </div>
      </div>
    </div>
  )
}
