import FormBlog from "./FormBlog"
import { useState, useEffect } from "react"

const Main = () => {

    const [show, setShow] = useState('formblog')


    return (
        <main>
            {show == "formblog" && <FormBlog />}

        </main>
    )
}

export default Main