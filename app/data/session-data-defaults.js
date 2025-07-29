function _loadVersions(){

  // Import the converter library
  const excelToJSON = require('convert-excel-to-json');

  // Load in the data
  let json = excelToJSON({
    sourceFile: 'app/data/prototype-kit-versions.xlsx'
  });

  // If we have the data, format it, otherwise, set an error message
  if( json ){
    json = _formatJSON( json );
  } else {
    json = 'Something went wrong!';
  }

  // Output the data
  return json;

};


function _formatJSON( json ){

  // Create a holder array for the people
  const releases = [];

  // Check if the JSON exists, that Sheet1 is there, and that Sheet1 is an array
  if( json && json.Sheet1 && Array.isArray( json.Sheet1 ) ){

    // Loop through all the rows in the array
    json.Sheet1.forEach(function( row, i ){

      // The first row (0) contains all the column headers, so we only need row 1 and over
      if( i > 0 ){
        
        // Map out our data into a more easily understandable format
        const release = {};

        release.release = row.A;
        release.date = row.B;
        release.version = row.C;
        release.notes = row.D;

        // Add this release to our holder array
        releases.push( release );

      }

    });
    

  }

  return releases;

};


module.exports = {

    debug: 'false',
    loggedIn: 'false',

    versions: _loadVersions()

}