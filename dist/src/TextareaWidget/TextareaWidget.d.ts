/// <reference types="react" />
import { WidgetProps } from 'react-jsonschema-form';
declare type CustomWidgetProps = WidgetProps & {
  options: any;
};
declare const TextareaWidget: ({
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
}: CustomWidgetProps) => JSX.Element;
export default TextareaWidget;
