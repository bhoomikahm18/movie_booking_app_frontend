import axios from "axios";

export async function getAllMovies() {
    const res = await axios.get("http://localhost:5000/movie")
        .catch((err) => console.log(err));

    if (res !== 200) {
        return console.log("No Data");
    }

    let data = null;
    if (res) {
        data = await res.data;
    }
    return data;
};