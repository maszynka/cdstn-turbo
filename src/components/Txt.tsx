import { ReactNode } from "react";
import './txt.scss';
import clsx, { ClassValue } from "clsx";

export const GradientTxtWrap = ({children}: {children: ReactNode}) => (
  <h3 className="gradient-txt-wrap">
    <span>{children}</span>
  </h3>
);

export const GradientTxt = ({children, className}: {children: ReactNode, className: ClassValue}) => (
    <span className={clsx("gradient-txt", className)}>
     {children}
    </span>
  );
  
