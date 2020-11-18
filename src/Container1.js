import React, { Component} from 'react';
import data from "./C100.json"; 


function DataDisplay(props){
    
    var temperature = parseInt(data.Temperature,10); 
    var temperatureColor = 'proactive';
    // const [temperatureColor, setTemperatureColor] = useState('reactive');
    
    if(data.StatusCode==='400'){
        temperatureColor='proactive';
        
    }
    else{
        temperatureColor='reactive';
    }
    return     <div className={`temperature-display ${temperatureColor}`}>{temperature}°C</div>
    
}    







     
class Container1 extends Component {
    
    render() {
         return (
             <div>
            <h1 style={{ color: '#000066' }}>C100</h1>
            <div className='app-container'>
			<div className='temperature-display-container'>
                <div className='temperature-display'>
                    
         		<DataDisplay/>
			</div>
            </div>
            </div>
         <h6 style={{ color: '#000066' }}>last updated at {data.Time}</h6>
            </div>
        );
    }
} 
export default Container1;