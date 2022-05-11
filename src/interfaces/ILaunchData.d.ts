import ILaunchDataPayload from "./ILaunchDataPayload"

export default interface ILaunchData {
  payloads: ILaunchDataPayload[],
  name: string,
  flight_number: number,
  date_utc: string,
  date_local: string,
  id: string
}
