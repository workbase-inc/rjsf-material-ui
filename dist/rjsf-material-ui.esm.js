import { withTheme } from 'react-jsonschema-form';
import React, { useState } from 'react';
import {
  getDefaultRegistry,
  isMultiSelect,
  rangeSpec,
  asNumber,
  guessType,
} from 'react-jsonschema-form/lib/utils';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MUIIconButton from '@material-ui/core/IconButton';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Remove from '@material-ui/icons/Remove';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ErrorIcon from '@material-ui/icons/Error';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import {
  FormControl as FormControl$1,
  FormHelperText as FormHelperText$1,
  ClickAwayListener,
  TextField as TextField$1,
} from '@material-ui/core';
import { TwitterPicker, SwatchesPicker } from 'react-color';
import {
  orange,
  lightGreen,
  green,
  yellow,
  lightBlue,
  cyan,
  grey,
  red,
  purple,
} from '@material-ui/core/colors/';
import { KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import Input from '@material-ui/core/Input';

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError('Cannot destructure undefined');
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var AddButton = function AddButton(props) {
  return React.createElement(
    Button,
    Object.assign({}, props, {
      color: 'secondary',
    }),
    React.createElement(AddIcon, null),
    ' ',
    props.label || 'Add Item'
  );
};

var mappings = {
  remove: /*#__PURE__*/ React.createElement(Remove, null),
  plus: /*#__PURE__*/ React.createElement(AddIcon, null),
  'arrow-up': /*#__PURE__*/ React.createElement(ArrowUpward, null),
  'arrow-down': /*#__PURE__*/ React.createElement(ArrowDownward, null),
};

var IconButton = function IconButton(props) {
  var icon = props.icon,
    className = props.className,
    tooltip = props.tooltip,
    otherProps = _objectWithoutPropertiesLoose(props, [
      'icon',
      'className',
      'tooltip',
    ]);

  return React.createElement(
    Tooltip,
    {
      title: tooltip,
    },
    React.createElement(
      MUIIconButton,
      Object.assign({}, otherProps, {
        size: 'small',
      }),
      mappings[icon]
    )
  );
};

var ArrayFieldTemplate = function ArrayFieldTemplate(props) {
  var schema = props.schema,
    _props$registry = props.registry,
    registry =
      _props$registry === void 0 ? getDefaultRegistry() : _props$registry;

  if (isMultiSelect(schema, registry.definitions)) {
    return React.createElement(
      DefaultFixedArrayFieldTemplate,
      Object.assign({}, props)
    );
  } else {
    return React.createElement(
      DefaultNormalArrayFieldTemplate,
      Object.assign({}, props)
    );
  }
};

var ArrayFieldTitle = function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
    idSchema = _ref.idSchema,
    title = _ref.title,
    required = _ref.required;

  if (!title) {
    return React.createElement('div', null);
  }

  var id = idSchema.$id + '__title';
  return React.createElement(TitleField, {
    id: id,
    title: title,
    required: required,
  });
};

var ArrayFieldDescription = function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
    idSchema = _ref2.idSchema,
    description = _ref2.description;

  if (!description) {
    return React.createElement('div', null);
  }

  var id = idSchema.$id + '__description';
  return React.createElement(DescriptionField, {
    id: id,
    description: description,
  });
}; // Used in the two templates

