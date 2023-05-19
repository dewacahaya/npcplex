import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listItem.scss"

export default function ListItem({index}) {

  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://cdn.shopify.com/videos/c/o/v/9b09a17a57e84cb58730ebdcfa89de51.mp4";

  return (
    <div className="listItem" 
    style={{left: isHovered && index * 225 -50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}>

      <img src="https://cdn.shopify.com/s/files/1/0549/5835/8762/products/Sword_Art_Online_the_Movie_-Progressive-_Kuraki_Y_C5_AByami_no_Scherzo_Anime_Manga_430x490.jpg?v=1662476605"
      alt="" />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop/>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 3 mins</span>
              <span className="limit">+18</span>
              <span>2009</span>
            </div>
            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime esse eos</div>
          <div className="genre">Action</div>
          </div></>
      )}
      </div>
  );
}
