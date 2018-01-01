'use strict';

page('/', () => app.pageView.initIndexPage());
// page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage));
// page('/new', () => app.bookView.initAddNewPage());

// // Catch all to take user back to home page
// // Doesn't work currently
// page('*', () => {
//   console.log('Detected unknown path.');
//   app.Book.fetchAll(app.bookView.initIndexPage);
// });
page('/first', () => app.pageView.firstPage());
page('/second', () => app.pageView.secondPage());
page('/third', () => app.pageView.thirdPage());
page('/user', () => app.pageView.loginPage(app.pageView.initAddUserPage()));

//pageView.firstPage = ()

page();