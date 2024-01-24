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
    const res = await axios
        .post(`/user/${signup ? "signup" : "login"}`, {
            name: signup ? data.name : "",
            email: data.email,
            password: data.password,
        })
        .catch((err) => console.log(err));

    if (res.status !== 200 && res.status !== 201) {
        console.log("Unexpected Error Occurred");
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

export async function getMovieDetails(id) {
    const res = await axios.get(`/movie/${id}`).catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
};

export async function newBooking(data) {
    const res = await axios
        .post("/booking", {
            movie: data.movie,
            seatNumber: data.seatNumber,
            date: data.date,
            user: localStorage.getItem("userID"),
        })
        .catch((err) => console.log(err));

    if (res.status !== 201) {
        return console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
};

export async function getUserBooking() {
    const id = localStorage.getItem("userID");
    const res = await axios
        .get(`/user/bookings/${id}`)
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
};

export async function deleteBooking(id) {
    const res = await axios
        .delete(`/booking/${id}`)
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Unepxected Error");
    }

    const resData = await res.data;
    return resData;
};

export async function getUserDetails() {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`/user/${id}`).catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("Unexpected Error");
    }
    const resData = await res.data;
    return resData;
};