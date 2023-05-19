import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>
      <video className="video" autoPlay progess controls src="https://cdn.shopify.com/videos/c/o/v/9b09a17a57e84cb58730ebdcfa89de51.mp4"/>
    </div>
  )
}
