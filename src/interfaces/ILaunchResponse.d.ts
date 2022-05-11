import ILaunchData from "./ILaunchData";

export default interface ILaunchResponse {
  docs: Array<ILaunchData>,
  totalDocs: number,
  offset: number,
  limit: number,
  totalPages: number,
  pages: number,
  pagingCounter: number,
  hasPrevPage: boolean,
  hasNextPage: boolean,
  prevPage?: number,
  nextPage?: number
}