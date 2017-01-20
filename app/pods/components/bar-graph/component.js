import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'bar-graph',

  eqaoMaxScore: 4,
  fraserMaxScore: 10,
  minScore: 0,

  // Average yearly EQAO scores //
  ratings: Ember.computed('averageRatings', 'schoolRatings', 'eqaoMaxScore', 'fraserMaxScore', function() {
    const { averageRatings, schoolRatings, eqaoMaxScore, fraserMaxScore } = this.getProperties('averageRatings', 'schoolRatings', 'eqaoMaxScore', 'fraserMaxScore');
    let ratings = [];

    schoolRatings.forEach((schoolRating, index) => {
      const averageRating = averageRatings[index];
      const rating = {
        year: schoolRating.year,
        averageEqaoStyle: this.buildStyle(averageRating.eqao / eqaoMaxScore),
        averageFraserStyle: this.buildStyle(averageRating.eqao / fraserMaxScore),
        schoolEqaoStyle: this.buildStyle(schoolRating.eqao / eqaoMaxScore),
        schoolFraserStyle: this.buildStyle(schoolRating.fraser / fraserMaxScore)
      };
      ratings.addObject(rating);
    });
    return ratings;
  }),

  averageRatings: [
    {
      year: 2013,
      eqao: 2.3,
      fraser: 6.9
    },
    {
      year: 2014,
      eqao: 2.5,
      fraser: 7.1
    },
    {
      year: 2015,
      eqao: 2.3,
      fraser: 6.9
    },
    {
      year: 2016,
      eqao: 2.5,
      fraser: 7.1
    }
  ],

  schoolRatings: [
    {
      year: 2013,
      eqao: 3.9,
      fraser: 8.3
    },
    {
      year: 2014,
      eqao: 2.7,
      fraser: 7.3
    },
    {
      year: 2015,
      eqao: 2.9,
      fraser: 8.3
    },
    {
      year: 2016,
      eqao: 0.7,
      fraser: 7.3
    }
  ],

  avgPercentEqao2013: Ember.computed('eqaoAvg2013', 'eqaoMaxScore', function() {
    return this.get('eqaoAvg2013') / this.get('eqaoMaxScore') * 100;
  }),

  buildStyle(value) {
    return new Ember.String.htmlSafe(`height: ${value * 100}%;`);
  },

  schoolPercentEqao2013: Ember.computed('year2013.{eqaoScore}', 'eqaoMaxScore', function() {
    return this.get('year2013.eqaoScore') / this.get('eqaoMaxScore') * 100;
  })
});
