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
        tags: [],
        authorize: false
    }

    const [formData, setFormData] = useState(defaultFormData)



    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    const handlerChange = (e) => {
        let { name, value, type } = e.target;

        if (type == 'checkbox') { value = e.target.checked }
        if (type == 'select-one') { value = categories[e.target.value] }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handlerChangeTags = (e) => {
        console.log(e.target.value)
        let { tags, ...others } = formData
        //se è già presente lo escludo dalla lista filtrando per se stesso
        if (tags.includes(e.target.value)) {
            tags = tags.filter(tag = tag !== e.target.value)
        } else {
            tags = [...tags, e.target.value]
        }

        console.log(tags)
        setFormData({
            tags,
            ...others
        })

    }

    useEffect(() => {

        if (formData.authorize) {
            alert('Attenzione: il post verrà pubblicato')

        }
    }, [formData.authorize])

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
                                    value={formData.title}
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
                                    value={formData.image}
                                    onChange={handlerChange}
                                />
                            </div>
                            {/* CONTENUTO */}
                            <h2>Content</h2>
                            <div className="input-group">
                                <span className="input-group-text">Inserisci contenuto</span>
                                <textarea className="form-control" name="content" value={formData.content} onChange={handlerChange} />
                            </div>
                            {/* CATEGORIA (SELECT) */}
                            <h2>Categoria</h2>
                            <select className="form-select" name="category" defaultValue="" onChange={handlerChange}>
                                <option selected>Categoria</option>
                                {categories.map((category, index) => (
                                    <option key={`key-${index}`} value={index}>{category}</option>
                                ))}


                            </select>
                            {/* TAGS (LISTA CHECKBOX) */}
                            <h2>TAGS</h2>
                            <ul className="list-group">
                                {arrayTags.map(tag => (
                                    <li key={tag.id} className="list-group-item">
                                        <input className="form-check-input me-1"
                                            type="checkbox"
                                            value={tag.name}
                                            onChange={handlerChangeTags} />
                                        <label className="form-check-label" >{tag.name}</label>
                                    </li>
                                ))}
                            </ul>
                            {/* STATO PUBBLICAZIONE */}
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    name="authorize"
                                    value={formData.authorize}
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