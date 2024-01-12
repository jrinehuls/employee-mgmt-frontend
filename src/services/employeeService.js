import Axios from "axios";

const url = "http://localhost:8080/api/employee"

export async function getEmployees() {
    return await Axios.get(url + "/all", {});
}

export async function getEmployee(id) {
    return await Axios.get(url + `/${id}`, {});
}

export async function addEmployee(employee) {
    return await Axios.post(url, employee, {});
}

export async function updateEmployee(id, employee) {
    return await Axios.put(url + `/${id}`, employee, {});
}

export async function deleteEmployee(id) {
    return await Axios.delete(url + `/${id}`, {});
}
