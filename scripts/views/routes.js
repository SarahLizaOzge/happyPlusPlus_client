'use strict';

if (window.location.pathname !== '/') page.base('/happyPlusPlus_client');

page('/', () => app.pageView.initIndexPage());
page('/first', () => app.getVideos(() => app.pageView.firstPage(), `motivation+ted+talk`));
page('/second', () => app.getVideos(() => app.pageView.secondPage(), `inspire+travel`));
page('/third', () => app.getVideos(() => app.pageView.thirdPage(), `grit+goals`));
page('/fourth', () => app.getVideos(() => app.pageView.fourthPage(), `health+fitness`));
page('/user', () => app.pageView.initSignUpPage());
page('/users/login', (ctx) => app.pageView.initLoginPage(ctx));
page('/users/update', (ctx, next) => app.User.getUserInfo(ctx, next), ctx => app.pageView.initUpdateUser(ctx));
page('/users/delete', (ctx, next) => app.User.getUserInfo(ctx, next), ctx => app.pageView.initDeleteUser(ctx));
page('/users/favorite', (ctx, next) => app.User.getUserInfo(ctx, next), ctx => app.pageView.initFavoritePage(ctx));
page('/about', () => app.pageView.initAboutPage());
page();