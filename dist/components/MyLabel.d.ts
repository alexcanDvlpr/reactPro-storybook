/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Title is the displayed text. Default value is `Empty`
     */
    label: string;
    /**
     * Label size. Value by default is `normal`
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * Show label in capital letters
     */
    allCaps?: boolean;
    /**
     * The color of label. By default is `primary`
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * FontColor is the color of the text
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
