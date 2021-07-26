/**
 * In this challenge, you have to regroup messages into an array of day based on their
 * sentAt property.
 * You have to manipulate dates in vanillaJS. Be carefull to call, if needed, setUTCHours, setUTCMinutes, ... 
 * instead of setHouts, setMinutes, ... to avoid timezone offsets!
 *
 * Example:
 * Input: [{ message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" }, { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" }, { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" }]
 * Output: [
 *      {
 *          day: "2020-11-17T00:00:00.000Z",
 *          messages: [
 *              { message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" },
 *              { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" },
 *          ]
 *      },
 *      {
 *          day: "2020-11-18T00:00:00.000Z",
 *          messages: [
 *              { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" },
 *          ]
 *      },
 * ]
 * 
 * @param messages List of messages, unsorted and not grouped in days
 * @returns Sorted list of days (only days with messages!) with a list of sorted messages of the day
 */
// @ts-nocheck
export default function ({ messages }: { messages: Message[] }): any {
    const groupBySentAt = (array) => {
        return array.reduce((previousObj, obj) => {
            const day = new Date(obj['sentAt']);
            day.setHours(1, 0, 0, 0);
            const isoDay = day.toISOString();
            previousObj[isoDay] = (previousObj[isoDay] || []).concat(obj);
            return previousObj;
        }, {});
    }

    const messagesBySentAt = groupBySentAt(messages);
    const messagesByDay = Object.entries(messagesBySentAt).map(([day, messages]) => {
        return { day, messages }
    });
    
    const sortedMessages = messagesByDay.map(messagesOfTheDay => {
        messagesOfTheDay.messages = messagesOfTheDay.messages.sort((a, b) => {
            return new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime();
        })
        return messagesOfTheDay;
    });

    const sortedDayMessages = sortedMessages.sort((a, b) => {
        return new Date(a.day).getTime() - new Date(b.day).getTime();
    });
    return sortedDayMessages;
}


// used interfaces, do not touch
export interface Message {
    author: string;
    sentAt: string;
    message: string;
}

export interface DayMessages {
    day: string;
    messages: Message[];
}