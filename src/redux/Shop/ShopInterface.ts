export interface IFilter{
        price: {
            min: number,
            max: number
        }
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