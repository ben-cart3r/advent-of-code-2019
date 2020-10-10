pipeline {
  agent any
  stages {
    stage('Hello World') {
      parallel {
        stage('Hello World') {
          steps {
            echo 'Hello World'
          }
        }

        stage('Hello World 2') {
          steps {
            echo 'Hello World 2'
          }
        }

      }
    }

  }
}