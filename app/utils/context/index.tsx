import React from 'react';
const DummyContext = React.createContext({});
const ContextProvider = ({children}: {children: React.ReactElement}) => {
   return <>{children}</>;
};

export default ContextProvider;
