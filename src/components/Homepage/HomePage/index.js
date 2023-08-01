import React from 'react';
import HomepageDescription from "../Description";
import HomepageFeatures from "../Features";
import LatestAnnouncement from '../latestAnnouncement';

const HTMLcomment1 =<> <strong>I</strong>celandic <strong>H</strong>igh <strong>P</strong>erformance <strong>C</strong>omputing Centre (IHPC) 
helps scientists and researchers to calculate, simulate and model complex and difficult real world problems By 
providing hardware consisting of powerful  CPUS, GPUS, networking, and a large secure storage space. </>

const HTMLcomment2 = <>IHPC is Funded by the RANNÍS infrastructure fund </>


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