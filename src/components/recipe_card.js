import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import Parfait from "../assets/images/parfait.jpg";

function App({url}) {
  return (
    <div className="box">
        <div className="box__img">
            <img alt="" src={url}/>
        </div>
        <h5>Parfait</h5>
        <div className="d-flex justify-content-between box__footer">
        <span >3 <FontAwesomeIcon className="pt-1" icon={faCommentAlt}  /></span>
        <span>By: <strong>Amy Ruth</strong></span>
        </div>
    </div>
  );
}

export default App;
