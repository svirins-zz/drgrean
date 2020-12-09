import React from "react";
import { useImmer } from "use-immer";

import { AuxProps, ContextProps } from "../@types";

export const myContext = React.createContext<Partial<ContextProps>>({});

const Provider = ({ children }: AuxProps) => {
  const [state, setState] = useImmer({
    false
  });

  return (
    <myContext.Provider
      value={{
         state,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default ({ element }: { element: React.ReactChildren }): JSX.Element => {
  return <Provider>{element}</Provider>;
};
