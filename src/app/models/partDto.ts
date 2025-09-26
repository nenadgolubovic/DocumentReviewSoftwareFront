export interface partDto {
  partId?:number;
  name: string;
  partNumber: string;
  description: string;
  serialNumber: string;
  partType : partTypeEnum
}

export enum partTypeEnum {
  Basic = 'Basic',
  FanBlade = 'Fan Blade'
}