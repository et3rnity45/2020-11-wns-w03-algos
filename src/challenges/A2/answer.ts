/**
 * In this challenge, you have to add a list of skills to each group (based on 
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 * 
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */
export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
    const newGroups = groups.map((group) => {
        const skills = group.students.map((student) => {
            return student.skills;
        });
        const set = new Set(skills.flat());
        return { ...group, skills: Array.from(set).sort() };
    });
    return newGroups;
}


// used interfaces, do not touch
interface Student {
    name: string;
    age: number;
    skills: string[];
}

export interface Group {
    students: Student[];
    name: string;
}

export interface GroupWithSills extends Group {
    skills: string[];
}