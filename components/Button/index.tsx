import React from 'react'
import classNames from 'classnames'
import './index.scss'

export interface IButtonProps {
  onClick?: React.MouseEventHandler;
  // 类型
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  dashed?: boolean;
  link?: boolean;
  text?: boolean;

  // 形状
  round?: boolean;
  noRadius?: boolean;
  fat?: boolean;

  // 尺寸
  xLarge?: boolean;
  large?: boolean;
  small?: boolean;
  xSmall?: boolean;
  xxSmall?: boolean;

  // 宽度
  long?: boolean;
  short?: boolean;

  // 颜色
  success?: boolean;
  warn?: boolean;
  danger?: boolean;

  // 禁用状态
  disabled?: boolean;

  href?: string;

  className?: string;
  style?: React.CSSProperties;

  children?: React.ReactNode;
}

/** 按钮 */
const Button: React.FC = (props: IButtonProps) => {
  const {
    className: tempClassName,
    style,
    onClick,
    children,
    primary,
    secondary,
    outline,
    dashed,
    link,
    text,
    round,
    noRadius,
    fat,
    xLarge,
    large,
    small,
    xSmall,
    xxSmall,
    long,
    short,
    href,
    success,
    danger,
    warn,
    disabled
  } = props

  const className = classNames(
    {
      'cxu-button': true,
      'cxu-button-primary': primary,
      'cxu-button-secondary': secondary && !text,
      'cxu-button-outline': outline,
      'cxu-button-dashed': dashed,
      'cxu-button-link': link,
      'cxu-button-text': text && !secondary,
      'cxu-button-text-secondary': secondary && text,
      'cxu-button-round': round,
      'cxu-button-rectangle': noRadius,
      'cxu-button-fat': fat,
      'cxu-button-xl': xLarge,
      'cxu-button-lg': large,
      'cxu-button-sm': small,
      'cxu-button-xs': xSmall,
      'cxu-button-xxs': xxSmall,
      'cxu-button-long': long,
      'cxu-button-short': short,
      'cxu-button-success': success,
      'cxu-button-warn': warn,
      'cxu-button-danger': danger,
      'cxu-button-disabled': disabled
    },
    tempClassName
  )

  return (
    <button
      type='button'
      className={className}
      style={style}
      onClick={onClick}
      disabled={disabled}>
      <span className='cxu-button-content'>{children}</span>
    </button>
  )
}

export default Button