var DefaultArrayItem = function DefaultArrayItem(props) {
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  };
  return React.createElement(
    Grid,
    {
      container: true,
      key: props.index,
      alignItems: 'center',
    },
    React.createElement(
      Grid,
      {
        item: true,
        xs: (props.uiSchema && props.uiSchema['ui:width']) || true,
      },
      props.uiSchema['ui:nobox']
        ? props.children
        : React.createElement(
            Box,
            {
              mb: 2,
            },
            React.createElement(
              Paper,
              {
                elevation: 2,
              },
              React.createElement(
                Box,
                {
                  p: 2,
                },
                props.children
              )
            )
          )
    ),
    props.hasToolbar &&
      React.createElement(
        Grid,
        {
          item: true,
        },
        React.createElement(
          Grid,
          {
            container: true,
            direction: 'column',
          },
          (props.hasMoveUp || props.hasMoveDown) &&
            React.createElement(
              IconButton,
              {
                icon: 'arrow-up',
                className: 'array-item-move-up',
                tabIndex: -1,
                style: btnStyle,
                tooltip: 'Move Up',
                disabled: props.disabled || props.readonly || !props.hasMoveUp,
                onClick: props.onReorderClick(props.index, props.index - 1),
              },
              React.createElement(ArrowUpward, null)
            ),
          (props.hasMoveUp || props.hasMoveDown) &&
            React.createElement(
              IconButton,
              {
                icon: 'arrow-down',
                tabIndex: -1,
                tooltip: 'Move Down',
                style: btnStyle,
                disabled:
                  props.disabled || props.readonly || !props.hasMoveDown,
                onClick: props.onReorderClick(props.index, props.index + 1),
              },
              React.createElement(ArrowDownward, null)
            ),
          props.hasRemove &&
            React.createElement(
              IconButton,
              {
                icon: 'remove',
                tabIndex: -1,
                style: btnStyle,
                tooltip: 'Remove',
                disabled: props.disabled || props.readonly,
                onClick: props.onDropIndexClick(props.index),
              },
              React.createElement(Remove, null)
            )
        )
      )
  );
};

var DefaultFixedArrayFieldTemplate = function DefaultFixedArrayFieldTemplate(
  props
) {
  return React.createElement(
    'fieldset',
    {
      className: props.className,
    },
    React.createElement(ArrayFieldTitle, {
      key: 'array-field-title-' + props.idSchema.$id,
      TitleField: props.TitleField,
      idSchema: props.idSchema,
      title: props.uiSchema['ui:title'] || props.title,
      required: props.required,
    }),
    (props.uiSchema['ui:description'] || props.schema.description) &&
      React.createElement(
        'div',
        {
          className: 'field-description',
          key: 'field-description-' + props.idSchema.$id,
        },
        props.uiSchema['ui:description'] || props.schema.description
      ),
    React.createElement(
      'div',
      {
        className: 'row array-item-list',
        key: 'array-item-list-' + props.idSchema.$id,
      },
      props.items && props.items.map(DefaultArrayItem)
    ),
    props.canAdd &&
      React.createElement(AddButton, {
        className: 'array-item-add',
        onClick: props.onAddClick,
        disabled: props.disabled || props.readonly,
        label: props.uiSchema.buttonLabel,
      })
  );
};

var DefaultNormalArrayFieldTemplate = function DefaultNormalArrayFieldTemplate(
  props
) {
  return React.createElement(
    Paper,
    {
      elevation: 2,
    },
    React.createElement(
      Box,
      {
        p: 2,
      },
      React.createElement(ArrayFieldTitle, {
        key: 'array-field-title-' + props.idSchema.$id,
        TitleField: props.TitleField,
        idSchema: props.idSchema,
        title: props.uiSchema['ui:title'] || props.title,
        required: props.required,
      }),
      (props.uiSchema['ui:description'] || props.schema.description) &&
        React.createElement(ArrayFieldDescription, {
          key: 'array-field-description-' + props.idSchema.$id,
          DescriptionField: props.DescriptionField,
          idSchema: props.idSchema,
          description:
            props.uiSchema['ui:description'] || props.schema.description,
        }),
      React.createElement(
        Grid,
        {
          container: true,
          key: 'array-item-list-' + props.idSchema.$id,
        },
        props.items &&
          props.items.map(function(p) {
            return DefaultArrayItem(
              _extends(
                _extends({}, p),
                {},
                {
                  uiSchema: props.uiSchema,
                }
              )
            );
          }),
        props.canAdd &&
          React.createElement(
            Grid,
            {
              container: true,
              justify: 'flex-end',
            },
            React.createElement(
              Grid,
              {
                item: true,
              },
              React.createElement(
                Box,
                {
                  mt: 2,
                },
                React.createElement(
                  AddButton,
                  Object.assign(
                    {
                      className: 'array-item-add',
                      onClick: props.onAddClick,
                      disabled: props.disabled || props.readonly,
                    },
                    props.uiSchema['ui:options'] && {
                      label: props.uiSchema['ui:options']['addButtonLabel'],
                    }
                  )
                )
              )
            )
          )
      )
    )
  );
};

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React.createElement(
    Paper,
    {
      elevation: 2,
    },
    React.createElement(
      Box,
      {
        mb: 2,
        p: 2,
      },
      React.createElement(
        Typography,
        {
          variant: 'h6',
          component: 'h6',
        },
        'Errors'
      ),
      React.createElement(
        List,
        {
          dense: true,
        },
        errors.map(function(error, i) {
          return React.createElement(
            ListItem,
            {
              key: i,
            },
            React.createElement(
              ListItemIcon,
              null,
              React.createElement(ErrorIcon, {
                color: 'error',
              })
            ),
            React.createElement(ListItemText, {
              primary: error.stack,
            })
          );
        })
      )
    )
  );
};

