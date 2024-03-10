import { create } from "zustand";
import { UserInformation } from "../Interface/User";
import { persist } from "zustand/middleware";

interface State{
    user:UserInformation
}

interface Actions {
    setUser: (user: UserInformation) => void;
  }

  export const userStore = create(
    persist<State & Actions>((set) => ({
        user:{
            contact:{
                acceptComercialPolicy:false,
                acceptPrivacityPolicy:false,
                cellphone:'',
                document:'',
                documentType:''
            },
            personal:{
                birthDay:'',
                lastName:'',
                name:''
            }
        },
        setUser: (user:UserInformation) => set(() => ({
            user
        }))
    }),{
        name: 'userInformation'
    })
  )