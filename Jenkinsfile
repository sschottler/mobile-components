pipeline {
  agent { docker { image 'node:6.3' }}
  stages {
    stage('build') {
      steps {
        // withCredentials([usernamePassword(credentialsId: 'npm', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
        withNPM(npmrcConfig: 'personal-npmrc') {
          sh '''
            npm whoami
            npm release
          '''
        }
      }
    }
  }
}