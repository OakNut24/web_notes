import axios from "axios";
import serviceUrl from "../Services/url";



const url = serviceUrl();


export async function getNotesFromDB(googleId) {
    let answer;

    try {
        const response = await axios.get(url + "/note/" + googleId, { withCredentials: true }) //WHEN LOCAL : http://localhost:5000/note/
        answer = response.data;
    }
    catch (err) {
        answer = null;
    }
    finally {
        return answer;
    }
}


export async function getNotesByCategory(googleId,category){
    let answer;

    try {
        const response = await axios.get(url + "/note/" + googleId +"/categoryName/"+category, { withCredentials: true }) //WHEN LOCAL : http://localhost:5000/note/
        answer = response.data;
    }
    catch (err) {
        answer = null;
    }
    finally {
        return answer;
    }

}

export async function addNote(note) {
    try {
        const response = await axios.post(url + "/note/add", note); //WHEN LOCAL : http://localhost:5000/note/add
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function deleteNote(id) {
    return await axios
        .delete(url + "/note/" + id) //WHEN LOCAL : http://localhost:5000/note/
        .then(() => { return true })
        .catch((err) => { console.log(err); return false });
}


export async function patchNote(note){
    return await axios
    .patch(url + "/note/" + note._id, note) //WHEN LOCAL : http://localhost:5000/note/
    .then(() => { return true })
    .catch((err) => { console.log(err); return false });
}

export async function archiveNote(noteId){
    return await axios
    .patch(url + "/note/archive/" + noteId) //WHEN LOCAL : http://localhost:5000/note/
    .then(() => { return true })
    .catch((err) => { console.log(err); return false });
}
export async function unarchiveNote(noteId){
    console.log("unarchiveNote");
    return await axios
    .patch(url + "/note/unarchive/" + noteId) //WHEN LOCAL : http://localhost:5000/note/
    .then(() => { return true })
    .catch((err) => { console.log(err); return false });
}

export async function trashNote(noteId){
    return await axios
    .patch(url + "/note/trash/" + noteId) //WHEN LOCAL : http://localhost:5000/note/
    .then(() => { return true })
    .catch((err) => { console.log(err); return false });
}



