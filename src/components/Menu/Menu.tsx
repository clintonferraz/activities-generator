import '../../Styles/menu.sass'
import { useState } from 'react';

export type MenuProps = {
    buttonClick: (amountOfCards: number) => void;
    defaultAmountOfCards: number;
}

export function Menu(props: MenuProps) {
    const [inputValue, setInputValue] = useState(props.defaultAmountOfCards)

    return (
        <div className="menu">
            <div className="number-input-container">
                <span>Number of activities to be generated:</span>
                <input
                    type="number"
                    name="number-input"
                    id="number-input"
                    defaultValue={inputValue}
                    onChange={(e) => { setInputValue(parseInt(e.target.value)) }}
                />
            </div>
            <button
                className="add-button"
                onClick={() => { props.buttonClick(inputValue) }}
            >
                Go!
            </button>

        </div>
    )
}