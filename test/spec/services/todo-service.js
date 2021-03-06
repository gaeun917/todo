'use strict';

describe('Service: todoService', function () {

  // load the service's module
  beforeEach(module('myToDoApp'));

  // instantiate service
  var todoService;
  beforeEach(inject(function (_todoService_) {
    todoService = _todoService_; // 서비스르 주입받아 테스를 위한 용도임을 명시
  }));

  it('should todos', function () {
    expect(todoService.getTodo().length).toBe(0);
  });

  it('should addTodo', function () {
    todoService.addTodo('test');
    expect(todoService.getTodo().length).toBe(1);
  });

  it('should removeTodo', function () {
    todoService.addTodo('hi');
    todoService.removeTodo(0);
    expect(todoService.getTodo().length).toBe(0);
  });

});
