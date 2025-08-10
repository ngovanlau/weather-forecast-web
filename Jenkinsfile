pipeline {
	agent any

	environment  {
		BUILD_DIR = "build"
	}

	stages {
		stage('Checkout') {
			steps {
				git branch: 'master', url: 'https://github.com/ngovanlau/weather-forecast-web.git'
			}
		}

		stage('Install Dependencies') {
			steps {
				sh 'npm install'
			}
		}

		stage('Build') {
			steps {
				sh 'npm run build'
			}
		}
	}

	post {
		success {
			echo 'Build successfully'
		}

		failure {
			echo 'Build failed'
		}
	}
}
