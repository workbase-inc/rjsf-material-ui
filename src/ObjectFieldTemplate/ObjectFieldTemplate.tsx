import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import { ObjectFieldTemplateProps } from 'react-jsonschema-form';

const useStyles = makeStyles({
  root: {
    flexDirection: 'row',
  },
});

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
}: ObjectFieldTemplateProps) => {
  const classes = useStyles();

  console.log(properties);

  return (
    <>
      {(uiSchema['ui:title'] || title) && (
        <TitleField
          id={`${idSchema.$id}-title`}
          title={title}
          required={required}
        />
      )}
      {description && (
        <DescriptionField
          id={`${idSchema.$id}-description`}
          description={description}
        />
      )}
      <Grid container={true} spacing={2} className={classes.root}>
        {properties.map((element: any, index: number) =>
          element.content.props.uiSchema['ui:widget'] === 'hidden' ? (
            <div key={index}></div>
          ) : (
            <Grid
              item={true}
              xs={
                (uiSchema[element.name] &&
                  uiSchema[element.name]['ui:width']) ||
                12
              }
              key={index}
            >
              {element.content}
            </Grid>
          )
        )}
      </Grid>
    </>
  );
};

export default ObjectFieldTemplate;
