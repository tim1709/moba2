import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  const [ events, setEvents ] = useState<any[]>([]);
  useEffect(() =>{
    console.log("");
    const url =
			'https://api.seatgeek.com/2/events?venue.state=NY&client_id=MzIwMDY0ODd8MTY3Njk4MzUyNC42ODc0NzQz&client_secret=20ec6a6ce7017f407dbc86d957349d5c90ae268b7fc748aea99122c44cbfaaac';
      console.log('sdf');
      fetch(url).then((res) => res.json()).then((json) => {
        var eventList = json.events;
        setEvents(eventList);
        console.log(events);
      });
  })
  

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        {events ? (
				events.map((event) => (
					<div key={event.id}>
						<p>
							{event.type} {event.datetime_utc}
						</p>
					</div>
				))
			) : (
				''
			)}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
