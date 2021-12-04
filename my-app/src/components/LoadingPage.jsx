import React from 'react';
import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";
const LoadingPage = (props) => {
    return (
        <div>
            <div style={{marginTop:300, display:"flex", flexDirection :"row", justifyContent:"center"}}><Spinner size={32} speed={1} animating={true} color="#D81307"/></div>       
        </div>
    );
};

export default LoadingPage;