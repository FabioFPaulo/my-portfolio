export interface IContext {
  incrementImages(): void;
  isLoading: boolean;
}

export interface IProviderProps {
  children: JSX.Element | JSX.Element[];
  totalImages: number;
}
