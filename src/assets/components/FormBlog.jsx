import { useEffect, useState } from "react"
import ListElement from "./ListElement"

const FormBlog = () => {

    //**React Blog Form Multifield**


    const defaultFormData = {
        title: '',
        image: '',
        content: '',
        category: '',
        tags: [],
        authorize: false
    }

    const [FormData, setFormData] = useState(defaultFormData)


    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(FormData)
    }

    const handlerChange = (e) => {
        let { name, value, type, checked } = e.target;
        value = type === 'checkbox' ? checked : value;
        setFormData({
            ...FormData,
            [name]: value
        })
    }

    useEffect(() => {

        FormData.authorize ? alert('Hai autorizzato la pubblicazione del post') : alert('Fornire autorizzazione a pubblicare')

    }, [FormData.authorize])


    // const deleteTitle = (index) => {
    //     const filteredTitles = titles.filter(title => title !== titles[index])
    //     setTitles(filteredTitles)
    // }


    return (
        <>
            <div className="container my-5 p-2">
                <div className="row">
                    <div className="col-6">
                        <form action="#" onSubmit={handlerSubmit}>
                            <h1>FORM</h1>
                            <div className="input-group mb-3">
                                {/*TITOLO BLOG */}
                                <input
                                    name="title"
                                    type="text"
                                    className="form-control"
                                    placeholder="Titolo Blog"
                                    value={FormData.title}
                                    onChange={handlerChange}
                                />
                            </div>
                            {/*RIGA DI RISULTATO*/}

                            {/* {titles.length < 1 ? <h1>Nessun titolo inserito</h1> : (
                    <ul className="list-group">
                        {titles.map((item, index) => (
                            <ListElement
                                item={item}
                                index={index}
                                deleteTitle={deleteTitle}
                                modifyTitle={modifyTitle} />
                        ))}
                    </ul>
                )} */}

                            {/* IMMAGINE */}
                            <h2>Immagine</h2>
                            <div className="input-group">
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image"
                                    value={FormData.image}
                                    onChange={handlerChange}
                                />
                            </div>
                            {/* CONTENUTO */}
                            <h2>Content</h2>
                            <div className="input-group">
                                <span className="input-group-text">Inserisci contenuto</span>
                                <textarea className="form-control" name="content" value={FormData.content} onChange={handlerChange} />
                            </div>
                            {/* CATEGORIA (SELECT) */}
                            <h2>Categoria</h2>
                            <select className="form-select" name="category" defaultValue={FormData.category} onChange={handlerChange}>
                                <option selected>Open this select menu</option>
                                <option value="FoodReview">FoodReview</option>
                                <option value="Travel Blog">Travel Blog</option>
                                <option value="Draw My Life">Draw My Life</option>
                            </select>
                            {/* TAGS (LISTA CHECKBOX) */}
                            <h2>TAGS</h2>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    <label className="form-check-label" htmlFor="firstCheckbox">#Fun</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    <label className="form-check-label" htmlFor="secondCheckbox">#Friends</label>
                                </li>
                                <li className="list-group-item">
                                    <input
                                        className="form-check-input me-1"
                                        type="checkbox"
                                        value="Travel"
                                        onChange={handlerChange} />
                                    <label className="form-check-label" htmlFor="thirdCheckbox">#Travel</label>
                                </li>
                            </ul>
                            {/* STATO PUBBLICAZIONE */}
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    name="authorize"
                                    onChange={handlerChange}
                                />
                                <label className="form-check-label" >Autorizzo la pubblicazione dell'articolo</label>
                            </div>

                            <button className="btn btn bg-primary text-white" type="submit" id="">Pubblica Post</button>
                        </form>
                    </div>
                    {/* CARD DEL POST */}
                    {/* <div className="col-6">
                        <h1>Post Pubblicati</h1>
                        <div className="card" style="width: 18rem;">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div >


        </>
    )

}

export default FormBlog