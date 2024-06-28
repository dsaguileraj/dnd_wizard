import { useEffect, useState } from "react";
import { getAllQuery } from "../../api.js";

export const ArmorList = () => {
    const [armors, setArmors] = useState([]);
    const [categories, SetCategories] = useState([]);

    useEffect(() => {
        getAllQuery(setArmors, "actions", "armor");
        getAllQuery(SetCategories, "rules", "category");
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
                <tbody>
                    {armors.map((armor) => (
                        <tr key={armor.id}>
                            <th>{armor.id}</th>
                            <th>{armor.name}</th>
                            <th>{categories[armor.category-1].name}</th>
                            <th>
                                <button>View</button>
                            </th>
                            <th>
                                <button>Delete</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
