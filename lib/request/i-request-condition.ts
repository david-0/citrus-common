export interface IRequestCondition {
  match(item: any): boolean;
  matchId(id: number): boolean;
  isRangeCondition(): boolean;
  toString(): string;
}
