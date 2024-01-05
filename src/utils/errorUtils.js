
function getErrorResponse(error) {

    if (error.response.status === 400 && error.response.data.errors) {
        const errors = error.response.data.errors;
        const errorData = {};
        for(const key in errors) {
            errorData[key] = errors[key];
        }
        return errorData;
    }

    return null;

}

export default getErrorResponse;
