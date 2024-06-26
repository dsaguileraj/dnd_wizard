import { useEffect, useState } from "react";
import { getAllQuery } from "../../api.js";

export const ArmorList = () => {
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        getAllQuery(setObjects, "actions", "armor");
    }, []);
    return (
        <div>
            <h1>Armors</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th colSpan={2}>Options</th>
                    </tr>
                </thead>
                {objects.map((object) => (
                    <tr key={object.id}>
                        <th>{object.id}</th>
                        <th>{object.name}</th>
                        <th>{object.category}</th>
                        <th>
                            <button>View</button>
                        </th>
                        <th>
                            <button>Delete</button>
                        </th>
                    </tr>
                ))}
            </table>
        </div>
    );
};
