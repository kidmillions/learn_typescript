class BaseRecipeCategory {
    private _name: string;
    private _foodGroups: FoodGroup[] = [];
    get name() {
      return this._name;
    }
    set name(val: string) {
      this._name = val;
    }
    get foodGroups() {
      return this._foodGroups
    }
    set foodGroups(groups: FoodGroup[]) {
      this._foodGroups = groups;
    }

}
