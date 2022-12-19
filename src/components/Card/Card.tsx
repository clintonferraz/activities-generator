import '../../Styles/card.sass'

export type CardProps = {
    activityName: string;
    activityType: string;
    participantsNumber: number;
}

export function Card(props : CardProps){
    return(
        <div className="activity-card">
            <div className="card-titles">
                <div>Activity:</div>  
                <div>Type:</div>  
                <div>Participants:</div>  
            </div>
            <div className="card-data">
                <div className="card-data-item"> {props.activityName} </div>
                <div className="card-data-item"> {props.activityType} </div>
                <div className="card-data-item"> {props.participantsNumber} </div>
            </div>            
        </div>
    )
}