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

export async function addToDo(toDo) {
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