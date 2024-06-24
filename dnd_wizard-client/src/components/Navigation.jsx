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
                                <Link to="/spell">Spell</Link>
                            </li>
                            <li>
                                <Link to="/tool">Tool</Link>
                            </li>
                            <li>
                                <Link to="/trinket">Trinket</Link>
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
                                <Link to="/playable">Playable</Link>
                            </li>
                            <li>
                                <Link to="/non-playable">Non-Playable</Link>
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
                    <button onClick={() => toggleDropdown(4)}>Rules</button>
                    {dropdownOpen === 4 && (
                        <ul>
                            <li>
                                <Link to="/category">Category</Link>
                            </li>
                            <li>
                                <Link to="/condition">Condition</Link>
                            </li>
                            <li>
                                <Link to="/damage_type">Damage Type</Link>
                            </li>

                            <li>
                                <Link to="/feature">Feature</Link>
                            </li>
                            <li>
                                <Link to="/language">Language</Link>
                            </li>
                            <li>
                                <Link to="/magic_school">Magic School</Link>
                            </li>
                            <li>
                                <Link to="/skill">Skill</Link>
                            </li>
                            <li>
                                <Link to="/property">Property</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <button onClick={() => toggleDropdown(5)}>Traits</button>
                    {dropdownOpen === 5 && (
                        <ul>
                            <li>
                                <Link to="/background">Background</Link>
                            </li>
                            <li>
                                <Link to="/class">Class</Link>
                            </li>
                            <li>
                                <Link to="/race">Race</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}
