import React from 'react';
import HomepageDescription from "../Description";
import HomepageFeatures from "../Features";

const HTMLcomment1 =<> 
<strong>I</strong>celandic <strong>H</strong>igh <strong>P</strong>erformance <strong>C</strong>omputing Centre (IHPC/IREI) 
provides researchers with free user support and facilities to model
complex and difficult real world problems by 
providing hardware consisting of powerful CPUS, GPUS, 
fast I/O networking, data storage solutions. </>

const HTMLcomment2 = <>IHPC/IREI is the Icelandic Research e-Infrastructure project, 
                     funded by the Icelandic Centre of Research infrastructure fund </>

const  HomepageItems = () => {
    return (
    <>
    <HomepageDescription text={HTMLcomment1} wait={0}/>
    <HomepageDescription text={HTMLcomment2} wait={750} />
    <HomepageFeatures/>
    </>
    )
}


export default HomepageItems;
