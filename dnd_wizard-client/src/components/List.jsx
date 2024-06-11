import { useEffect, useState } from "react";
import { getQueryList } from "../api";

export function List({app, model}) {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        async function loadObjects() {
            const request = await getQueryList(app, model);
            setObjects(request.data);
        }
        loadObjects();
        console.log(app)
        console.log(model)
    }, []);
    return (
        <div>
            {objects.map((object) => (
                <div key={object.id}>
                    <h1>{object.name}</h1>
                </div>
            ))}
        </div>
    );
}
