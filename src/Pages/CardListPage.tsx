import React, {useState, useEffect}  from 'react';
// Additional Libraries 
import {motion} from "framer-motion";
// Components
import Card from "../Components/Card";
import SpinnerBt from '../Components/SpinnerBt';
//Img
import MyImage from '../vulcan-salute.png';

function CardListPage() {
    
    interface ApiDatConfig {
        albumId?: number;
        id?: number;
        title?: string;
        url?: string;
        thumbnailUrl?: string;
      }
    
      const [apiData, setApiData] = useState<ApiDatConfig[]>([]);
    
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
          .then((response) => response.json())
          //   .then((json) => console.log(json))
          .then((json) => setApiData(json)  );
      }, []);  
         

    return (
        <>
      <div >
        {apiData
        ? apiData.map( (element: ApiDatConfig): JSX.Element => 
           ( <Card 
                title={element.title} 
                thumbnailUrl ={element.thumbnailUrl}
                id={element.id}
                url={element.url}
                MyImage = {MyImage}
                key={element.id}
                
                />  )
            
          )
        : <SpinnerBt/> }

    </div>
    </>
    )
}

export default CardListPage