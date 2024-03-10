import { baseApi } from "../../Core/Utils";
import { PlanListDto } from "../Interface/PlanDto";

export const getPlans = async():Promise<PlanListDto> => {
    const response = await baseApi.get<PlanListDto>('/plans.json')
    return response.data;
}