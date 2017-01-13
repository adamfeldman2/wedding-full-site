import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'bar-graph',

  eqaoMaxScore: 4,
  fraserMaxScore: 10,
  minScore: 0,

  // Average yearly EQAO scores //
  eqaoAvg2013: 2.3,
  eqaoAvg2014: 2.5,
  eqaoAvg2015: 2.5,
  eqaoAvg2016: 2.7,

  fraserAvg2013: 6.9,
  fraserAvg2014: 7.1,
  fraserAvg2015: 7.0,
  fraserAvg2016: 6.6,

  year2013: {
    eqaoScore: 2.9,
    fraserScore: 8.3
  },

  year2014: {
    eqaoScore: 2.9,
    fraserScore: 8.3
  },

  year2015: {
    eqaoScore: 2.9,
    fraserScore: 8.3
  },

  year2016: {
    eqaoScore: 2.9,
    fraserScore: 8.3
  },

  avgPercentEqao2013: Ember.computed('eqaoAvg2013', 'eqaoMaxScore', function() {
    return this.get('eqaoAvg2013') / this.get('eqaoMaxScore') * 100;
  }),

  schoolPercentEqao2013: Ember.computed('year2013.{eqaoScore}', 'eqaoMaxScore', function() {
    return this.get('year2013.eqaoScore') / this.get('eqaoMaxScore') * 100;
  })

});
