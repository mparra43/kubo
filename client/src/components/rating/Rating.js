import React, {useState} from 'react';
import './styles/rating.css'
import {useSelector} from "react-redux";
import {addFilms} from "../../actions/films";



export const Rating= () => {
    const {movie} = useSelector(state => state.films);

    const [formValues, setFormValues] = useState({ id:movie.id, movie:movie.title, star:""});




    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(addFilms(formValues))
    }


    return (
        <div className="div-rating">
            <div className="txt-center">
                <form  onSubmit={handleSubmitForm}>
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox" name="view" value={true} onChange={handleInputChange}/>
                        <label htmlFor="checkbox">Ya la viste ?</label>
                    </div>
                    <div className="rating">
                        <input id="star5" name="star" type="radio" value="5" className="radio-btn hide" onChange={handleInputChange}/>
                        <label htmlFor="star5">☆</label>
                        <input id="star4" name="star" type="radio" value="4" className="radio-btn hide" onChange={handleInputChange}/>
                        <label htmlFor="star4">☆</label>
                        <input id="star3" name="star" type="radio" value="3" className="radio-btn hide" onChange={handleInputChange}/>
                        <label htmlFor="star3">☆</label>
                        <input id="star2" name="star" type="radio" value="2" className="radio-btn hide" onChange={handleInputChange}/>
                        <label htmlFor="star2">☆</label>
                        <input id="star1" name="star" type="radio" value="1" className="radio-btn hide" onChange={handleInputChange}/>
                        <label htmlFor="star1">☆</label>
                        <div className="clear"></div>
                    </div>
                    <button type="submit" className="btn btn-outline-info">Calificar</button>
                </form>
            </div>
        </div>
    )
}