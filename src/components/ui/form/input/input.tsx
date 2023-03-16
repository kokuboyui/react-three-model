import clsx from 'clsx';
import { forwardRef } from 'react';

import type { ComponentProps, ForwardedRef } from 'react';

import styles from './styles.module.scss';

type TProps = ComponentProps<'input'> & {
  isError: boolean;
};

const Input = forwardRef(
  (props: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      type,
      autoComplete,
      maxLength,
      placeholder,
      name,
      isError,
      className,
      onChange,
      value,
      disabled,
    }: TProps = props;
    return (
      <input
        ref={ref}
        className={clsx(styles.container, className)}
        type={type}
        autoComplete={autoComplete}
        maxLength={maxLength}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        data-is-error={isError}
        value={value}
        disabled={disabled}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
