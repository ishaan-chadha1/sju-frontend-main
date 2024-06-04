import React, { createContext, useContext, useState } from 'react';

const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
    const [file, setFile] = useState(null);
    const [contractData, setContractData] = useState({
        contractName: '',
        message: '',
    });
    const [invitedSigners, setInvitedSigners] = useState([]);

    return (
        <ContractContext.Provider value={{ file, setFile, contractData, setContractData, invitedSigners, setInvitedSigners }}>
            {children}
        </ContractContext.Provider>
    );
};

export const useContract = () => {
    return useContext(ContractContext);
};
