import axios from "axios";

export async function getAllMovies() {
    const res = await axios.get("/movie")
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("No Data");
    }

    let data = null;
    if (res) {
        data = await res.data;
    }
    return data;
};

export async function sendUserAuthRequest(data, signup) {
    axios.post(`/user/${signup ? "signup" : "login"}`, {
        name: signup ? data.name : "",
        email: data.email,
        password: data.password
    })

}