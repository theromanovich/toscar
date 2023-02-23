import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const [deliverersArr, setDeliverersArr] = useState([])
    return (
        <FilterContext.Provider value={{
            deliverersArr,
            setDeliverersArr
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}