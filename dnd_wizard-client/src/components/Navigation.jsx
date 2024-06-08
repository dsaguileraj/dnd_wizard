import { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const toggleDropdown = (id) => (dropdownOpen === id ? setDropdownOpen(null) : setDropdownOpen(id));
    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => toggleDropdown(1)}>Actions</button>
                    {dropdownOpen === 1 && (
                        <ul>
                            <li>
                                <Link to="/armor">Armor</Link>
                            </li>
                            <li>
                                <Link to="/equipment">Equipment</Link>
                            </li>
                            <li>
                                <Link to="/property">Property</Link>
                            </li>
                            <li>
                                <Link to="/spell">Spell</Link>
                            </li>
                            <li>
                                <Link to="/weapon">Weapon</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <button onClick={() => toggleDropdown(2)}>Characters</button>
                    {dropdownOpen === 2 && (
                        <ul>
                            <li>
                                <Link to="/character">Character</Link>
                            </li>
                            <li>
                                <Link to="/class">Class</Link>
                            </li>
                            <li>
                                <Link to="/monster">Monster</Link>
                            </li>
                            <li>
                                <Link to="/race">Race</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <button onClick={() => toggleDropdown(3)}>Matchs</button>
                    {dropdownOpen === 3 && (
                        <ul>
                            <li>
                                <Link to="/match">Match</Link>
                            </li>
                            <li>
                                <Link to="/match_player">Match - Player</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <button onClick={() => toggleDropdown(4)}>Traits</button>
                    {dropdownOpen === 4 && (
                        <ul>
                            <li>
                                <Link to="/background">Background</Link>
                            </li>
                            <li>
                                <Link to="/bond">Bond</Link>
                            </li>
                            <li>
                                <Link to="/feature">Feature</Link>
                            </li>
                            <li>
                                <Link to="/flaw">Flaw</Link>
                            </li>
                            <li>
                                <Link to="/ideal">Ideal</Link>
                            </li>
                            <li>
                                <Link to="/language">Language</Link>
                            </li>
                            <li>
                                <Link to="/personality">Personality</Link>
                            </li>
                            <li>
                                <Link to="/proficiency">Proficienct</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}
