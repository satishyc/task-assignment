import React, { Component } from 'react';
import data from "./C103.json"; 


function DataDisplay(){
    var temperature = parseInt(data.Temperature,10); 
    var temperatureColor = 'reactive';

    if(data.StatusCode==='400'){
        temperatureColor='proactive';
            }
    else{
        temperatureColor='reactive';
    }
    
    return     <div className={`temperature-display ${temperatureColor}`}>{temperature}°C</div>
    
}


class Container4 extends Component {
	render() {
        return (
             <div>
                 <h1 style={{ color: '#000066' }}>C103</h1>
            <div className='app-container'>
			<div className='temperature-display-container'>
		<DataDisplay/>
        	</div>
            </div>
            <h6 style={{ color: '#000066' }}>last updated at {data.Time}</h6>
            </div>
        );
    }
} 

export default Container4;