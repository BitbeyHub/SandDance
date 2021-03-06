var treeMapTest;
(function (treeMapTest) {
    SandDance.use(vega, deck, deck, luma);
    treeMapTest.viewer = new SandDance.Viewer(document.querySelector('#vis'));
    var glDiv = treeMapTest.viewer.presenter.getElement(SandDance.VegaDeckGl.PresenterElement.gl);
    var options = {
        columns: {
            color: 'Class',
            size: 'TicketCost',
            uid: 'Name'
        },
        scheme: 'category10',
        size: {
            height: glDiv.offsetHeight,
            width: glDiv.offsetWidth
        },
        chart: 'treemap'
    };
    vega.loader().load('../../sample-data/titanicmaster.tsv').then(function (text) {
        var data = vega.read(text, { type: 'tsv' });
        treeMapTest.viewer.render(options, data);
    });
})(treeMapTest || (treeMapTest = {}));