var useStyles = /*#__PURE__*/ makeStyles({
  root: {
    marginTop: 5,
  },
});

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;

  if (description) {
    var classes = useStyles();
    return React.createElement(
      Typography,
      {
        variant: 'subtitle2',
        className: classes.root,
      },
      description
    );
  }

  return null;
};

var TitleField = function TitleField(_ref) {
  var title = _ref.title;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Box,
      {
        mb: 1,
        mt: 1,
      },
      React.createElement(
        Typography,
        {
          variant: 'h6',
        },
        title
      ),
      React.createElement(Divider, null)
    )
  );
};

var Fields = {
  DescriptionField: DescriptionField,
  TitleField: TitleField,
};

var FieldTemplate = function FieldTemplate(_ref) {
  var id = _ref.id,
    children = _ref.children,
    displayLabel = _ref.displayLabel,
    required = _ref.required,
    _ref$rawErrors = _ref.rawErrors,
    rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
    rawHelp = _ref.rawHelp,
    rawDescription = _ref.rawDescription;
  var helpText =
    rawErrors && rawErrors.length > 0
      ? rawErrors.map(function(error, ind) {
          return React.createElement(
            'span',
            {
              key: ind,
            },
            error
          );
        })
      : rawHelp;
  return React.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
      error: rawErrors.length ? true : false,
    },
    children,
    displayLabel && rawDescription
      ? React.createElement(
          Typography,
          {
            variant: 'caption',
            color: 'textSecondary',
          },
          rawDescription
        )
      : null,
    helpText &&
      React.createElement(
        FormHelperText,
        {
          id: id,
        },
        helpText
      )
  );
};

var useStyles$1 = /*#__PURE__*/ makeStyles({
  root: {
    flexDirection: 'row',
  },
});

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var DescriptionField = _ref.DescriptionField,
    description = _ref.description,
    TitleField = _ref.TitleField,
    title = _ref.title,
    properties = _ref.properties,
    required = _ref.required,
    uiSchema = _ref.uiSchema,
    idSchema = _ref.idSchema;
  var classes = useStyles$1();
  console.log(properties);
  return React.createElement(
    React.Fragment,
    null,
    (uiSchema['ui:title'] || (uiSchema['ui:title'] !== false && title)) &&
      React.createElement(TitleField, {
        id: idSchema.$id + '-title',
        title: title,
        required: required,
      }),
    description &&
      React.createElement(DescriptionField, {
        id: idSchema.$id + '-description',
        description: description,
      }),
    React.createElement(
      Grid,
      {
        container: true,
        spacing: 2,
        className: classes.root,
      },
      properties.map(function(element, index) {
        return element.content.props.uiSchema['ui:widget'] === 'hidden'
          ? React.createElement('div', {
              key: index,
            })
          : React.createElement(
              Grid,
              {
                item: true,
                xs:
                  (uiSchema[element.name] &&
                    uiSchema[element.name]['ui:width']) ||
                  12,
                key: index,
              },
              element.content
            );
      })
    )
  );
};

