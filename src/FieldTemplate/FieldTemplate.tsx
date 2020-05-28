import React from 'react';

import { FieldTemplateProps } from 'react-jsonschema-form';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';

const FieldTemplate = ({
  id,
  children,
  displayLabel,
  required,
  rawErrors = [],
  rawHelp,
  rawDescription,
}: FieldTemplateProps) => {
  const helpText =
    rawErrors && rawErrors.length > 0
      ? rawErrors.map((error, ind) => <span key={ind}>{error}</span>)
      : rawHelp;
  return (
    <FormControl
      fullWidth={true}
      required={required}
      error={rawErrors.length ? true : false}
    >
      {children}
      {displayLabel && rawDescription ? (
        <Typography variant="caption" color="textSecondary">
          {rawDescription}
        </Typography>
      ) : null}
      {helpText && <FormHelperText id={id}>{helpText}</FormHelperText>}
    </FormControl>
  );
};

export default FieldTemplate;
