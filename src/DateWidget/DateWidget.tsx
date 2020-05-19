import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { WidgetProps } from 'react-jsonschema-form';

const DateWidget = ({
  id,
  readonly,
  disabled,
  label,
  value,
  onChange,
  schema,
}: WidgetProps) => {
  const _onChange = (_date: any, value?: string | null | undefined): void => {
    onChange(value);
  };

  return (
    <KeyboardDatePicker
      autoOk
      variant="inline"
      format="YYYY-MM-DD"
      margin="normal"
      id={id}
      label={label || schema.title}
      disabled={disabled || readonly}
      value={value ? value : ''}
      onChange={_onChange}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  );
};

export default DateWidget;
