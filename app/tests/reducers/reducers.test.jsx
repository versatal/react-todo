var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict')

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
    // Test that the showCompleted status gets flipped
  });
  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });
  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    //define todos array with realist todo item
    //generate action
    //call reducer and asert completed flipped
    it('should toggle todo completed status', () => {
      var testTodos = [
        {
          id: 123,
          text: 'Go Running',
          completed: true,
          createdAt: 101010,
          completedAt: 202020
        }
      ];
      var action = {
        type: 'TOGGLE_TODO',
        id: 123
      };
      var res = reducers.todosReducer(df(testTodos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });

  });
});