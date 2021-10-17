import React, { useState } from 'react';
import { render } from 'react-dom';

type InputProps = {
  value: string;
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: InputProps): React.ReactElement => {
  return <input type="text" value={value} onChange={onChange} />;
};

type FormFieldProps = {
  component: React.FunctionComponent<InputProps>
  label: string,
  input: InputProps
}

const FormField = ({ component, label, input }: FormFieldProps) => {
  return (
    <div>
      <h3>{label}</h3>
      {/* выполнить отрисовку компонента */}
    </div>
  );
};

const App = () => {
  const [state, setState] = useState({ name: '' });
  return <form>
    <FormField
      label="Name"
      component={Input}
      input={{
        value: state.name,
        onChange: ({ target: { value } }) => setState((prevState) => {
          return {
            ...prevState,
            name: value,
          };
        }),
      }}
    />
  </form>;
};

render(<App />, document.getElementById('root'));
