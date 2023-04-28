import { atom, selector } from "recoil"

export interface StockType {
  id: number
  name: string
}

export interface KeywordType {
  id: number
  name: string
}

export const selectedLaboratoryStockState = atom<StockType | undefined>({
  key: "selectedLaboratoryStockState",
  default: undefined,
})

export const selectedLaboratoryKeywordListState = atom<KeywordType[] | []>({
  key: "selectedLaboratoryKeywordListState",
  default: [],
})