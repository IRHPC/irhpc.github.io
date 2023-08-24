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

const HTMLcommentis1 = <>
<strong>Í</strong>slenska <strong>H</strong>igh <strong>P</strong>erformance <strong>C</strong>omputing Centre (IHPC/IREI)
veitir rannsakendum ókeypis notendastuðning og aðstöðu til að móta
flókin og erfið raunveruleg vandamál með því að
Útvega vélbúnað sem samanstendur af öflugum örgjörvum, skjákortum,
hröðu I/O net og skráarkerfi ásamt gagnageymslulaunsum.</>

const HTMLcommentis2 = <>IHPC/IREI er verkefni á vegum Íslenskir rafrænir innviðir,
                       styrkt af innviðasjóði Rannís </>

const  HomepageItems = () => {
    if(window.location.pathname === "/is/"){
        return (
        <>
            <HomepageDescription text={HTMLcommentis1} wait={0} />
            <HomepageDescription text={HTMLcommentis2} wait={750} />
            <HomepageFeatures />
        </>
        )
    } else {
    return (
        <>
            <HomepageDescription text={HTMLcomment1} wait={0}/>
            <HomepageDescription text={HTMLcomment2} wait={750} />
            <HomepageFeatures/>
        </>
        )
    }
}


export default HomepageItems;
