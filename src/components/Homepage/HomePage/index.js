import React from 'react';
import HomepageDescription from "../Description";
import HomepageFeatures from "../Features";

const HTMLcomment1 =<> <strong>I</strong>celandic <strong>H</strong>igh <strong>P</strong>erformance <strong>C</strong>omputing Centre (IHPC) 
helps scientists and researchers to calculate, simulate and model complex and difficult real world problems By 
providing hardware consisting of powerful  CPUS, GPUS, networking, and a large secure storage space. </>

const HTMLcomment2 = <>IHPC is Funded by the RANNÍS infrastructure fund </>

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