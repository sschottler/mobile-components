def defaultParamsValues() {

}

pipeline {
  agent { 
    // docker { image 'node:6.3' }}
    docker {
      // image 'docker.werally.in/reactnativecommunity/react-native-android'
      image 'reactnativecommunity/react-native-android'
      args '-u root:root'
      // label 'ec2-8cpu'
    }
  }

  parameters {
    choice(
      name: 'releaseType',
      choices: 'patch\nminor\nmajor\nalpha',
      description: '''
      Type of SEMVER release:

      patch: (default) For small bug fixes or changes. Increments the last number: 0.0.X
      minor: For bigger and non breaking changes. Increments the middle number: 0.X.0
      major: For bigger and breaking changes. Increments the first number: X.0.0
      alpha: For alpha releases. Adds alpha to the version number: 0.0.0 => 0.0.1-alpha.0+${SHA}
      '''
    )
    string(
      name: 'branchToRelease',
      defaultValue: 'develop',
      description: '''
      Set the branch name that you need to create a release from. Defaults to develop.
      '''
    )
    booleanParam(
      name: 'forceRelease',
      defaultValue: false,
      description: '''
      Set this option to TRUE if you need to force a release from "branchToRelease" and bypass the check for the merged branch name
      to contain: "feature-release" (Useful when you don't want to create a PR to develop and wait until it is merge OR when you 
      need to release from a specific branch)
      '''
    )
  }
  stages {
    stage('INSTALL DEPENDENCIES') {
      steps {
        withNPM(npmrcConfig: 'personal-npmrc') {
          sh '''
            npm whoami
            yarn install
          '''
        }
      }
    }

    // stage('LINT / BUILD / TEST') {
    //   steps {
    //     sh '''
    //     yarn lint
    //     yarn prepare
    //     yarn test
    //     '''
    //   }
    // }

    // stage('PUBLISH TO NPM') {
    //   when {
    //     expression { 
    //       forceRelease == 'true'
    //     }
    //   }

    //   steps {
    //     withCredentials([string(credentialsId: 'release-it-github-token', variable: 'GITHUB_TOKEN')]){
    //       script {
    //         try {
    //           sh '''
    //           npm whoami
    //           npm run release
    //           '''
    //         } catch (exc) {
    //           sh '''
    //           echo "script catch block hit"
    //           '''
    //         }
    //       }
    //     }
    //   }
    // }
  }
}