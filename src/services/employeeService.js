import Axios from "axios";

const url = "http://localhost:8080/api/employee"

export async function getEmployees() {
    return await Axios.get(url + "/all");
}

export async function saveEmployee(employee) {
    return await Axios.post(url, employee, {});
}
