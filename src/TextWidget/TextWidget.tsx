import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { WidgetProps } from 'react-jsonschema-form';

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  rawErrors,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
}: WidgetProps) => {
  const { autoCompleteOptions, autoComplete } = options;
  const enumOptions = autoCompleteOptions || ([] as any);
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onAutoCompleteChange = (_event: object, value: any, _reason: string) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  let size: 'small' | 'medium' = 'medium';
  if (options.size === 'small') {
    size = 'small';
  }
  let variant: 'standard' | 'outlined' | 'filled' = 'standard' as 'standard';
  if (options.variant === 'outlined') {
    variant = 'outlined' as 'outlined';
  }
  if (options.variant === 'filled') {
    variant = 'filled' as 'filled';
  }

  return (
    <FormControl fullWidth={true} required={required}>
      {autoComplete ? (
        <Autocomplete
          value={value ? value : ''}
          freeSolo={true}
          id={id}
          disabled={disabled || readonly}
          onInputChange={_onAutoCompleteChange}
          options={enumOptions}
          size={size}
          getOptionLabel={(option: any) => option || ''}
          renderInput={(params: any) => (
            <TextField
              {...params}
              margin={'dense'}
              error={!!rawErrors}
              autoFocus={autofocus}
              onBlur={_onBlur}
              onFocus={_onFocus}
              required={required}
              label={label || schema.title || undefined}
              variant={variant}
            />
          )}
        />
      ) : (
        <TextField
          error={!!rawErrors}
          id={id}
          label={label || schema.title}
          size={size}
          margin={'dense'}
          variant={variant}
          autoFocus={autofocus}
          required={required}
          disabled={disabled || readonly}
          type="text"
          value={value ? value : ''}
          onChange={_onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
        />
      )}
    </FormControl>
  );
};

export default TextWidget;
