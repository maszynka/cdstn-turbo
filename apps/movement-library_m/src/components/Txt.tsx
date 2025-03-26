import { type ElementType, type ReactNode } from "react";
import './txt.scss';
import clsx, { type ClassValue } from "clsx";

export const GradientTxtWrap = ({children, as: Component = 'span', className}: {children: ReactNode, as?: ElementType, className?: string}) => (
  <Component className={clsx("gradient-txt-wrap", className)}>
    <span className="gradient-txt-border"></span>
    <span className="gradient-txt__label">{children}</span>
  </Component>
);

export const GradientTxt = ({children, className}: {children: ReactNode, className?: ClassValue}) => (
    <span className={clsx("gradient-txt", className)}>
     {children}
    </span>
  );
  
