import _ from "lodash";
import { Service } from "../service"

export const Search = {

    company: async (search) => {
        return (await new Service().Post("search/company", {search}))?.data
    },

    partner: async (search) => {
        return (await new Service().Post("search/partner", {search}))?.data
    },

    bankAccount: async (search) => {
        return (await new Service().Post("search/bank-account", {search}))?.data
    },

    contabilityCategorie: async (search) => {
        return (await new Service().Post("search/contability-categorie", {search}))?.data
    },

    receivementMethod: async (search) => {
        return (await new Service().Post("search/receivement-method", {search}))?.data
    },

    taskMethod: async (search) => {
        return (await new Service().Post("search/task-method", {search}))?.data
    },

}