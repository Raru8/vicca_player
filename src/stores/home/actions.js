import API from "@/configs/constants";

const RESOURCE = "modules?language=english";

const PLAYLISTURL = "https://saavn.me/playlists"

import axios from "axios";

const actions = {
    loadHome() {
        return new Promise((resolve, reject) => {
            axios.get(`${API}${RESOURCE}`)
                .then((response) => {
                    return resolve(response.data)
                })
                .catch(() => {
                    return reject
                })
        })
    },

    loadPlaylist(params) {
        return new Promise((resolve, reject) => {
            axios.get(`${PLAYLISTURL}`, {params})
                .then((response) => {
                    return resolve(response.data)
                })
                .catch(() => {
                    return reject
                })
        })
    }
}


export default {...actions}