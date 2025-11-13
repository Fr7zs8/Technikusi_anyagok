export interface IDog{
    id: number | undefined | null
    name: string,
    breed: string,
    gender: boolean,
    age: BigInt | null
    picurl: string | null
}

export default class Dog implements IDog{
    id: number | undefined | null
    name: string = ""
    breed: string = ""
    gender: boolean = false
    age: BigInt | null = null
    picurl: string | null = null

    constructor(init: IDog){
        this.name = init.name;
        this.breed = init.breed;
        this.gender = init.gender;
        this.age = init.age;
        this.picurl = init.picurl;

        //Object.assign(this, init as Partial<Dog>)
    }

    

}