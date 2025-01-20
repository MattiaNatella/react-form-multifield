import { useState } from "react"
import ListElement from "./ListElement"

const FormBlog = () => {

    const [titles, setTitles] = useState([])
    const [newTitle, setNewTitle] = useState('')

    const handlerSubmit = (e) => {
        e.preventDefault();

        const blog = [newTitle, ...titles]
        setTitles(blog)
        setNewTitle('')
    }

    const deleteTitle = (index) => {
        const filteredTitles = titles.filter(title => title !== titles[index])
        setTitles(filteredTitles)
    }

    const modifyTitle = (index) => {
        const modifiedList = [...titles]
        modifiedList[index] = newTitle;
        setTitles(modifiedList)
        setNewTitle('')

    }

    return (
        <>
            <form action="#" className="container flex-column" onSubmit={handlerSubmit}>
                <h1>FORM</h1>
                <h2>Per aggiornare un elemento della lista, inserisci prima il nuovo titolo, seleziona poi dove sostituirlo</h2>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Titolo Blog" aria-label="ciao" aria-describedby="button-addon2" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    <button className="btn bg-primary text-white" type="button submit" id="button-addon2">Invia</button>
                </div>
                {titles.length < 1 ? <h1>Nessun titolo inserito</h1> : (
                    <ul className="list-group">
                        {titles.map((item, index) => (
                            <ListElement
                                item={item}
                                index={index}
                                deleteTitle={deleteTitle}
                                modifyTitle={modifyTitle} />
                        ))}
                    </ul>
                )}
            </form>
        </>
    )

}

export default FormBlog