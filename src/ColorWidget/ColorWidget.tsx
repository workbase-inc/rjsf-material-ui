import React, { useState } from 'react';

import _ from 'lodash';
import { WidgetProps } from 'react-jsonschema-form';
import {
  FormControl,
  FormHelperText,
  ClickAwayListener,
} from '@material-ui/core';
import { TwitterPicker as BasicPicker, SwatchesPicker } from 'react-color';
import {
  red,
  pink,
  purple,
  lightBlue,
  cyan,
  lightGreen,
  yellow,
  grey,
  green,
  orange,
} from '@material-ui/core/colors/';

const ColorWidget = ({
  readonly,
  required,
  disabled,
  label,
  value,
  onChange,
  schema,
}: WidgetProps) => {
  const [color, updateColor] = useState(value);

  const _onChange = (_color: any): void => {
    onChange(_color.hex);
    if (color == _color.hex) {
      toggleMode(!mode);
    } else {
      updateColor(_color.hex);
    }
  };

  const [show, toggleShow] = useState(false);
  const [mode, toggleMode] = useState(false);

  const colors = [
    orange,
    lightGreen,
    green,
    yellow,
    lightBlue,
    cyan,
    grey,
    pink,
    red,
    purple,
  ];

  const getSwatchColors = (_color: String) => {
    for (let i = 0; i < colors.length; i++) {
      if (colors[i][500] == _color || isShade(colors[i], _color)) {
        return [
          [
            colors[i][900],
            colors[i][700],
            colors[i][500],
            colors[i][300],
            colors[i][100],
          ],
        ];
      }
    }
    return null;
  };

  const isShade = (color: any, _color: String): boolean => {
    return (
      color[100] == _color ||
      color[300] == _color ||
      color[700] == _color ||
      color[900] == _color
    );
  };

  const squareStyle = {
    background: color,
    width: '30px',
    height: '30px',
    borderRadius: '5px',
    marginTop: '5px',
    opacity: disabled ? 0.5 : 1,
  };

  const swatchStyle = {
    position: 'absolute',
    left: '275px',
    top: '20px',
  };

  return (
    <FormControl fullWidth={true} required={required} disabled={disabled}>
      <FormHelperText>{label || schema.title}</FormHelperText>
      <div
        style={squareStyle}
        onClick={() => {
          if (!(readonly || disabled)) {
            if (
              _.some(colors, (_color: any): boolean => {
                return isShade(_color, color);
              })
            ) {
              toggleMode(true);
            }
            toggleShow(!show);
          }
        }}
      />
      {show && (
        <ClickAwayListener onClickAway={() => toggleShow(!show)}>
          <BasicPicker
            color={value}
            onChange={_onChange}
            colors={_.map(colors, val => val[500])}
          />
        </ClickAwayListener>
      )}
      {show && mode && !!getSwatchColors(value) && (
        <ClickAwayListener
          onClickAway={() => {
            toggleMode(!mode);
          }}
        >
          <div style={swatchStyle}>
            <SwatchesPicker
              color={value}
              onChange={_onChange}
              onChangeComplete={(_color: any) => {
                toggleShow(!show);
              }}
              colors={getSwatchColors(value)}
              height={160}
            />
          </div>
        </ClickAwayListener>
      )}
    </FormControl>
  );
};

export default ColorWidget;
