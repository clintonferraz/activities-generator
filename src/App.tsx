import { useEffect, useState } from 'react'

import { Card } from './components/Card/Card'
import { Menu } from './components/Menu/Menu'
import loadingGif from './assets/loading-gif.gif'
import './Styles/app.sass'

const INITIAL_AMOUNT_OF_CARDS = 3;

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
  

  useEffect(()=>{
    handleGenerateActivities(INITIAL_AMOUNT_OF_CARDS);
  },[])

  function showLoadingAnimation(shouldShow: boolean){
    let loadingAnimation = document.getElementById('loadingAnimation') as HTMLImageElement;
    if(shouldShow)
      loadingAnimation.classList.remove('hide');
    else 
      loadingAnimation.classList.add('hide');
  }

  let clearActivityList = () => setActivityList([] as Activity[]);

  async function handleGenerateActivities(amount: number){
    clearActivityList();
    showLoadingAnimation(true);
    let newActivityList = [] as Activity[];
    for(let i = 0; i < amount; i++){
      newActivityList.push(await fetchData());
    }
    setActivityList(newActivityList);
    showLoadingAnimation(false);
  }

  async function fetchData() {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      return data;
  }


  return (
    <div className="App">
      <Menu buttonClick={(amount: number) => handleGenerateActivities(amount)} defaultAmountOfCards={INITIAL_AMOUNT_OF_CARDS}/>
      
      <div className="cards-container">
        <div className="cards-container-inner">
          <img src={loadingGif} className='hide' id='loadingAnimation' />
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
