const { I } = inject();

Feature('Todo App');

Scenario('Could add new item to list', async () => {
  I.waitForElement('.new-todo');
  I.fillField('.new-todo', 'Hello World');
  I.pressKey('Enter')
  I.waitForElement('[type="checkbox"]')
});