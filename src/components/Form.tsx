import {
  FormWrapper,
  FormHeader,
  FormHeading,
  FormBody,
  FormFieldset,
  FormInput,
  FormButton,
} from "./style/Form.styled";

export function Form() {
  return (
    <div className="App">
      <FormWrapper>
        <FormHeader>
          <FormHeading>song title</FormHeading>
        </FormHeader>

        <FormBody>
          <FormFieldset>
            <FormInput placeholder="artist" type="text" required />
          </FormFieldset>

          <FormFieldset>
            <FormInput placeholder="title" type="text" required />
          </FormFieldset>

          <FormFieldset>
            <FormInput placeholder="album" type="text" required />
          </FormFieldset>
          <FormFieldset>
            <FormInput placeholder="genre" type="text" required />
          </FormFieldset>

          <FormFieldset>
            <FormButton type="button">add song</FormButton>
          </FormFieldset>
        </FormBody>
      </FormWrapper>
    </div>
  );
}
