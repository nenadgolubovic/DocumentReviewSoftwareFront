export interface partDto {
  partId?:number;
  name: string;
  partNumber: string;
  description: string;
  serialNumber: string;
  type : partTypeEnum;
  momentWeight : string;
}

export enum partTypeEnum {
  Basic = 'Basic',
  FanBlade = 'FanBlade'
}