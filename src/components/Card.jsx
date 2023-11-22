// import cardIcon from "./assets/card-icon.svg";
import "./style.css";
export const Card = (props) => {
    console.log(props.title);

    return (
        <div className="card">
            <div className='image-wrapper'>
                <img src={props.image} alt=""  className='card-icon' />
            </div>
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-text'>{props.text}</p>
        </div>
    );
};