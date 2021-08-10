import { getCenter } from 'geolib';

import { useState } from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';

function Map({searchResults}) {


    const coordinates=searchResults.map((result) => ({
        longitude:result.long,
        latitude:result.lat,
    }));
    const centercord=getCenter(coordinates);
    const[selectedLocation,setSelectedLocation]=useState()
    const [viewport,setViewport]=useState({
        width:'100%',
        height:'100%',
        latitude:centercord.latitude,
        longitude: centercord.longitude,
        zoom: 11,


    });
    // Transform the search results object into the 
    //  { latitude: 52.516272, longitude: 13.377722 } like object 
   

    console.log(coordinates);
    console.log(centercord);
    return (
        
   <ReactMapGL
  
   mapStyle="mapbox://styles/junemuoti/cks4dt2vu7khf17o5u4p5i80q"
   mapboxApiAccessToken={process.env.mapbox_key}
   {...viewport} 
   onViewportChange={(nextViewport) => setViewport(nextViewport)}
   >
    {searchResults.map((result)=>(
        <div key={result.long}>
            <Marker
        longitude={result.long}
        latitude={result.lat}
        offsetLeft={-20}
        offsetTop={-10}
        >
            <p 
            role="img"
            onClick={() => setSelectedLocation(result)}
            className="cursor-pointer text-2xl animate-bounce"
            aria-label="push-pin">
            
                📌</p>
            </Marker>
        </div>

    ))}
    
   
        </ReactMapGL>
      
    );
}

export default Map
