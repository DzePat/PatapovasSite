const audience = import.meta.env.VITE_AUTH0_BACKEND_AUDIENCE;

export async function fetchProjects() {
    const res = await fetch(audience + `api/projects`,{
        method: 'GET'
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}`);
    }
    return res.json();
}

export async function postProject(project: object, token: string) {
        console.log("project: ", project);
        try {    
            const res = await fetch(audience + "api/project/edit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(project),
            });  
        return await res.json();
        } catch (err) {
            console.error("Failed to fetch protected data:", err);
            return null;
        }
    }
