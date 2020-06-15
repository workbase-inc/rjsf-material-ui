import React, { useState, CSSProperties } from 'react';

import { WidgetProps } from 'react-jsonschema-form';
import {
  FormControl,
  FormHelperText,
  ClickAwayListener,
} from '@material-ui/core';
import { TwitterPicker as BasicPicker, SwatchesPicker } from 'react-color';
import {
  red,
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
    red,
    purple,
  ];

  const getSwatchColors = (_color: string): string[][] | undefined => {
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
    return undefined;
  };

  const isShade = (color: any, _color: String): boolean => {
    return (
      color[100] == _color ||
      color[300] == _color ||
      color[700] == _color ||
      color[900] == _color
    );
  };

  const squareStyle: React.CSSProperties = {
    background: color,
    width: '30px',
    height: '30px',
    borderRadius: '5px',
    marginTop: '5px',
    opacity: disabled ? 0.5 : 1,
    border: '1px solid #DCDCDC',
  };

  const swatchStyle: React.CSSProperties = {
    position: 'absolute',
    left: '275px',
    top: '70px',
    zIndex: 1,
  };

  const basicStyle: React.CSSProperties = {
    position: 'absolute',
    left: '-7px',
    top: '70px',
    zIndex: 1,
  };

  return (
    <FormControl fullWidth={true} required={required} disabled={disabled}>
      <FormHelperText>{label || schema.title}</FormHelperText>
      <div
        style={squareStyle}
        onClick={() => {
          if (!(readonly || disabled)) {
            if (
              colors.some((_color: any): boolean => {
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
          <div style={basicStyle}>
            <BasicPicker
              color={value}
              onChange={_onChange}
              colors={colors.map((val: any) => val[500])}
            />
          </div>
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