var CheckboxWidget = function CheckboxWidget(props) {
  var id = props.id,
    value = props.value,
    required = props.required,
    disabled = props.disabled,
    readonly = props.readonly,
    label = props.label,
    options = props.options,
    autofocus = props.autofocus,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus;

  var _onChange = function _onChange(_ref, checked) {
    _objectDestructuringEmpty(_ref);

    return onChange(checked);
  };

  var _onBlur = function _onBlur(_ref2) {
    var value = _ref2.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref3) {
    var value = _ref3.target.value;
    return onFocus(id, value);
  };

  var labelPlacement = 'end';

  if (options.labelPlacement === 'start') {
    labelPlacement = 'start';
  }

  return React.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
      margin: 'dense',
    },
    React.createElement(FormControlLabel, {
      control: React.createElement(Checkbox, {
        id: id,
        checked: typeof value === 'undefined' ? false : value,
        required: required,
        disabled: disabled || readonly,
        autoFocus: autofocus,
        onChange: _onChange,
        onBlur: _onBlur,
        onFocus: _onFocus,
      }),
      labelPlacement: labelPlacement,
      label: label,
    })
  );
};

var selectValue = function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order

  return updated.sort(function(a, b) {
    return all.indexOf(a) > all.indexOf(b);
  });
};

var deselectValue = function deselectValue(value, selected) {
  return selected.filter(function(v) {
    return v !== value;
  });
};

var CheckboxesWidget = function CheckboxesWidget(_ref) {
  var schema = _ref.schema,
    label = _ref.label,
    id = _ref.id,
    disabled = _ref.disabled,
    options = _ref.options,
    value = _ref.value,
    autofocus = _ref.autofocus,
    readonly = _ref.readonly,
    required = _ref.required,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
    enumDisabled = options.enumDisabled,
    inline = options.inline;

  var _onChange = function _onChange(option) {
    return function(_ref2) {
      var checked = _ref2.target.checked;
      var all = enumOptions.map(function(_ref3) {
        var value = _ref3.value;
        return value;
      });

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };
  };

  var _onBlur = function _onBlur(_ref4) {
    var value = _ref4.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref5) {
    var value = _ref5.target.value;
    return onFocus(id, value);
  };

  return React.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
    },
    React.createElement(
      FormLabel,
      {
        htmlFor: id,
      },
      label || schema.title
    ),
    React.createElement(
      FormGroup,
      null,
      enumOptions.map(function(option, index) {
        var checked = value.indexOf(option.value) !== -1;
        var itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) != -1;
        var checkbox = React.createElement(Checkbox, {
          id: id + '_' + index,
          checked: checked,
          disabled: disabled || itemDisabled || readonly,
          autoFocus: autofocus && index === 0,
          onChange: _onChange(option),
          onBlur: _onBlur,
          onFocus: _onFocus,
        });
        return inline
          ? React.createElement(FormControlLabel, {
              control: checkbox,
              key: index,
              label: option.label,
            })
          : React.createElement(FormControlLabel, {
              control: checkbox,
              key: index,
              label: option.label,
            });
      })
    )
  );
};

