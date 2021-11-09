import React from "react";
import {Paper} from "@material-ui/core";

export const Contact = () => {
    return(<>
        <h3>
            Kontakt
        </h3>
        <Paper className="test" elevation={0} square={true}>
            <p>
                <b>Fredrik TestBerg</b>: Systemägare och produktägare (en titel i utvecklingsmetodiken <a href="http://sv.wikipedia.org/wiki/Scrum">Scrum</a>)
            </p>
            <p>
                Hans ansvar är att kravställa hur systemet ska fungera, och att ta beslut kring vad som är
                viktigast för leverantören att arbeta med för tillfället.
            </p>
            <p>
                Fredrik kan kontaktas via:
            </p>
            <ul>
                <li> E-post: <a href="mailto:fredrik.testberg@test.se?subject=Kateterablationsregistret">fredrik.testberg@test.se</a></li>
            </ul>
        </Paper>
        <Paper className="test" elevation={0} square={true}>
            <p>
                <b>UCR</b>: leverantören av systemet, och de som driftar det.
            </p>
            <p>
                UCRs ansvar är att hantera potentiella driftsproblem, rätta buggar samt implementera de krav som produktägaren
                bedömer ska göras.
            </p>
            <p>
                <b>Notera att UCR ej har support på hur systemet bör användas, det vill säga frågor som "Hur registrerar jag
                    en patient?". Vänd er till er lokala administratör för sådana frågor.</b>
            </p>
            <p>
                UCR kan kontaktas via:
            </p>
            <ul>
                <li>Hemsida: <a href="http://www.ucr.uu.se">www.ucr.uu.se</a></li>
                <li>E-post: <a href="mailto:drift@test.se?subject=Kateterablation_drift">drift@ucr.uu.se</a> - för ärenden rörande driften av systemet. Ange vilket register det rör i ditt mail,
                    då UCR handhar ett antal kvalitetsregister och kan ha svårt att veta vilket register din fråga rör. Ange dessutom gärna ev. detaljer som kan hjälpa oss med felsökning, om ett fel uppstått.
                </li>
                <li>E-post: <a href="mailto:sara.hansson@test.se?subject=Kateterablation_feedback">sara.hansson@ucr.uu.se</a> - chef för kvalitetsregistersektionen.</li>
            </ul>
        </Paper>
    </>);
};
