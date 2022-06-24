// export const API_BASE_URL_LOCAL = "https://subfee.techstriker.com/backend/api";





export const status = {
  ERROR: 500,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SUCCESS: 200,
  CREATED: 201,
  REQUEST_TIMEOUT: 408,
  METHOD_NOT_ALLOWED: 405
}



export const checkResponse = (response) => {
console.log(response,"const")
  let newResponse = '';
  if (response.data.success === false) {
    newResponse = {
      success: false,
      error: Array.isArray(response.data.message)
        ? response.data.message.join(", ")
        : response.data.message
    };
  } else {
    newResponse = {
      success: true,
      data: response,
      message: response.data.message,
      
    };
  }
  return newResponse;

}