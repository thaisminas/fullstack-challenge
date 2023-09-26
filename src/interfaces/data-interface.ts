export interface Data {
    device: Device;
    plans: Plans[];
}

interface Device {
    name: string;
}


export interface Plans {
    id: number,
    type: string,
    name: string,
    phonePrice:number,
    phonePriceOnPlan:number,
    installments:number,
    monthlyFee:number,
    schedule: Schedule,
    locale: Locale
}

interface Schedule {
    startDate: string
}

interface Locale {
    name: string,
    priority: number
}
