import React from 'react';
import {Content} from "../Sections/Content/Content";
import {ContentHeader, ContentHeaderSubtext, ContentHeaderTitle} from "../Sections/Content/ContentHeader";

export const Support = () => (
    <>
        <ContentHeader>
            <ContentHeaderTitle>Kontakt och support</ContentHeaderTitle>
            <ContentHeaderSubtext>Om kunden önskar skapa specifika rapporter, vänligen kontakta Fredrik Testberg, som är den som kravställer systemet gentemot leverantören UCR. Se menyalternativet "Kontakt" ovan.</ContentHeaderSubtext>
        </ContentHeader>
        <Content>
            <h2>Support</h2>
            <p className="regularText subText">
                <p>
                    Om systemet har tekniska problem, kontakta <a href="mailto:drift@test.se?subject=Kateterablation_drift">UCR's driftsavdelning</a> och rapportera i vilket sammanhang felet uppstod.
                </p>
            </p>
            <p className="regularText2">
                <h5>
                    Information som kan underlätta felsökningen är:
                </h5>
                <ul>
                    <li>Vem som var inloggad (användarnamn)</li>
                    <li>Ungefär vilken tid + datum felet uppstod</li>
                    <li>Vilken funktion i systemet (t.ex. "Registrera patient") som misslyckades</li>
                    <li>Något slags referens till vilken patient som användaren arbetade med när felet uppstod. PID,
                        personnummer eller dylikt.
                    </li>
                </ul>
                <h5>
                    Vanliga frågor (och svar) rörande systemet:
                </h5>
                <ul>
                    <li>Vad skiljer sig mellan NAT som ingångsformulär och uppföljningsformulär? <b>- Ingångsformulär är när
                        patienten först söker vård, innan något ingrepp skett. Uppföljningen skickas ut till patienten för
                        ifyllnad efter ingreppet gjorts, och innehåller då flera frågor, bland annat om resultatet av
                        ingreppet.</b></li>
                    <li>todo: fyll på vanliga frågor som framkommer under testning/feedback.</li>
                </ul>
            </p>
            <h2>Kontakt</h2>
            <p className="regularText2">
                <b>Fredrik Testberg</b>: Systemägare och produktägare (en titel i utvecklingsmetodiken <a href="http://sv.wikipedia.org/wiki/Scrum">Scrum</a>
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
                    <li>E-post: <a href="mailto:testperson@test.se?subject=Kateterablation_feedback">sara.hansson@ucr.uu.se</a> - chef för kvalitetsregistersektionen.</li>
                </ul>
            </p>
        </Content>
    </>
);
