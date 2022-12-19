import '../../Styles/menu.sass'

export type MenuProps = {
    buttonClick: () => void;
}

export function Menu(props : MenuProps){
    return (
        <div className="menu">
            <div className="number-input-container">
                <span>Number of activities to be generated:</span>
                <input type="number" name="number-input" id="number-input" />
            </div>
            <button className="add-button" onClick={props.buttonClick}>
                Go!
            </button>
            
        </div>
    )
}