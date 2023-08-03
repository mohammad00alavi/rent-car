export type FactoryComponent<T> = {
    [K in keyof T]: T[K];
};
