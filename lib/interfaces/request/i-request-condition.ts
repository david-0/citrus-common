export interface IRequestCondition<C> {
  match(item: C): boolean;
  matchId(id: number): boolean;
  isRangeCondition(): boolean;
}
