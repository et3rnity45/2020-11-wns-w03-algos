/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!  
export default function ({ events }: { events: EventDatetime[] }): EventDatetime[] {
    const stringToTime = (str: string) => {
        return new Date(str).getTime();
    };

    const getEventDuration = (start: string, end: string) => {
        return stringToTime(end) - stringToTime(start);
    };

    events.sort((a, b) => {
        return stringToTime(a.startDatetime) - stringToTime(b.startDatetime) || getEventDuration(a.startDatetime, a.endDatetime) - getEventDuration(b.startDatetime, b.endDatetime);
    });
    return events;
}

// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}