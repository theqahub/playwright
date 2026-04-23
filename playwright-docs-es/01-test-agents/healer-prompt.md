# Prompt sugerido para Healer Agent

El fichero 01-test-agents/generated/crear-varias-tareas.spec.ts está fallando al realizar la acción await expect(listaTareas.last()).toHaveText('Tarea tres'); debido a que la aplicación tiene varias listas y se está solapando con la ya existente:

<ul class="filters"><li><a href="#/" class="selected">All</a></li> <li><a href="#/active" class="">Active</a></li> <li><a href="#/completed" class="">Completed</a></li></ul>

Y está confundiendo ambas y cogiendo ese último li llamado "Completed", para solucionarlo te planteo que cojas la lista correcta:

<ul class="todo-list"><li data-testid="todo-item" class=""><div class="view"><input aria-label="Toggle Todo" class="toggle" type="checkbox"><label data-testid="todo-title">Tarea 1</label><button aria-label="Delete" class="destroy"></button></div><input aria-label="Edit" class="edit" value="Tarea 1"></li><li data-testid="todo-item" class=""><div class="view"><input aria-label="Toggle Todo" class="toggle" type="checkbox"><label data-testid="todo-title">Tarea 2</label><button aria-label="Delete" class="destroy"></button></div><input aria-label="Edit" class="edit" value="Tarea 2"></li><li data-testid="todo-item" class=""><div class="view"><input aria-label="Toggle Todo" class="toggle" type="checkbox"><label data-testid="todo-title">Tarea 3</label><button aria-label="Delete" class="destroy"></button></div><input aria-label="Edit" class="edit" value="Tarea 3"></li></ul>

Desde la clase ".todo-list" y no la que se llama ".filters"