var ColorWidget = function ColorWidget(_ref) {
  var readonly = _ref.readonly,
    required = _ref.required,
    disabled = _ref.disabled,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    schema = _ref.schema;

  var _useState = useState(value),
    color = _useState[0],
    updateColor = _useState[1];

  var _onChange = function _onChange(_color) {
    onChange(_color.hex);

    if (color == _color.hex) {
      toggleMode(!mode);
    } else {
      updateColor(_color.hex);
    }
  };

  var _useState2 = useState(false),
    show = _useState2[0],
    toggleShow = _useState2[1];

  var _useState3 = useState(false),
    mode = _useState3[0],
    toggleMode = _useState3[1];

  var colors = [
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

  var getSwatchColors = function getSwatchColors(_color) {
    for (var i = 0; i < colors.length; i++) {
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

  var isShade = function isShade(color, _color) {
    return (
      color[100] == _color ||
      color[300] == _color ||
      color[700] == _color ||
      color[900] == _color
    );
  };

  var squareStyle = {
    background: color,
    width: '30px',
    height: '30px',
    borderRadius: '5px',
    marginTop: '5px',
    opacity: disabled ? 0.5 : 1,
    border: '1px solid #DCDCDC',
  };
  var swatchStyle = {
    position: 'absolute',
    left: '275px',
    top: '70px',
    zIndex: 1,
  };
  var basicStyle = {
    position: 'absolute',
    left: '-7px',
    top: '70px',
    zIndex: 1,
  };
  return React.createElement(
    FormControl$1,
    {
      fullWidth: true,
      required: required,
      disabled: disabled,
    },
    React.createElement(FormHelperText$1, null, label || schema.title),
    React.createElement('div', {
      style: squareStyle,
      onClick: function onClick() {
        if (!(readonly || disabled)) {
          if (
            colors.some(function(_color) {
              return isShade(_color, color);
            })
          ) {
            toggleMode(true);
          }

          toggleShow(!show);
        }
      },
    }),
    show &&
      React.createElement(
        ClickAwayListener,
        {
          onClickAway: function onClickAway() {
            return toggleShow(!show);
          },
        },
        React.createElement(
          'div',
          {
            style: basicStyle,
          },
          React.createElement(TwitterPicker, {
            color: value,
            onChange: _onChange,
            colors: colors.map(function(val) {
              return val[500];
            }),
          })
        )
      ),
    show &&
      mode &&
      !!getSwatchColors(value) &&
      React.createElement(
        ClickAwayListener,
        {
          onClickAway: function onClickAway() {
            toggleMode(!mode);
          },
        },
        React.createElement(
          'div',
          {
            style: swatchStyle,
          },
          React.createElement(SwatchesPicker, {
            color: value,
            onChange: _onChange,
            onChangeComplete: function onChangeComplete(_color) {
              toggleShow(!show);
            },
            colors: getSwatchColors(value),
            height: 160,
          })
        )
      )
  );
};

var DateWidget = function DateWidget(_ref) {
  var id = _ref.id,
    readonly = _ref.readonly,
    required = _ref.required,
    disabled = _ref.disabled,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    schema = _ref.schema;

  var _onChange = function _onChange(_date, value) {
    onChange(moment(value).format('YYYY-MM-DD'));
  };

  var _displayValue = moment(value).format('MM/DD/YYYY');

  return React.createElement(
    FormControl$1,
    {
      fullWidth: true,
      required: required,
    },
    React.createElement(KeyboardDatePicker, {
      autoOk: true,
      variant: 'inline',
      format: 'MM/DD/YYYY',
      margin: 'normal',
      id: id,
      label: label || schema.title,
      disabled: disabled || readonly,
      value: _displayValue,
      onChange: _onChange,
      KeyboardButtonProps: {
        'aria-label': 'change date',
      },
      disablePast: true,
      error: false,
      helperText: null,
    })
  );
};

var PasswordWidget = function PasswordWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    value = _ref.value,
    label = _ref.label,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    options = _ref.options,
    autofocus = _ref.autofocus,
    schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === '' ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(
    FormControl,
    {
      fullWidth: true,
      //error={!!rawErrors}
      required: required,
    },
    React.createElement(TextField, {
      id: id,
      label: label || schema.title,
      autoFocus: autofocus,
      required: required,
      disabled: disabled || readonly,
      type: 'password',
      value: value ? value : '',
      onChange: _onChange,
      onFocus: _onFocus,
      onBlur: _onBlur,
    })
  );
};

var RadioWidget = function RadioWidget(_ref) {
  var id = _ref.id,
    schema = _ref.schema,
    options = _ref.options,
    value = _ref.value,
    required = _ref.required,
    disabled = _ref.disabled,
    readonly = _ref.readonly,
    label = _ref.label,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus;
  // Generating a unique field name to identify this set of radio buttons
  var name = Math.random().toString();
  var enumOptions = options.enumOptions,
    enumDisabled = options.enumDisabled;

  var _onChange = function _onChange(_ref2, value) {
    _objectDestructuringEmpty(_ref2);

    return onChange(schema.type == 'boolean' ? value !== 'false' : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var row = options ? options.inline : false;
  return React.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
    },
    React.createElement(
      FormLabel,
      {
        htmlFor: id,
      },
      label || schema.title
    ),
    React.createElement(
      RadioGroup,
      {
        name: name,
        value: '' + value,
        row: row,
        onChange: _onChange,
        onBlur: _onBlur,
        onFocus: _onFocus,
      },
      enumOptions.map(function(option, i) {
        var itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) != -1;
        var radio = React.createElement(FormControlLabel, {
          control: React.createElement(Radio, {
            color: 'primary',
            key: i,
          }),
          label: '' + option.label,
          value: '' + option.value,
          key: i,
          disabled: disabled || itemDisabled || readonly,
        });
        return radio;
      })
    )
  );
};

var RangeWidget = function RangeWidget(_ref) {
  var value = _ref.value,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    options = _ref.options,
    schema = _ref.schema,
    onChange = _ref.onChange,
    required = _ref.required,
    label = _ref.label,
    id = _ref.id;

  var sliderProps = _extends(
    {
      value: value,
      label: label,
      id: id,
    },
    rangeSpec(schema)
  );

  var _onChange = function _onChange(_ref2, value) {
    _objectDestructuringEmpty(_ref2);

    return onChange(value === '' ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(
    Grid,
    {
      container: true,
      alignItems: 'flex-end',
    },
    React.createElement(
      FormControl,
      {
        fullWidth: true,
        //error={!!rawErrors}
        required: required,
      },
      React.createElement(
        FormLabel,
        {
          id: id,
        },
        label
      ),
      React.createElement(
        Slider,
        Object.assign({}, sliderProps, {
          disabled: disabled || readonly,
          onChange: _onChange,
          onBlur: _onBlur,
          onFocus: _onFocus,
        })
      )
    )
  );
};

var nums = /*#__PURE__*/ new Set(['number', 'integer']);
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */

var processValue = function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
    items = schema.items;

  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values

  if (schema['enum']) {
    if (
      schema['enum'].every(function(x) {
        return guessType(x) === 'number';
      })
    ) {
      return asNumber(value);
    } else if (
      schema['enum'].every(function(x) {
        return guessType(x) === 'boolean';
      })
    ) {
      return value === 'true';
    }
  }

  return value;
};

var find = function find(array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].value === val) {
      return array[i];
    }
  }
};

