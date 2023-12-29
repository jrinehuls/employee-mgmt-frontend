import Axios from "axios";

export async function getEmployees() {
    return await Axios.get("http://localhost:8080/api/employee/all");
}