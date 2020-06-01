/// <reference types="react" />
import { WidgetProps } from 'react-jsonschema-form';
declare const TextWidget: ({
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
}: WidgetProps) => JSX.Element;
export default TextWidget;
