module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  filters.getTableRows = function( releases ){

    const rows = [];

    if( Array.isArray(releases) && releases.length > 0 ){

      releases.forEach(function( release ){
        rows.push([
          { text: release.release },
          { text: release.version },
          { html: '<span class="nhsuk-body-s">'+release.date+'</span>' },
          { html: '<span class="nhsuk-body-s">'+release.notes+'</span>' },
        ]);
      });

    }

    return rows;

  };

  filters.alterTodaysDate = function( plus ){

    const { DateTime } = require('luxon');

    let returnDate = DateTime.now().setZone('Europe/London').toFormat('d LLLL yyyy');

    if( Object.prototype.toString.call( plus ) === '[object Object]' ){
      returnDate = DateTime.now().setZone('Europe/London').plus( plus ).toFormat('d LLLL yyyy');
    } 

    return returnDate;

  };

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
