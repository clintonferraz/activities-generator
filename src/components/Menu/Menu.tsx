import '../../Styles/menu.sass'

export type MenuProps = {
    buttonClick: (amountOfCards: number) => void;
}

export function Menu(props : MenuProps){
    return (
        <div className="menu">
            <div className="number-input-container">
                <span>Number of activities to be generated:</span>
                <input type="number" name="number-input" id="number-input" defaultValue="3" />
            </div>
            <button 
                className="add-button" 
                onClick={() => {
                    const numberInput = document.getElementById('number-input') as HTMLInputElement;
                    props.buttonClick(parseInt(numberInput.value));
                }}
            >
                Go!
            </button>
            
        </div>
    )
}