var SelectWidget = function SelectWidget(_ref) {
  var schema = _ref.schema,
    id = _ref.id,
    options = _ref.options,
    label = _ref.label,
    required = _ref.required,
    disabled = _ref.disabled,
    readonly = _ref.readonly,
    value = _ref.value,
    multiple = _ref.multiple,
    autofocus = _ref.autofocus,
    placeholder = _ref.placeholder,
    rawErrors = _ref.rawErrors,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
    enumDisabled = options.enumDisabled,
    autoComplete = options.autoComplete;
  var enumImages = schema.enumImages;
  var labelRef = React.useRef(null);
  var labelWidth = labelRef.current
    ? labelRef.current.clientWidth
    : (label || schema.title || '').length * 12;
  var emptyValue = multiple ? [] : '';

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(processValue(schema, value));
  };

  var _onAutoCompleteChange = function _onAutoCompleteChange(
    _event,
    value,
    _reason
  ) {
    return onChange(processValue(schema, value && value.value));
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, processValue(schema, value));
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, processValue(schema, value));
  };

  var size = 'medium';

  if (options.size === 'small') {
    size = 'small';
  }

  var variant = 'standard';

  if (options.variant === 'outlined') {
    variant = 'outlined';
  }

  if (options.variant === 'filled') {
    variant = 'filled';
  }

  return React.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
      error: !!rawErrors,
      size: size,
      margin: 'dense',
      variant: variant,
    },
    autoComplete
      ? React.createElement(Autocomplete, {
          value:
            typeof value === 'undefined'
              ? emptyValue
              : find(enumOptions, value),
          id: id,
          disabled: disabled || readonly || schema.readonly,
          onChange: _onAutoCompleteChange,
          options: enumOptions,
          size: size,
          getOptionLabel: function getOptionLabel(option) {
            return option.label || '';
          },
          renderInput: function renderInput(params) {
            return React.createElement(
              TextField$1,
              Object.assign({}, params, {
                error: !!rawErrors,
                autoFocus: autofocus,
                onBlur: _onBlur,
                onFocus: _onFocus,
                required: required,
                label: label || schema.title || undefined,
                variant: variant,
              })
            );
          },
        })
      : React.createElement(
          React.Fragment,
          null,
          ' ',
          (label || schema.title) !== ''
            ? React.createElement(
                InputLabel,
                {
                  ref: labelRef,
                  shrink: true,
                  htmlFor: id,
                },
                label || schema.title
              )
            : null,
          React.createElement(
            Select,
            {
              multiple: typeof multiple === 'undefined' ? false : multiple,
              value: typeof value === 'undefined' ? emptyValue : value,
              label: label || schema.title || undefined,
              labelWidth: labelWidth,
              displayEmpty: !!placeholder,
              error: !!rawErrors,
              required: required,
              id: id,
              disabled: disabled || readonly || schema.readonly,
              autoFocus: autofocus,
              onChange: _onChange,
              onBlur: _onBlur,
              onFocus: _onFocus,
            },
            placeholder
              ? React.createElement(
                  MenuItem,
                  {
                    value: '',
                    disabled: true,
                  },
                  placeholder
                )
              : null,
            enumOptions.map(function(_ref5, i) {
              var value = _ref5.value,
                label = _ref5.label;
              var disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
              return React.createElement(
                MenuItem,
                {
                  key: i,
                  value: value,
                  disabled: disabled,
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                  },
                },
                enumImages && enumImages[i]
                  ? React.createElement('img', {
                      src: enumImages[i],
                      style: {
                        width: '15px',
                        height: '15px',
                        marginRight: '6px',
                      },
                    })
                  : null,
                label
              );
            })
          )
        )
  );
};

