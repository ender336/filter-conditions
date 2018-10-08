import { FilterDataType } from "./datatype";

export enum FilterOperator {
    Equals = "Equals",
    Contains = "Contains",
    Greater = "Greater",
    Less = "Less",
    GreaterOrEqual = "GreaterOrEqual",
    LessOrEqual = "LessOrEqual",
    Range = "Range",
    IsTrue = "IsTrue",
    IsFalse = "IsFalse",
    IsEmptyString = "IsEmptyString"
}

export const DataTypeOperators = {
    [FilterDataType.String]: [
        FilterOperator.Equals,
        FilterOperator.Contains,
        FilterOperator.IsEmptyString
    ],
    [FilterDataType.Number]: [
        FilterOperator.Equals,
        FilterOperator.Greater,
        FilterOperator.Less,
        FilterOperator.GreaterOrEqual,
        FilterOperator.LessOrEqual,
        FilterOperator.Range
    ],
    [FilterDataType.Boolean]: [
        FilterOperator.IsTrue,
        FilterOperator.IsFalse
    ],
    [FilterDataType.Date]: [
        FilterOperator.Equals,
        FilterOperator.Greater,
        FilterOperator.Less,
        FilterOperator.GreaterOrEqual,
        FilterOperator.LessOrEqual,
        FilterOperator.Range
    ]
};
