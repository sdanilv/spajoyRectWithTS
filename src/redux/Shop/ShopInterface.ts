export interface IFilter{
    filter: {
        price: {
            min: number,
            max: number
        }
        town: string,
        gender: string,
        category: string
    }
}
export interface IProduct {
    town: string, gender: string, category: string,
    price: number, duration: number, dataId: string, img: File,
    describe: string
}
export interface IShopState extends IFilter{
    readonly products: IProduct[],
}