/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slideExample = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true ;}
};

var slide1 = {
  slideNumber: 1,
  title: "Title one",
  filter: function(geojsonFeature) { return true ;}
};

var slide2 = {
  slideNumber: 2,
  title: "Title two",
  filter: function(geojsonFeature) { return 'Title two' ;}
};

var slide3 = {
  slideNumber: 3,
  title: "Title three",
  filter: function(geojsonFeature) { return 'Title three' ;}
};

var slide4 = {
  slideNumber: 4,
  title: "Title four",
  filter: function(geojsonFeature) { return  'Title four' ;}
};

var slide5 = {
  slideNumber: 5,
  title: "Title five",
  filter: function(geojsonFeature) { return 'Title five' ;}
};

var slide6 = {
  slideNumber: 6,
  title: "Title six",
  filter: function(geojsonFeature) { return 'Title six' ;}
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slide1, slide2, slide3, slide4, slide5, slide6];

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3]
