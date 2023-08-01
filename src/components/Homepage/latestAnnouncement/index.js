import React from "react";
import {Route} from '@docusaurus/router'



const LatestAnnouncement = () => {

    return (
        <>
        <Route path={'announcements/'}/>
        <span>
            We are currently on <code>{location.pathname}</code>
        </span>    
        </>
    
    );
}

export default LatestAnnouncement;