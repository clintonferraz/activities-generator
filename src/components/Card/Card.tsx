import '../../Styles/card.sass'

export type CardProps = {
    activityName: string;
    activityType: string;
    participantsNumber: number;
}

export function Card(props : CardProps){
    
    function capitalizedActivityType(): string{
        let firstLetter = (props.activityType)[0].toUpperCase();
        let restOfWord = (props.activityType).slice(1,props.activityType.length);
        let capitalizedActivityType = firstLetter + restOfWord;
        return capitalizedActivityType;
    }  


    return(
        <div className="activity-card">
            <div className="card-titles">
                <div>Activity:</div>  
                <div>Type:</div>  
                <div>Participants:</div>  
            </div>
            <div className="card-data">
                <div className="card-data-item"> {props.activityName + '.'} </div>
                <div className="card-data-item"> {capitalizedActivityType()} </div>
                <div className="card-data-item"> {props.participantsNumber} </div>
            </div>            
        </div>
    )
}