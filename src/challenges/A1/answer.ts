/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 * 
 * @param students Unsorted list of students
 * @returns Sorted list of students
 */
export default function ({ students }: { students: Student[] }): Student[] {
    students.sort((a, b) => {
        return a.age - b.age || Number(b.name < a.name) - 1;
    });
    return students;
}


// used interfaces, do not touch
export interface Student {
    name: string;
    age: number;
    skills: string[];
}