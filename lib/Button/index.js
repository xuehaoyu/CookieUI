import React from 'react';
import classNames from 'classnames';
import './index.scss';
/** 按钮 */
var Button = function (props) {
    var tempClassName = props.className, style = props.style, onClick = props.onClick, children = props.children, primary = props.primary, secondary = props.secondary, outline = props.outline, dashed = props.dashed, link = props.link, text = props.text, round = props.round, noRadius = props.noRadius, fat = props.fat, xLarge = props.xLarge, large = props.large, small = props.small, xSmall = props.xSmall, xxSmall = props.xxSmall, long = props.long, short = props.short, href = props.href, success = props.success, danger = props.danger, warn = props.warn, disabled = props.disabled;
    var className = classNames({
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
    }, tempClassName);
    return (React.createElement("button", { type: 'button', className: className, style: style, onClick: onClick, disabled: disabled },
        React.createElement("span", { className: 'cxu-button-content' }, children)));
};
export default Button;
//# sourceMappingURL=index.js.map