import {defineStore} from "pinia"
import actions from "@/stores/home/actions";
import state from "@/stores/home/state";

export const useStoreHome = defineStore("home", {
    actions,
    state
})