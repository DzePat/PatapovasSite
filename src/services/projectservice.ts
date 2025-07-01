const audience = import.meta.env.VITE_AUTH0_BACKEND_AUDIENCE;

export async function fetchProjects() {
    try {   
        const res = await fetch(audience + 'api/projects');
        if (!res.ok) {
            throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}`);
        }
        return res.json();
    }catch(error) {
        console.log("failed to fetch: ", error);
    }
}

export async function postProject(project: object, token: string) {
    try {    
        const res = await fetch(audience + "api/project/edit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(project),
        });

        if (!res.ok) {
            throw new Error(`Failed to post project: ${res.status} ${res.statusText}`);
        }
        return await res.json();
        
    } catch (error) {
        console.error("Failed to reach protected route: ", error);
        throw error;
    }
}

export async function removeProjectById(docid: string, token: string) {
    try {    
        const res = await fetch(audience + "api/project/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({docid}),
        });
    
        if (!res.ok) {
            throw new Error(`Failed to delete project: ${res.status} ${res.statusText}`);
        }
        return await res.json();

    } catch (error) {
        console.error("failed to reach protected route: ", error);
        throw error;
    }
}
