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
  stages {
    stage('build') {
      steps {
        withNPM(npmrcConfig: 'personal-npmrc') {
          sh '''
            npm whoami
            yarn -v
          '''
        }
      }
    }
  }
}