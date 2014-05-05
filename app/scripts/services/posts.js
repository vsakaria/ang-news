'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://scorching-fire-4068.firebaseio.com//posts/:id.json');
});