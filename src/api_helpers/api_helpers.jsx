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
    const res = await
        axios.post(`/user/${signup ? "signup" : "login"}`, {
            name: signup ? data.name : "",
            email: data.email,
            password: data.password
        })
            .catch((err) => console.log(err))

    if (res.status !== 200 && res.status !== 201) {
        return console.log("Unexpected Error Occured");
    }
    const resData = await res.data;
    return resData;

}


export async function sendAdminAuthRequest(data) {
    const res = await axios
        .post("/admin/login", {
            email: data.email,
            password: data.password,
        })
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Unexpectyed Error");
    }

    const resData = await res.data;
    return resData;
};