var TextareaWidget = function TextareaWidget(_ref) {
  var id = _ref.id,
    placeholder = _ref.placeholder,
    value = _ref.value,
    required = _ref.required,
    disabled = _ref.disabled,
    autofocus = _ref.autofocus,
    label = _ref.label,
    readonly = _ref.readonly,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    onChange = _ref.onChange,
    options = _ref.options,
    schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === '' ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(
    FormControl,
    {
      fullWidth: true,
      //error={!!rawErrors}
      required: required,
    },
    React.createElement(TextField, {
      id: id,
      label: label || schema.title,
      placeholder: placeholder,
      disabled: disabled || readonly,
      value: value,
      required: required,
      autoFocus: autofocus,
      multiline: true,
      rows: options.rows || undefined,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus,
    })
  );
};

var filter = /*#__PURE__*/ createFilterOptions();

var TextWidget = function TextWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    label = _ref.label,
    value = _ref.value,
    rawErrors = _ref.rawErrors,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    autofocus = _ref.autofocus,
    options = _ref.options,
    schema = _ref.schema;
  var autoCompleteOptions = options.autoCompleteOptions,
    autoComplete = options.autoComplete;
  var enumOptions = autoCompleteOptions || [];

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === '' ? options.emptyValue : value);
  };

  var _onAutoCompleteChange = function _onAutoCompleteChange(
    _event,
    value,
    _reason
  ) {
    return onChange(value === '' ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var size = 'medium';

  if (options.size === 'small') {
    size = 'small';
  }

  var variant = 'standard';

  if (options.variant === 'outlined') {
    variant = 'outlined';
  }

  if (options.variant === 'filled') {
    variant = 'filled';
  }

  return React.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
    },
    autoComplete
      ? React.createElement(Autocomplete, {
          value: value ? value : '',
          freeSolo: true,
          id: id,
          disabled: disabled || readonly,
          onInputChange: _onAutoCompleteChange,
          options: enumOptions,
          size: size,
          handleHomeEndKeys: true,
          selectOnFocus: true,
          clearOnBlur: true,
          getOptionLabel: function getOptionLabel(option) {
            return option || '';
          },
          filterOptions: function filterOptions(options, params) {
            var filtered = filter(options, params); // Suggest the creation of a new value

            if (params.inputValue !== '') {
              filtered.push('Add "' + params.inputValue + '"');
            }

            return filtered;
          },
          renderInput: function renderInput(params) {
            return React.createElement(
              TextField,
              Object.assign({}, params, {
                margin: 'dense',
                error: !!rawErrors,
                autoFocus: autofocus,
                onBlur: _onBlur,
                onFocus: _onFocus,
                required: required,
                label: label || schema.title || undefined,
                variant: variant,
              })
            );
          },
        })
      : React.createElement(TextField, {
          error: !!rawErrors,
          id: id,
          label: label || schema.title,
          size: size,
          margin: 'dense',
          variant: variant,
          autoFocus: autofocus,
          required: required,
          disabled: disabled || readonly,
          type: 'text',
          value: value ? value : '',
          onChange: _onChange,
          onBlur: _onBlur,
          onFocus: _onFocus,
        })
  );
};

