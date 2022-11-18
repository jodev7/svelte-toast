import toast from './files/toast';
// Type re-export workaround, to stay compatible with TS 3.7 and lower
import type {
	ToastOptions as _ToastOptions,
	ToastPosition as _ToastPosition,
	Toast as _Toast,
	Renderable as _Renderable,
	ValueOrFunction as _ValueOrFunction,
	ToasterProps as _ToasterProps,
	DefaultToastOptions as _DefaultToastOptions,
	IconTheme as _IconTheme,
	ToastType as _ToastType,
	ValueFunction as _ValueFunction
} from './files/types';

export { default as useToaster } from './files/use-toaster';
export { useToasterStore } from './files/store';
export { default as Toaster } from './components/Toast.svelte';
export { resolveValue } from './files/types';

export type ToastOptions = _ToastOptions;
export type ToastPosition = _ToastPosition;
export type Toast = _Toast;
export type Renderable = _Renderable;
export type ValueOrFunction<TValue, TArg> = _ValueOrFunction<TValue, TArg>;
export type ToasterProps = _ToasterProps;
export type DefaultToastOptions = _DefaultToastOptions;
export type IconTheme = _IconTheme;
export type ToastType = _ToastType;
export type ValueFunction<TArg, TValue> = _ValueFunction<TArg, TValue>;

export { toast };
export default toast;
//
