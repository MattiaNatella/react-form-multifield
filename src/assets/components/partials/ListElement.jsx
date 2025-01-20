

const ListElement = ({ item, index, deleteTitle, modifyTitle }) => {
    return (
        <>
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center ">{item} <i className="fa-solid fa-trash pe-2" onClick={() => deleteTitle(index)}></i><i className="fa-solid fa-pen pe-2" onClick={() => modifyTitle(index)}></i></li>
        </>
    )
}

export default ListElement