var UpDownWidget = function UpDownWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    autofocus = _ref.autofocus;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(
    FormControl,
    {
      fullWidth: true,
      //error={!!rawErrors}
      required: required,
    },
    React.createElement(InputLabel, null, label),
    React.createElement(Input, {
      id: id,
      autoFocus: autofocus,
      required: required,
      type: 'number',
      disabled: disabled || readonly,
      name: name,
      value: value ? value : '',
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus,
    })
  );
};

var EmailWidget = function EmailWidget(_ref) {
  var id = _ref.id,
    required = _ref.required,
    readonly = _ref.readonly,
    disabled = _ref.disabled,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    autofocus = _ref.autofocus,
    options = _ref.options,
    schema = _ref.schema;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === '' ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(
    FormControl,
    {
      fullWidth: true,
      //error={!!rawErrors}
      required: required,
    },
    React.createElement(TextField, {
      id: id,
      label: label || schema.title,
      autoFocus: autofocus,
      required: required,
      disabled: disabled || readonly,
      type: 'email',
      value: value ? value : '',
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus,
    })
  );
};

var Widgets = {
  CheckboxWidget: CheckboxWidget,
  CheckboxesWidget: CheckboxesWidget,
  ColorWidget: ColorWidget,
  DateWidget: DateWidget,
  PasswordWidget: PasswordWidget,
  RadioWidget: RadioWidget,
  RangeWidget: RangeWidget,
  SelectWidget: SelectWidget,
  TextareaWidget: TextareaWidget,
  TextWidget: TextWidget,
  UpDownWidget: UpDownWidget,
  EmailWidget: EmailWidget,
};

var _getDefaultRegistry = /*#__PURE__*/ getDefaultRegistry(),
  fields = _getDefaultRegistry.fields,
  widgets = _getDefaultRegistry.widgets;

var Theme = {
  ArrayFieldTemplate: ArrayFieldTemplate,
  fields: /*#__PURE__*/ _extends(/*#__PURE__*/ _extends({}, fields), Fields),
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  widgets: /*#__PURE__*/ _extends(/*#__PURE__*/ _extends({}, widgets), Widgets),
  ErrorList: ErrorList,
};

var MuiForm = /*#__PURE__*/ withTheme(Theme);

export default MuiForm;
export { FieldTemplate, Fields, MuiForm, ObjectFieldTemplate, Theme, Widgets };
//# sourceMappingURL=rjsf-material-ui.esm.js.map
