const ResumeParser = require('./src');

const fileDir = process.cwd() + '/files/';
ResumeParser
  .parseResume(fileDir + 'resume.pdf', fileDir + 'compiled') //input file, output dir
  .then(file => {
    console.log("Yay! " + Object.keys(file));
    console.log(file);
  })
  .catch(error => {
    console.log('parseResume failed');
    console.error(error);
  });

/*ResumeParser.parseResumeUrl('http://www.mysite.com/resume.txt') // url
  .then(data => {
    console.log('Yay! ', data);
  })
  .catch(error => {
    console.log('parseResume failed');
    console.error(error);
  });*/
