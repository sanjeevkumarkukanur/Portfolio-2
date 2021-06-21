import React from 'react'
import './More.css'

function More() {
    return (
        <div className='More__section'>
            <div className='More_contents'>
            <h1 className='Project__main'>Pojects</h1>
            <h3 className='Project__name'>IoT Based Smart Healthcare Monitoring System</h3>
            <p3 className='Prject__details'>The proposed system consists of medical devices such as sensors (i.e temperature and heartbeat sensors), electrocardiogram (ECG) module and an IoT platform (Pushbullet-IoT application) which helps people to communicate through the devices connected onto the network and help to record and monitor the patient's health regarding the vital data of medical parameters.</p3>
            </div>
            <div className='More_contents'>
            <h1 className='Project__main'>Trainings Undergone/Workshop Attended</h1>
            <h3 className='Project__name'>Soft Skills program organized by Training and Placement Department of SIT.</h3>
            <h3 className='Project__name'>Industrial Training program on Internet of Things with Machine Learning conducted by Monkfox, from 4th June 2018 to 18th July 2018.</h3>
            </div>
        </div>
    )
}

export default More
