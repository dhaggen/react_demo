import React from 'react';

enum EVENT_TYPE {
    REGISTER_PATIENT = "REGISTER_PATIENT",
    PATIENT_MODIFIED = "PATIENT_MODIFIED",
};

export const Table = (props:{events:any}) => {
    return (
        <table className="UCRTable">
            <thead>
            <tr>
                <th>
                    Händelse
                </th>
                <th>
                    Datum
                </th>
                <th>
                    Registrerad
                </th>
                <th>
                    Registrant
                </th>
            </tr>
            </thead>
            <tbody>
            { props.events.filter((event:any) => event.eventType === EVENT_TYPE.PATIENT_MODIFIED || event.eventType === EVENT_TYPE.REGISTER_PATIENT).map((event:any) => (
                <tr key={event.eventId}>
                    <td>{event.eventName}</td>
                    <td>{event.eventDate}</td>
                    <td>{event.controlDate}</td>
                    <td>{event.triggeredBy}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}