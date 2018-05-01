/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


$(function () {

    describe('RSS Feeds', function () {
        /*  tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('URL should be defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        });


        // test that loops through each feed in the allFeeds object and ensures it has a name defined
        // and that the name is not empty.

        it('name should be defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        });
    });


    //  test that ensures the menu changes visibility when the menu icon is clicked

    describe('The menu', function () {

        it('menu element should be hidden by default', function () {
           
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })

        it('menu should change visibility when the menu icon is clicked', function () {

            $('.menu-icon-link').click();

            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();

            expect($('body').hasClass('menu-hidden')).toBe(true);

        })
    })


    // test that ensures when the loadFeed function is called and completes its work

    describe('Initial Entries', function () {

        var feed;

        beforeEach(function (done) {

            loadFeed(0, (function () {
                feed =  $('.feed .entry').children()[0];
                done();
            }));
        });

        it('there should be at least a single .entry element within the .feed container', function (done) {

            expect(feed).toBeDefined();
            done();

        });

    });


    //  test that ensures when a new feed is loaded and the content actually changes.
    describe('New Feed Selection', function () {

        var fee1;
        var feed2;

        beforeEach(function (done) {

            loadFeed(0, function () {

                feed1 = $('.feed .entry').children()[0].innerHTML;

                loadFeed(1, function () {

                    feed2 = $('.feed .entry').children()[0].innerHTML;
                    done();

                });
            });
        });

        it('new feed should be loaded and the content should changes', function (done) {

            expect(feed1).not.toEqual(feed2);
            done();
        })
    })

}());
