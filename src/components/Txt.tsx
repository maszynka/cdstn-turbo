import { ReactNode } from "react";
import './txt.scss';
import clsx, { ClassValue } from "clsx";

export const GradientTxtWrap = ({children, as: Component = 'span', className}: {children: ReactNode, as: string, className?: string}) => (
  <Component className="gradient-txt-wrap">
    <span className="gradient-txt-border"></span>
    <span className="gradient-txt__label">{children}</span>
  </Component>
);

export const GradientTxt = ({children, className}: {children: ReactNode, className?: ClassValue}) => (
    <span className={clsx("gradient-txt", className)}>
     {children}
    </span>
  );
  
