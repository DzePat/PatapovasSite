import styled from "styled-components"
import { forwardRef } from "react"

const InputContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputLine = styled.input`
  width: 200px;
  height: 40px;
  padding: 5px;
  background-color: white;
  text-align: center;
  color: blacK;
`

const InputArea = styled.textarea`
  width: 35vw;
  min-width: 280px;
  height: 15vw;
  min-height: 100px;
  padding: 5px;
  background-color: white;
  color: black;
`

const InputText = styled.label`
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  color: black;
  margin: 5px;
`

type InputFieldProps = {
  label: string;
  placeholder?: string;
};

export const InputFieldLine = forwardRef<HTMLInputElement, InputFieldProps>(
   ({ label, placeholder }, ref) => {
    return (
      <InputContainer>
        <InputText>{label}</InputText>
        <InputLine
          ref={ref}
          placeholder={placeholder}
          className="input-line"
        />
      </InputContainer>
    );
  }
); 
   

export const InputFieldArea = forwardRef<HTMLTextAreaElement, InputFieldProps>(
   ({ label, placeholder }, ref) => {
    return (
      <InputContainer>
        <InputText>{label}</InputText>
        <InputArea
          ref={ref}
          placeholder={placeholder}
          className="input-line"
        />
      </InputContainer>
    );
  }
); 
