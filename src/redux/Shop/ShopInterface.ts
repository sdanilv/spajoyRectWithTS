export interface IPrice {
    min: number,
    max: number
}
export interface IFilter{
        price?: IPrice
        town?: string,
        gender?: string,
        category?: string
}
export interface IProduct {
    town: string, gender: string, category: string,
    price: number, duration: number, dataId: string, img: string,
    describe: string
}
export interface IShopState{
    filter:  IFilter,
    readonly products: IProduct[],
}