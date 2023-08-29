import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function registerUser(
    firstName,
    lastName,
    password,
    userEmail,
    contactNo,
    userAge,
  ) {
    // debugger
    // const url = createUrl('/user/register')
    const url = createUrl('/user/register')
    const body = {
    firstName,
    lastName,
    password,
    userEmail,
    contactNo,
    userAge,
    }
  
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.post(url, body)
      log(response)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }
  
  export async function deleteUser(
    id,
    firstName,
    lastName,
    password,
    userEmail,
    contactNo,
    userAge,
    userUpi,
  )
   {
    const url = createUrl('/user/delete')
    const body = {
    id,
    firstName,
    lastName,
    password,
    userEmail,
    contactNo,
    userAge,
    userUpi,
    }
    // const url = createUrl(`/user/delete/${id}`)
    console.log(url, "hellooooooooooooooooo")
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.put(url, body)
      log(response)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }
  
  
  export async function updateUserApi(
    id,
    firstName,
    lastName,
    password,
    userEmail,
    contactNo,
    userAge,
    userUpi,
  ) {
    // debugger
    // const url = createUrl('/user/register')
    const url = createUrl('/user/update')
    const body = {
      id,
    firstName,
    lastName,
    password,
    userEmail,
    contactNo,
    userAge,
    userUpi,
    }
  
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.put(url, body)
      log(response)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }
  
  
  export async function loginUser(userEmail, password) {
    const url = createUrl('/user/login')
    const body = {
      userEmail,
      password,
    }
  
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.post(url, body)
      log(response)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }
  
  
  export async function getUserList() {
    const url = createUrl('/user/users')
  
    try {
     
      const response = await axios.get(url)
      log(response.data)
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }
  }
   