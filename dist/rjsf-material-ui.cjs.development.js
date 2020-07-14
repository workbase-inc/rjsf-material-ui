'use strict';

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var reactJsonschemaForm = require('react-jsonschema-form');
var React = require('react');
var React__default = _interopDefault(React);
var utils = require('react-jsonschema-form/lib/utils');
var Box = _interopDefault(require('@material-ui/core/Box'));
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var AddIcon = _interopDefault(require('@material-ui/icons/Add'));
var MUIIconButton = _interopDefault(require('@material-ui/core/IconButton'));
var ArrowUpward = _interopDefault(require('@material-ui/icons/ArrowUpward'));
var ArrowDownward = _interopDefault(
  require('@material-ui/icons/ArrowDownward')
);
var Remove = _interopDefault(require('@material-ui/icons/Remove'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var List = _interopDefault(require('@material-ui/core/List'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemIcon = _interopDefault(require('@material-ui/core/ListItemIcon'));
var ErrorIcon = _interopDefault(require('@material-ui/icons/Error'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var styles = require('@material-ui/styles');
var Divider = _interopDefault(require('@material-ui/core/Divider'));
var FormControl = _interopDefault(require('@material-ui/core/FormControl'));
var FormHelperText = _interopDefault(
  require('@material-ui/core/FormHelperText')
);
var Checkbox = _interopDefault(require('@material-ui/core/Checkbox'));
var FormControlLabel = _interopDefault(
  require('@material-ui/core/FormControlLabel')
);
var FormLabel = _interopDefault(require('@material-ui/core/FormLabel'));
var FormGroup = _interopDefault(require('@material-ui/core/FormGroup'));
var core = require('@material-ui/core');
var reactColor = require('react-color');
var _ = require('@material-ui/core/colors/');
var pickers = require('@material-ui/pickers');
var moment = _interopDefault(require('moment'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var Radio = _interopDefault(require('@material-ui/core/Radio'));
var RadioGroup = _interopDefault(require('@material-ui/core/RadioGroup'));
var Slider = _interopDefault(require('@material-ui/core/Slider'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var Select = _interopDefault(require('@material-ui/core/Select'));
var InputLabel = _interopDefault(require('@material-ui/core/InputLabel'));
var Autocomplete = require('@material-ui/lab/Autocomplete');
var Autocomplete__default = _interopDefault(Autocomplete);
var Input = _interopDefault(require('@material-ui/core/Input'));

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
  return React__default.createElement(
    Button,
    Object.assign({}, props, {
      color: 'secondary',
    }),
    React__default.createElement(AddIcon, null),
    ' ',
    props.label || 'Add Item'
  );
};

var mappings = {
  remove: /*#__PURE__*/ React__default.createElement(Remove, null),
  plus: /*#__PURE__*/ React__default.createElement(AddIcon, null),
  'arrow-up': /*#__PURE__*/ React__default.createElement(ArrowUpward, null),
  'arrow-down': /*#__PURE__*/ React__default.createElement(ArrowDownward, null),
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

  return React__default.createElement(
    Tooltip,
    {
      title: tooltip,
    },
    React__default.createElement(
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
      _props$registry === void 0 ? utils.getDefaultRegistry() : _props$registry;

  if (utils.isMultiSelect(schema, registry.definitions)) {
    return React__default.createElement(
      DefaultFixedArrayFieldTemplate,
      Object.assign({}, props)
    );
  } else {
    return React__default.createElement(
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
    return React__default.createElement('div', null);
  }

  var id = idSchema.$id + '__title';
  return React__default.createElement(TitleField, {
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
    return React__default.createElement('div', null);
  }

  var id = idSchema.$id + '__description';
  return React__default.createElement(DescriptionField, {
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
  return React__default.createElement(
    Grid,
    {
      container: true,
      key: props.index,
      alignItems: 'center',
    },
    React__default.createElement(
      Grid,
      {
        item: true,
        xs: (props.uiSchema && props.uiSchema['ui:width']) || true,
      },
      props.uiSchema['ui:nobox']
        ? props.children
        : React__default.createElement(
            Box,
            {
              mb: 2,
            },
            React__default.createElement(
              Paper,
              {
                elevation: 2,
              },
              React__default.createElement(
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
      React__default.createElement(
        Grid,
        {
          item: true,
        },
        React__default.createElement(
          Grid,
          {
            container: true,
            direction: 'column',
          },
          (props.hasMoveUp || props.hasMoveDown) &&
            React__default.createElement(
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
              React__default.createElement(ArrowUpward, null)
            ),
          (props.hasMoveUp || props.hasMoveDown) &&
            React__default.createElement(
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
              React__default.createElement(ArrowDownward, null)
            ),
          props.hasRemove &&
            React__default.createElement(
              IconButton,
              {
                icon: 'remove',
                tabIndex: -1,
                style: btnStyle,
                tooltip: 'Remove',
                disabled: props.disabled || props.readonly,
                onClick: props.onDropIndexClick(props.index),
              },
              React__default.createElement(Remove, null)
            )
        )
      )
  );
};

var DefaultFixedArrayFieldTemplate = function DefaultFixedArrayFieldTemplate(
  props
) {
  var innerArrayContent = React__default.createElement(
    'fieldset',
    {
      className: props.className,
    },
    React__default.createElement(ArrayFieldTitle, {
      key: 'array-field-title-' + props.idSchema.$id,
      TitleField: props.TitleField,
      idSchema: props.idSchema,
      title: props.uiSchema['ui:title'] || props.title,
      required: props.required,
    }),
    (props.uiSchema['ui:description'] || props.schema.description) &&
      React__default.createElement(
        'div',
        {
          className: 'field-description',
          key: 'field-description-' + props.idSchema.$id,
        },
        props.uiSchema['ui:description'] || props.schema.description
      ),
    React__default.createElement(
      'div',
      {
        className: 'row array-item-list',
        key: 'array-item-list-' + props.idSchema.$id,
      },
      props.items && props.items.map(DefaultArrayItem)
    ),
    props.canAdd &&
      React__default.createElement(AddButton, {
        className: 'array-item-add',
        onClick: props.onAddClick,
        disabled: props.disabled || props.readonly,
        label: props.uiSchema.buttonLabel,
      })
  );
  return React__default.createElement(
    React__default.Fragment,
    null,
    ' ',
    props.uiSchema['ui:nobox']
      ? {
          innerArrayContent: innerArrayContent,
        }
      : React__default.createElement(
          Paper,
          {
            elevation: 2,
          },
          React__default.createElement(
            Box,
            {
              p: 2,
            },
            innerArrayContent
          )
        )
  );
};

var DefaultNormalArrayFieldTemplate = function DefaultNormalArrayFieldTemplate(
  props
) {
  var innerArrayContent = React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(ArrayFieldTitle, {
      key: 'array-field-title-' + props.idSchema.$id,
      TitleField: props.TitleField,
      idSchema: props.idSchema,
      title: props.uiSchema['ui:title'] || props.title,
      required: props.required,
    }),
    (props.uiSchema['ui:description'] || props.schema.description) &&
      React__default.createElement(ArrayFieldDescription, {
        key: 'array-field-description-' + props.idSchema.$id,
        DescriptionField: props.DescriptionField,
        idSchema: props.idSchema,
        description:
          props.uiSchema['ui:description'] || props.schema.description,
      }),
    React__default.createElement(
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
        React__default.createElement(
          Grid,
          {
            container: true,
            justify: 'flex-end',
          },
          React__default.createElement(
            Grid,
            {
              item: true,
            },
            React__default.createElement(
              Box,
              {
                mt: 2,
              },
              React__default.createElement(
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
  );
  return React__default.createElement(
    React__default.Fragment,
    null,
    ' ',
    props.uiSchema['ui:nobox']
      ? {
          innerArrayContent: innerArrayContent,
        }
      : React__default.createElement(
          Paper,
          {
            elevation: 2,
          },
          React__default.createElement(
            Box,
            {
              p: 2,
            },
            innerArrayContent
          )
        )
  );
};

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React__default.createElement(
    Paper,
    {
      elevation: 2,
    },
    React__default.createElement(
      Box,
      {
        mb: 2,
        p: 2,
      },
      React__default.createElement(
        Typography,
        {
          variant: 'h6',
          component: 'h6',
        },
        'Errors'
      ),
      React__default.createElement(
        List,
        {
          dense: true,
        },
        errors.map(function(error, i) {
          return React__default.createElement(
            ListItem,
            {
              key: i,
            },
            React__default.createElement(
              ListItemIcon,
              null,
              React__default.createElement(ErrorIcon, {
                color: 'error',
              })
            ),
            React__default.createElement(ListItemText, {
              primary: error.stack,
            })
          );
        })
      )
    )
  );
};

var useStyles = /*#__PURE__*/ styles.makeStyles({
  root: {
    marginTop: 5,
  },
});

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;

  if (description) {
    var classes = useStyles();
    return React__default.createElement(
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
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      Box,
      {
        mb: 1,
        mt: 1,
      },
      React__default.createElement(
        Typography,
        {
          variant: 'h6',
        },
        title
      ),
      React__default.createElement(Divider, null)
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
          return React__default.createElement(
            'span',
            {
              key: ind,
            },
            error
          );
        })
      : rawHelp;
  return React__default.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
      error: rawErrors.length ? true : false,
    },
    children,
    displayLabel && rawDescription
      ? React__default.createElement(
          Typography,
          {
            variant: 'caption',
            color: 'textSecondary',
          },
          rawDescription
        )
      : null,
    helpText &&
      React__default.createElement(
        FormHelperText,
        {
          id: id,
        },
        helpText
      )
  );
};

var useStyles$1 = /*#__PURE__*/ styles.makeStyles({
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
  return React__default.createElement(
    React__default.Fragment,
    null,
    (uiSchema['ui:title'] || (uiSchema['ui:title'] !== false && title)) &&
      React__default.createElement(TitleField, {
        id: idSchema.$id + '-title',
        title: title,
        required: required,
      }),
    description &&
      React__default.createElement(DescriptionField, {
        id: idSchema.$id + '-description',
        description: description,
      }),
    React__default.createElement(
      Grid,
      {
        container: true,
        spacing: 2,
        className: classes.root,
      },
      properties.map(function(element, index) {
        return element.content.props.uiSchema['ui:widget'] === 'hidden'
          ? React__default.createElement('div', {
              key: index,
            })
          : React__default.createElement(
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

  return React__default.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
      margin: 'dense',
    },
    React__default.createElement(FormControlLabel, {
      control: React__default.createElement(Checkbox, {
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

  return React__default.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
    },
    React__default.createElement(
      FormLabel,
      {
        htmlFor: id,
      },
      label || schema.title
    ),
    React__default.createElement(
      FormGroup,
      null,
      enumOptions.map(function(option, index) {
        var checked = value.indexOf(option.value) !== -1;
        var itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) != -1;
        var checkbox = React__default.createElement(Checkbox, {
          id: id + '_' + index,
          checked: checked,
          disabled: disabled || itemDisabled || readonly,
          autoFocus: autofocus && index === 0,
          onChange: _onChange(option),
          onBlur: _onBlur,
          onFocus: _onFocus,
        });
        return inline
          ? React__default.createElement(FormControlLabel, {
              control: checkbox,
              key: index,
              label: option.label,
            })
          : React__default.createElement(FormControlLabel, {
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

  var _useState = React.useState(value),
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

  var _useState2 = React.useState(false),
    show = _useState2[0],
    toggleShow = _useState2[1];

  var _useState3 = React.useState(false),
    mode = _useState3[0],
    toggleMode = _useState3[1];

  var colors = [
    _.orange,
    _.lightGreen,
    _.green,
    _.yellow,
    _.lightBlue,
    _.cyan,
    _.grey,
    _.red,
    _.purple,
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
  return React__default.createElement(
    core.FormControl,
    {
      fullWidth: true,
      required: required,
      disabled: disabled,
    },
    React__default.createElement(
      core.FormHelperText,
      null,
      label || schema.title
    ),
    React__default.createElement('div', {
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
      React__default.createElement(
        core.ClickAwayListener,
        {
          onClickAway: function onClickAway() {
            return toggleShow(!show);
          },
        },
        React__default.createElement(
          'div',
          {
            style: basicStyle,
          },
          React__default.createElement(reactColor.TwitterPicker, {
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
      React__default.createElement(
        core.ClickAwayListener,
        {
          onClickAway: function onClickAway() {
            toggleMode(!mode);
          },
        },
        React__default.createElement(
          'div',
          {
            style: swatchStyle,
          },
          React__default.createElement(reactColor.SwatchesPicker, {
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

  return React__default.createElement(
    core.FormControl,
    {
      fullWidth: true,
      required: required,
    },
    React__default.createElement(pickers.KeyboardDatePicker, {
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

  return React__default.createElement(
    FormControl,
    {
      fullWidth: true,
      //error={!!rawErrors}
      required: required,
    },
    React__default.createElement(TextField, {
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
  return React__default.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
    },
    React__default.createElement(
      FormLabel,
      {
        htmlFor: id,
      },
      label || schema.title
    ),
    React__default.createElement(
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
        var radio = React__default.createElement(FormControlLabel, {
          control: React__default.createElement(Radio, {
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
    utils.rangeSpec(schema)
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

  return React__default.createElement(
    Grid,
    {
      container: true,
      alignItems: 'flex-end',
    },
    React__default.createElement(
      FormControl,
      {
        fullWidth: true,
        //error={!!rawErrors}
        required: required,
      },
      React__default.createElement(
        FormLabel,
        {
          id: id,
        },
        label
      ),
      React__default.createElement(
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
    return value.map(utils.asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return utils.asNumber(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values

  if (schema['enum']) {
    if (
      schema['enum'].every(function(x) {
        return utils.guessType(x) === 'number';
      })
    ) {
      return utils.asNumber(value);
    } else if (
      schema['enum'].every(function(x) {
        return utils.guessType(x) === 'boolean';
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
  var labelRef = React__default.useRef(null);
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

  return React__default.createElement(
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
      ? React__default.createElement(Autocomplete__default, {
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
            return React__default.createElement(
              core.TextField,
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
      : React__default.createElement(
          React__default.Fragment,
          null,
          ' ',
          (label || schema.title) !== ''
            ? React__default.createElement(
                InputLabel,
                {
                  ref: labelRef,
                  shrink: true,
                  htmlFor: id,
                },
                label || schema.title
              )
            : null,
          React__default.createElement(
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
              ? React__default.createElement(
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
              return React__default.createElement(
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
                  ? React__default.createElement('img', {
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

  return React__default.createElement(
    FormControl,
    {
      fullWidth: true,
      //error={!!rawErrors}
      required: required,
    },
    React__default.createElement(TextField, {
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

var filter = /*#__PURE__*/ Autocomplete.createFilterOptions();

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

  return React__default.createElement(
    FormControl,
    {
      fullWidth: true,
      required: required,
    },
    autoComplete
      ? React__default.createElement(Autocomplete__default, {
          inputValue: value ? value : '',
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
            return React__default.createElement(
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
      : React__default.createElement(TextField, {
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

  return React__default.createElement(
    FormControl,
    {
      fullWidth: true,
      //error={!!rawErrors}
      required: required,
    },
    React__default.createElement(InputLabel, null, label),
    React__default.createElement(Input, {
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

  return React__default.createElement(
    FormControl,
    {
      fullWidth: true,
      //error={!!rawErrors}
      required: required,
    },
    React__default.createElement(TextField, {
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

var _getDefaultRegistry = /*#__PURE__*/ utils.getDefaultRegistry(),
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

var MuiForm = /*#__PURE__*/ reactJsonschemaForm.withTheme(Theme);

exports.FieldTemplate = FieldTemplate;
exports.Fields = Fields;
exports.MuiForm = MuiForm;
exports.ObjectFieldTemplate = ObjectFieldTemplate;
exports.Theme = Theme;
exports.Widgets = Widgets;
exports.default = MuiForm;
//# sourceMappingURL=rjsf-material-ui.cjs.development.js.map
