'use strict';

page('/', () => app.pageView.initIndexPage());
page('/first', () => app.pageView.firstPage());
page('/second', () => app.pageView.secondPage());
page('/third', () => app.pageView.thirdPage());
page('/user', () => app.pageView.signUpPage());
page('/users/login', (ctx) => app.pageView.initLoginPage(ctx));
page('/users/update', (ctx, next) => app.User.getUserInfo(ctx, next), ctx => app.pageView.initUpdateUser(ctx));
page('/users/delete', (ctx, next) => app.User.getUserInfo(ctx, next), ctx => app.pageView.initDeleteUser(ctx));
page();