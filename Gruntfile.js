module.exports = function(grunt) {
  var projectFolderName = "project-ci";
  grunt.initConfig({
    sshconfig: {
      default: {
        host: process.env.DEPLOY_HOST,
        path: process.env.DEPLOY_PATH + "/" + projectFolderName,
        username: process.env.DEPLOY_USERNAME,
        password: process.env.DEPLOY_PASSWORD,
      }
    },
    sftp: {
      deploy: {
        files: {
          './': ['server/**', 'public/**', '!public/config.js', '!public/bower_components/**', 'package.json', 'bower.json', '.bowerrc']
        },
        options: {          
          showProgress: true,          
          createDirectories: true
        }
      }
    },
    sshexec: {
      npm: {
        command: "cd "+projectFolderName+" && npm install"
      },
      bower: {
        command: "cd "+projectFolderName+" && bower install"
      },
      start: {
        command: "cd "+projectFolderName+"/server && node server.js"
      }
    }   

  });
  grunt.option('config', 'default');
  grunt.loadNpmTasks('grunt-ssh');
  grunt.registerTask('deploy', ['sftp:deploy', 'sshexec:npm', 'sshexec:bower', 'sshexec:start']);
};
