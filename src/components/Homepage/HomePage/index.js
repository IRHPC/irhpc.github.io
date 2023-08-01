import React from 'react';
import HomepageDescription from "../Description";
import HomepageFeatures from "../Features";
import LatestAnnouncement from '../latestAnnouncement';

const HTMLcomment1 =<> 
<strong>I</strong>celandic <strong>H</strong>igh <strong>P</strong>erformance <strong>C</strong>omputing Centre (IHPC/IREI) 
provides researchers with free user support and facilities to model
complex and difficult real world problems by 
providing hardware consisting of powerful CPUS, GPUS, 
fast I/O networking, data storage solutions. </>

const HTMLcomment2 = <>IHPC/IREI is the Icelandic Research e-Infrastructure project, 
                     funded by the Icelandic Centre of Research infrastructure fund </>


const HTMLComments = [HTMLcomment1,HTMLcomment2];

const  HomepageItems = () => {

    const waitTime = 750;
    let count = 0;
    const descriptions = HTMLComments.map((comment) => (
      <HomepageDescription key={count} text={comment} wait={count++ * waitTime} />
    ));
    
    return (
        <>
            {descriptions}
            <HomepageFeatures/>
            <LatestAnnouncement/>
        </>
        
    )
}


export default HomepageItems;
