import {Paper} from "@material-ui/core";
import React from "react";

export const Help = () => (<>
        <h3>Hjälpsida</h3>
        <Paper className="test" elevation={0} square={true}>
            <p>
                Om systemet har tekniska problem, kontakta <a href="mailto:drift@test.se?subject=Kateterablation_drift">UCR's driftsavdelning</a> och rapportera i vilket sammanhang felet uppstod.

                Information som kan underlätta felsökningen är:
            </p>
            <ul>
                <li>Vem som var inloggad (användarnamn)</li>
                <li>Ungefär vilken tid + datum felet uppstod</li>
                <li>Vilken funktion i systemet (t.ex. "Registrera patient") som misslyckades</li>
                <li>Något slags referens till vilken patient som användaren arbetade med när felet uppstod. PID,
                    personnummer eller dylikt.
                </li>
            </ul>
            <p>
                Om du som användare har önskemål kring systemets funktion, kontakta systemägaren Fredrik Testberg eller er
                lokala administratör via att följa Kontakt-länken i menyn ovan.
            </p>
            <p>
                Vanliga frågor (och svar) rörande systemet:
            </p>
            <ul>
                <li>Vad skiljer sig mellan NAT som ingångsformulär och uppföljningsformulär? <b>- Ingångsformulär är när
                    patienten först söker vård, innan något ingrepp skett. Uppföljningen skickas ut till patienten för
                    ifyllnad efter ingreppet gjorts, och innehåller då flera frågor, bland annat om resultatet av
                    ingreppet.</b></li>
                <li>todo: fyll på vanliga frågor som framkommer under testning/feedback.</li>
            </ul>
        </Paper>
    </>
);
