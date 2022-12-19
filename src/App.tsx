import { useEffect, useState } from 'react'

import { Card } from './components/Card/Card'
import { Menu } from './components/Menu/Menu'
import './Styles/app.sass'


type Activity = {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

function App() {
  const [activityList, setActivityList] = useState<Activity[]>([]);

  async function handleGenerateActivities(){
    const response = await fetch('https://www.boredapi.com/api/activity');
    const data = await response.json() as Activity;
    setActivityList([ ...activityList, data]);
  }

  return (
    <div className="App">
      <Menu buttonClick={handleGenerateActivities} />
      
      <div className="cards-container" onClick={() => {console.log(activityList)}}>
        <div className="cards-container-inner">
          {
            activityList.map( (activity, index) => (
              <Card 
                key={index} 
                activityName={activity.activity} 
                activityType={activity.type} 
                participantsNumber={activity.participants} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
