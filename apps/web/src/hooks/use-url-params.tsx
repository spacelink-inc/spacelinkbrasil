import { useSearchParams as stateParams } from 'react-router-dom'

export const useSearchParams = () => {
   const [searchParams, setSearchParams] = stateParams()

   const setParam = (param: string, path: string) => {
      setSearchParams((state) => {
         state.set(param, path)
         return state
      })
   }

   const deleteParam = (param: string) => {
      setSearchParams((state) => {
         state.delete(param)
         return state
      })
   }

   const getParam = (param: string) => {
      return searchParams.get(param)
   }

   return { setParam, deleteParam, getParam }
}
