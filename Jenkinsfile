pipeline {
  agent { docker { image 'node:6.3' }}
  stages {
    stage('build') {
      steps {
        withCredentials([usernameColonPassword(credentialsId: 'npm', variable: 'NPM_CREDENTIALS')]) {
          sh '''
            echo $NPM_CREDENTIALS
          '''
        }
      }
    }
  }
}