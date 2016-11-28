var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../js/components/gallery');

describe('Gallery component', function() {
    it('Renders a gallery of images',  function() {
        var url = "http://www.example.com/image.png";
        var description = "Example description";

        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery url={url} description={description} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');

        var gallery = result.props.children[0];
        gallery.type.should.equal('img');
        gallery.props.Image.src.should.equal(url);
        gallery.props.Image.alt.should.equal(description);

        var p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);

        var img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);
    });
});