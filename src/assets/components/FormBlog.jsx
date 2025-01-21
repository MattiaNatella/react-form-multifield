import { useEffect, useState } from "react"



const FormBlog = () => {

    //**React Blog Form Multifield**

    const categories = [
        'Fishing',
        'Cooking',
        'Skiing',
        'Trekking',
        'Hiking'
    ]

    const arrayTags = [
        { id: 1, name: 'fun' },
        { id: 2, name: 'travel' },
        { id: 3, name: 'friends' },
        { id: 4, name: 'outdoor' },
        { id: 5, name: 'sun' }
    ]

    const defaultFormData = {
        title: '',
        image: '',
        content: '',
        category: '',
        tags: [''],
        authorize: false
    }

    const [FormData, setFormData] = useState(defaultFormData)



    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(FormData)
    }

    const handlerChange = (e) => {
        let { name, value, type } = e.target;
        console.log(e.target.type)
        if (type == 'checkbox') { value = e.target.checked }
        if (type == 'select-one') { value = categories[e.target.value] }

        setFormData({
            ...FormData,
            [name]: value
        })
    }

    useEffect(() => {

        if (FormData.authorize) {
            alert('Attenzione: il post verrà pubblicato')

        }
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
                            <select className="form-select" name="category" defaultValue="c" onChange={handlerChange}>
                                <option selected>Categoria</option>
                                {categories.map((category, index) => (
                                    <option key={`key-${index}`} value={index}>{category}</option>
                                ))}


                            </select>
                            {/* TAGS (LISTA CHECKBOX) */}
                            <h2>TAGS</h2>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input className="form-check-input me-1"
                                        type="checkbox"
                                        value="Fun"
                                        name="tags"
                                        onChange={handlerChange} />
                                    <label className="form-check-label" >#Fun</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1"
                                        type="checkbox"
                                        value="Friends"
                                        name="tags"
                                        onChange={handlerChange} />
                                    <label className="form-check-label" >#Friends</label>
                                </li>
                                <li className="list-group-item">
                                    <input
                                        className="form-check-input me-1"
                                        type="checkbox"
                                        value="Travel"
                                        name="tags"
                                        onChange={handlerChange} />
                                    <label className="form-check-label">#Travel</label>
                                </li>
                            </ul>
                            {/* STATO PUBBLICAZIONE */}
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    name="authorize"
                                    value={FormData.authorize}
                                    onChange={handlerChange}
                                />
                                <label className="form-check-label" >Pubblica</label>
                            </div>

                            <button className="btn btn bg-primary text-white" type="submit" id="">Invia</button>
                        </form>
                    </div>
                    {/* CARD DEL POST */}

                </div>
            </div >
        </>
    )

}

export default FormBlog