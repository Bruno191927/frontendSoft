import { baseApi } from "../../Core/Utils"
import { PersonalInformation } from "../Interface/User"

export const getUser = async():Promise<PersonalInformation> => {
    const response = await baseApi.get<PersonalInformation>('/user.json')
    return response.data;
}