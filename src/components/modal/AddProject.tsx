import styled from 'styled-components';
import ErrorMessage from '../ErrorMessage';
import { useState, useRef, useEffect } from 'react';
import { postProject } from '../../services/projectservice';
import { validateProjectForm } from '../../utils/validation';
import { Project } from '../../models/project';
import { InputFieldLine, InputFieldArea } from '../InputField';

const AddBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(120,120,120,0.8);
  z-index: 6;
`

const AddContainer = styled.div`
  position: absolute;
  width: 40vw;
  min-width: 320px;
  height: 80vh;
  min-height: 420px;
  border: solid 3px white;
  background-color: rgba(240,240,240,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
`


const ExitButton = styled.button`
  aspect-ratio: 1;
  position: absolute;
  right: 0;
  background-color: #7b0000;
  color: white;
  border: solid 1px black;
  border-radius: 30px;
  min-height: 40px;
  height: 6vh;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
  &:hover {
    background-color: #ff0000;
  }
`;

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

const InputText = styled.label`
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  color: black;
  margin: 5px;
`
const UrlContainer = styled.div`
  display: flex;
  align-items: center;
`

const UrlButton = styled.button`
 aspect-ratio: 1;
 height: 40px;
 border-radius: 30px;
 background-color: red;
 font-size: 18px;
 margin: 10px;

 &:hover {
        background-color: #ed5c12;
        cursor: pointer;
    }
 `

const UrlText = styled.label`
 font-size: 14px;
 color: black;
 padding: 1px;
 width: 35vw;
 min-width: 280px;
 text-align: center;
 overflow-x: auto;
 `
const UrlDeleteButton = styled.button`
  height: 25px;
  width: 25px;
  background-color: grey;
  color: black;
` 

const AddButton = styled.button`
 height: 50px;
 width: 150px;
 border-radius: 30px;
 background-color: black;
 color: white;
 font-size: 18px;
 flex-shrink: 0;

 &:hover {
        background-color: coral;
        cursor: pointer;
    }
 `

interface ProjectFormRef {
    docid: HTMLInputElement | null;
    title: HTMLInputElement | null;
    github: HTMLInputElement | null;
    summary: HTMLTextAreaElement | null;
    description: HTMLTextAreaElement | null;
    urls: HTMLInputElement | null;
} 

type ProjectProp = {
  project: Project | null;
  onExit: () => void;
  token: string;
  onSuccess: () => void;
};

function AddProject({ onExit,token, project,onSuccess}: ProjectProp) {
  const [urls, setUrls] = useState<string[]>([]);
  const inputRef = useRef<ProjectFormRef>({docid: null,title: null, summary: null, description: null, urls: null, github: null});
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  if(project){
    useEffect(() => {
      if (inputRef.current.docid) inputRef.current.docid.value = project.id;
      if (inputRef.current.title) inputRef.current.title.value = project.title;
      if (inputRef.current.github) inputRef.current.github.value = project.github;
      if (inputRef.current.summary) inputRef.current.summary.value = project.summary;
      if (inputRef.current.description) inputRef.current.description.value = project.description;
      setUrls(project.img_urls);
    }, []);
  }

  function addurl() {
    const url = inputRef.current.urls?.value.trim();
    if (url && !urls.includes(url)) {
        setUrls(prev => [...prev, url]);
    }
  }

  async function submit() {

    const projectForm = {
      docid: inputRef.current.docid?.value.trim(),
      title: inputRef.current.title?.value.trim() ,
      github: inputRef.current.github?.value.trim(),
      summary: inputRef.current.summary?.value.trim(),
      description: inputRef.current.description?.value.trim(),
      img_urls: urls,
      created_at: new Date(),
      updated_at: new Date(),
    }

    setErrorMessage([]);
    const errors = validateProjectForm(projectForm);
    if(errors.length != 0) {
      setErrorMessage(errors);
      setShowError(true);
    }else{
      await postProject(projectForm, token);
      onSuccess();
      onExit();
    }
  }

  return (      
    <AddBackground>
      <AddContainer>
          <ExitButton onClick={() => onExit()}>X</ExitButton>
            <InputFieldLine
              label='Document ID'
              placeholder='Title or custom'
              ref={el => {inputRef.current.docid = el}}>
            </InputFieldLine>
            <InputFieldLine
              label='Title'
              placeholder='Project title'
              ref={el => {inputRef.current.title = el}}>
            </InputFieldLine>
            <InputFieldLine
              label='Github'
              placeholder='Github link or emtpy string'
              ref={el => {inputRef.current.github = el}}>
            </InputFieldLine>
            <InputFieldArea
              label='Summary'
              placeholder='Short description about the project'
              ref={el => {inputRef.current.summary = el}}>
            </InputFieldArea>
            <InputFieldArea
              label='Description'
              placeholder='Reason for the project, used libraries and more.'
              ref={el => {inputRef.current.description = el}}>
            </InputFieldArea>  
            <InputContainer>
              <InputText>Image Urls</InputText>
              {urls.map(url => (
                  <UrlText key={url}>{url} <UrlDeleteButton onClick={() => setUrls(prev => prev.filter(u => u !== url))}>X</UrlDeleteButton></UrlText>
              ))
              }
              <UrlContainer>
                  <InputLine ref={el => {inputRef.current.urls = el}} placeholder="Recommend 1:1 ratio 300px max"></InputLine>
                  <UrlButton onClick={() => addurl()}>+</UrlButton>
              </UrlContainer>
            </InputContainer>
        <AddButton onClick={() => submit()}>Add Project</AddButton>
      </AddContainer>
      <ErrorMessage messages={errorMessage} visible={showError} onHide={() => setShowError(false)}/>
    </AddBackground>
  );
}

export default AddProject;