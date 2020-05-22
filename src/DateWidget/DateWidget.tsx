import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { WidgetProps } from 'react-jsonschema-form';
import { FormControl } from '@material-ui/core';
import moment from 'moment';

const DateWidget = ({
  id,
  readonly,
  required,
  disabled,
  label,
  value,
  onChange,
  schema,
}: WidgetProps) => {
  const _onChange = (_date: any, value?: string | null | undefined): void => {
    onChange(moment(value).format('YYYY-MM-DD'));
  };

  const _displayValue = moment(value).format('MM/DD/YYYY');

  return (
    <FormControl fullWidth={true} required={required}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        format="MM/DD/YYYY"
        margin="normal"
        id={id}
        label={label || schema.title}
        disabled={disabled || readonly}
        value={_displayValue}
        onChange={_onChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        disablePast
        error={false}
        helperText={null}
      />
    </FormControl>
  );
};

export default DateWidget;
