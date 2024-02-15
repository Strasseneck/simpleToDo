const baseUrl = 'http://localhost:3000'

export async function getAllToDos() {
    try {
        await fetch(`${baseUrl}/todos`)
            .then(response => response.json())
            .then(data => console.log(data));
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function addToDo(toDo) {
    try {
        await fetch(`${baseUrl}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toDo)
        }).then(response => response.json()).then(data => {
            console.log(data);
            return data;
        }).catch(error => {
            console.error('Error:', error);
        });
    } catch (error) {
        console.log(error);
    }
}