import { Project } from "../models/project";

export function getLatestProject(projects: Project[]) {
    projects.sort((a, b) => b.updated_at._seconds - a.updated_at._seconds);
    return projects[0];;
}