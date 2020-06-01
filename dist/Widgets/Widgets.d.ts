/// <reference types="react-jsonschema-form" />
/// <reference types="react" />
declare const _default: {
  CheckboxWidget: (
    props: import('react-jsonschema-form').WidgetProps
  ) => JSX.Element;
  CheckboxesWidget: ({
    schema,
    label,
    id,
    disabled,
    options,
    value,
    autofocus,
    readonly,
    required,
    onChange,
    onBlur,
    onFocus,
  }: import('react-jsonschema-form').WidgetProps) => JSX.Element;
  ColorWidget: ({
    readonly,
    required,
    disabled,
    label,
    value,
    onChange,
    schema,
  }: import('react-jsonschema-form').WidgetProps) => JSX.Element;
  DateWidget: ({
    id,
    readonly,
    required,
    disabled,
    label,
    value,
    onChange,
    schema,
  }: import('react-jsonschema-form').WidgetProps) => JSX.Element;
  PasswordWidget: ({
    id,
    required,
    readonly,
    disabled,
    value,
    label,
    onFocus,
    onBlur,
    onChange,
    options,
    autofocus,
    schema,
  }: import('react-jsonschema-form').WidgetProps) => JSX.Element;
  RadioWidget: ({
    id,
    schema,
    options,
    value,
    required,
    disabled,
    readonly,
    label,
    onChange,
    onBlur,
    onFocus,
  }: import('react-jsonschema-form').WidgetProps) => JSX.Element;
  RangeWidget: ({
    value,
    readonly,
    disabled,
    onBlur,
    onFocus,
    options,
    schema,
    onChange,
    required,
    label,
    id,
  }: import('react-jsonschema-form').WidgetProps) => JSX.Element;
  SelectWidget: ({
    schema,
    id,
    options,
    label,
    required,
    disabled,
    readonly,
    value,
    multiple,
    autofocus,
    placeholder,
    rawErrors,
    onChange,
    onBlur,
    onFocus,
  }: any) => JSX.Element;
  TextareaWidget: ({
    id,
    placeholder,
    value,
    required,
    disabled,
    autofocus,
    label,
    readonly,
    onBlur,
    onFocus,
    onChange,
    options,
    schema,
  }: import('react-jsonschema-form').WidgetProps & {
    options: any;
  }) => JSX.Element;
  TextWidget: ({
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
  }: import('react-jsonschema-form').WidgetProps) => JSX.Element;
  UpDownWidget: ({
    id,
    required,
    readonly,
    disabled,
    label,
    value,
    onChange,
    onBlur,
    onFocus,
    autofocus,
  }: import('react-jsonschema-form').WidgetProps) => JSX.Element;
  EmailWidget: ({
    id,
    required,
    readonly,
    disabled,
    label,
    value,
    onChange,
    onBlur,
    onFocus,
    autofocus,
    options,
    schema,
  }: import('react-jsonschema-form').WidgetProps) => JSX.Element;
};
export default _default;
