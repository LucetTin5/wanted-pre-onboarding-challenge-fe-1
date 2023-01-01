const API_BASE = "http://localhost:8080";

// method: GET, headers: Authorization {loginToken}
export const GET_TODOS = `${API_BASE}/todos`;

// method: GET, headers: Authorization {loginToken}
export const GET_TODOS_BY_ID = (id: string) => `${API_BASE}/todos/${id}`;

// method: POST, headers: Authorization {loginToken}
// params title:string content:string
export const CREATE_TODO = `${API_BASE}/todos`;

// method: PUT, headers: Authorization {loginToken}
// params title:string content:string
export const UPDATE_TODO = (id: string) => `${API_BASE}/todos/${id}`;

// method: DELETE, headers: Authorization {loginToken}
export const DELETE_TODO = (id: string) => `${API_BASE}/todos/${id}`;

// method: POST
// params email:string password:string
export const LOGIN = `${API_BASE}/users/login`;

// method: POST
// params email:string password:string
export const SIGN_UP = `${API_BASE}/users/create`;
