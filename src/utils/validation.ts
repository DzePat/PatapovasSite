export function validateProjectForm(project: object) {
    const newErrors: string[] = [];
    Object.entries(project).forEach(([key, value]) =>{
      if(value === "" || (Array.isArray(value) && value.length === 0)) {
        newErrors.push(`Field empty: ${key}.`);
      }
    })

    return newErrors;
}