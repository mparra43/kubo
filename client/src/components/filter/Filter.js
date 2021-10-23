import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { filterCategories }from '../../actions/films';
import './styles/filter.css'


export const Filter= () => {
    const [category, setCategories] = useState(" ");
    const {categories} = useSelector(state => state.films);
    console.log(categories)
    const dispatch = useDispatch();

    const handleSelectChange = (event) => {
        setCategories(event.target.value);
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(category)
        dispatch(filterCategories(category))
    }

    return (
            <div className="container-from">
            <form  className="form" onSubmit={handleSubmitForm}>
                <h6 className="card-title">Categorías </h6>
                <select className="form-control" value={category} onChange={handleSelectChange}>
                    {categories ? categories.map((e)=>(
                        <option>{e.gender}</option>

                    )):<option>No hay opciones </option>}
                </select>
                <button  type="submit" className="btn btn-outline-info">
                    Filtrar...
                </button>
            </form>
        </div>
    )
}