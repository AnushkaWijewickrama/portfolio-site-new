

export interface IButton {
  primary?: string,
  secondary?: string,
  success?: string,
  danger?: string,
  warning?: string,
  light?: string,
  dark?: string
}

export class Button implements IButton {
  constructor(
    public primary?: string,
    public secondary?: string,
    public success?: string,
    public danger?: string,
    public warning?: string,
    public light?: string,
    public dark?: string
  ) { }
}
