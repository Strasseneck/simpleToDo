export const baseUrl = 'http://localhost:3000'

export async function getAllToDos() {
    try {
      const res = await fetch(`${baseUrl}/todos`);
      const result = res.json();
      return result;
    } catch (error) {
        console.log(error)
    }
}

export async function addToDo (toDo) {
    try {
        const res = await fetch(`${baseUrl}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toDo)
        })
        const result = res.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteToDo (id) {
    try {
        const res = await fetch (`${baseUrl}/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = res.json();
    return result;
    } catch (error) {
        console.log(error);
    }
}

export async function move (id, direction) {
    try {
        const res = await fetch (`${baseUrl}/todos/${id}/${direction}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = res.json();
    return result;
    } catch (error) {
        console.log(error);
    } 
}