import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormContextType {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<any>(null);
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  return context;
};
