ApplicationRouter = Backbone.Marionette.AppRouter.extend({
	routes: {
		"": "home",
		"home": "home",
		"program": "program",
		"papers": "papers",
		"keynote": "keynote",
		"posters": "posters",
		"transport": "transport",
		"photos": "photos",
		"history": "history",
		"register": "register",
		"map": "map"
	},

	deselectPills: function () {
		$('ul.sidebar li').removeClass('active');
	},

	selectPill: function (pill) {
		this.deselectPills();
		$(pill).addClass('active');
	},

	home: function () {
		this.selectPill('ul.sidebar li.home');
		MyApp.contentRegion.show(new ContentHomeView());
	},

	keynote: function () {
		this.selectPill('ul.sidebar li.keynote');
		MyApp.contentRegion.show(new ContentKeynoteView());
	},

	program: function () {
		this.selectPill('ul.sidebar li.program');
		MyApp.contentRegion.show(new ContentProgramView());
	},

	papers: function () {
		this.selectPill('ul.sidebar li.papers');
		MyApp.contentRegion.show(new ContentPapersView());
	},

	posters: function () {
		this.selectPill('ul.sidebar li.posters');
		MyApp.contentRegion.show(new ContentPostersView());
	},

	transport: function () {
		this.selectPill('ul.sidebar li.transport');
		MyApp.contentRegion.show(new ContentTransportView());
	},

	photos: function () {
		this.selectPill('ul.sidebar li.photos');
		MyApp.contentRegion.show(new ContentPhotosView());
	},

	history: function () {
		this.selectPill('ul.sidebar li.history');
		MyApp.contentRegion.show(new ContentHistoryView());
	},
	
    homeSection: function (pill, id) {
        MyApp.contentRegion.show(new ContentHomeView());
        this.selectPill(pill);
        var el = document.getElementById(id);
        if (el) { el.scrollIntoView(); }
    },

    register: function () {
        var url = window.REGISTER_REDIRECT_LINK.registerRedirectUrl;
        if (url) { window.location.href = url; return; }
        this.homeSection('ul.sidebar li.registration', 'registration');
    },

    map: function () {
        this.homeSection('ul.sidebar li.map', 'eventdetails');
    }
});
